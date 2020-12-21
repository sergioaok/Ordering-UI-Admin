import React, { useState, useRef, useEffect } from 'react'
import dayjs from 'dayjs'
import Skeleton from 'react-loading-skeleton'
import { useLanguage, useUtils, OrderDetails as OrderDetailsController } from 'ordering-components'
import FaUserAlt from '@meronex/icons/fa/FaUserAlt'
import BsChat from '@meronex/icons/bs/BsChat'
import HiOutlinePhone from '@meronex/icons/hi/HiOutlinePhone'
import HiOutlineLocationMarker from '@meronex/icons/hi/HiOutlineLocationMarker'
import HiOutlineArrowLeft from '@meronex/icons/hi/HiOutlineArrowLeft'
import { Button } from '../../styles/Buttons'
import { NotFoundSource } from '../NotFoundSource'
import { ProductItemAccordion } from '../ProductItemAccordion'
import { OrderStatusTypeSelector } from '../OrderStatusTypeSelector'
import { DriverSelector } from '../DriverSelector'
import { Messages } from '../Messages'

import {
  Container,
  WrapperContainer,
  OrderInfoContent,
  PhotoWrapper,
  Photo,
  OrderInfo,
  OrderData,
  StatusBar,
  OrderStatus,
  StatusImage,
  SectionTitle,
  SectionContainer,
  InfoBlock,
  CustomerContactBlock,
  OrderProducts,
  OrderBill,
  BackActions,
  SkeletonBlockWrapp,
  SkeletonBlock,
  SkeletonInfoCell,
  SkeletonInnerBlock,
  WrapperSkeletonBottom,
  WrapperSkeletonText,
  PayAndOrderTypeInfo,
  WrapperSkeletonButton,
  Paymethod,
  PaymethodContent,
  PaymethodCreatedDate,
  PaymethodCreatedDateContent,
  OrderTypeInfo,
  OrderTypeContent,
  ContactInfoContent,
  ContactInfoHeader,
  WrapperButton,
  ButtonLink,
  DriverSelectorContainer,
  PrintButtonContainer,
  ChatContainer,
  PhoneNumber
} from './styles'
import { useTheme } from 'styled-components'

const OrderDetailsUI = (props) => {
  const {
    handleBackRedirect,
    handleUpdateOrderStatus
  } = props
  const [, t] = useLanguage()
  const [openMessages, setOpenMessages] = useState({ customer: false, business: false, driver: false, history: false })
  const theme = useTheme()
  const [{ parsePrice, parseNumber }] = useUtils()

  const orderDetail = useRef(null)

  const {
    order,
    loading
  } = props.order

  const [orderTotalPrice, setOrderTotalPrice] = useState(0)

  const getOrderStatus = (status) => {
    const orderStatus = [
      { key: 0, value: 'Pending Order', slug: 'PENDING_ORDER', percentage: 25 },
      { key: 1, value: 'Completed by admin', slug: 'COMPLETED_BY_ADMIN', percentage: 100 },
      { key: 2, value: 'Reject by admin', slug: 'REJECT_BY_ADMIN', percentage: 0 },
      { key: 3, value: 'Driver arrived by business', slug: 'DRIVER_IN_BUSINESS', percentage: 60 },
      { key: 4, value: 'Ready for pickup', slug: 'READY_FOR_PICKUP', percentage: 70 },
      { key: 5, value: 'Reject by business', slug: 'REJECT_BY_BUSINESS', percentage: 0 },
      { key: 6, value: 'Reject by driver', slug: 'REJECT_BY_DRIVER', percentage: 0 },
      { key: 7, value: 'Accepted by business', slug: 'ACCEPTED_BY_BUSINESS', percentage: 35 },
      { key: 8, value: 'Accepted by driver', slug: 'ACCEPTED_BY_DRIVER', percentage: 45 },
      { key: 9, value: 'Pick up completed by driver', slug: 'PICK_UP_COMPLETED_BY_DRIVER', percentage: 80 },
      { key: 10, value: 'Pick up Failed by driver', slug: 'PICK_UP_FAILED_BY_DRIVER', percentage: 0 },
      { key: 11, value: 'Delivery completed by driver', slug: 'DELIVERY_COMPLETED_BY_DRIVER', percentage: 100 },
      { key: 12, value: 'Delivery Failed by driver', slug: 'DELIVERY_FAILED_BY_DRIVER', percentage: 0 }
    ]

    const objectStatus = orderStatus.find((o) => o.key === status)

    return objectStatus && objectStatus
  }

  const getImage = (status) => {
    try {
      return theme.images?.order?.[`status${status}`]
    } catch (error) {
      return 'https://picsum.photos/75'
    }
  }

  const handleOpenMessages = (openMessage) => {
    orderDetail.current.style.display = 'none'
    if (openMessage === 'customer') {
      setOpenMessages({ customer: true, business: false, driver: false, history: false })
    }
    if (openMessage === 'business') {
      setOpenMessages({ customer: false, business: true, driver: false, history: false })
    }
    if (openMessage === 'driver') {
      setOpenMessages({ customer: false, business: false, driver: true, history: false })
    }
    if (openMessage === 'history') {
      setOpenMessages({ customer: false, business: false, driver: false, history: true })
    }
  }

  const handleCloseMessages = () => {
    orderDetail.current.style.display = 'flex'
    setOpenMessages({ customer: false, business: false, driver: false, history: false })
  }

  useEffect(() => {
    if (loading) return
    let _orderTotalPrice = order.subtotal
    if (order?.service_fee > 0) {
      _orderTotalPrice += order?.subtotal * order?.tax / 100 + order?.subtotal * order?.service_fee / 100
    }
    if (order?.deliveryFee > 0) {
      _orderTotalPrice += order?.deliveryFee
    }
    if (order?.driver_tip > 0) {
      _orderTotalPrice += order?.subtotal * order?.driver_tip / 100
    }
    if (order.discount > 0) {
      _orderTotalPrice -= order.discount
    }

    setOrderTotalPrice(_orderTotalPrice)
  }, [order])

  return (
    <Container>
      <BackActions>
        <a onClick={() => handleBackRedirect()}>
          <HiOutlineArrowLeft />
        </a>
      </BackActions>
      {order && Object.keys(order).length > 0 && (
        <WrapperContainer ref={orderDetail}>
          <OrderInfoContent className='order-info'>
            <OrderInfo>
              <OrderData>
                <h1>{t('ORDER_NO', 'Order No')}. #{order?.id}</h1>
                {/* <p className='uuid'>{order?.uuid}</p> */}
                <p>{t('DATE_TIME_FOR_ORDER', 'Date and time for your order')}</p>
                <p className='date'>{dayjs(order?.delivery_datetime).format('YYYY-MM-DD HH:mm')}</p>
                <StatusBar percentage={getOrderStatus(order?.status)?.percentage} />
              </OrderData>
              <OrderStatus>
                <span>{getOrderStatus(order?.status)?.value}</span>
                <StatusImage>
                  <img src={getImage(order?.status || 0)} alt='status' />
                </StatusImage>
              </OrderStatus>
            </OrderInfo>

            <PayAndOrderTypeInfo>
              <Paymethod>
                <p>{t('PAYMETHOD', 'Paymethod')}</p>
                <PaymethodContent>
                  <img src={theme?.images?.icons?.cash} alt='cash' />
                  {order?.paymethod?.name}
                </PaymethodContent>
              </Paymethod>
              <PaymethodCreatedDate>
                <PaymethodCreatedDateContent>
                  <p>{t('DATE', 'Date')}</p>
                  <p>{dayjs(order?.delivery_datetime).format('YYYY-MM-DD HH:mm')}</p>
                </PaymethodCreatedDateContent>
              </PaymethodCreatedDate>
              <OrderTypeInfo>
                <p>{t('ORDER_TYPE', 'Order Type')}</p>
                <OrderTypeContent>
                  {order?.delivery_type === 1 && (
                    <>
                      <img src={theme?.images?.icons?.driverDelivery} alt='order type' />
                      {t('DELIVERY', 'Delivery')}
                    </>
                  )}
                  {order?.delivery_type === 2 && (
                    <>
                      <img src={theme?.images?.icons?.pickUp} alt='pickup' />
                      {t('PICKUP', 'Pickup')}
                    </>
                  )}
                </OrderTypeContent>
              </OrderTypeInfo>
            </PayAndOrderTypeInfo>

            <OrderProducts>
              {order?.products?.length && order?.products.map((product) => (
                <ProductItemAccordion
                  key={product.id}
                  product={product}
                />
              ))}
            </OrderProducts>

            <OrderBill>
              <table>
                <tbody>
                  <tr>
                    <td>{t('SUBTOTAL', 'Subtotal')}</td>
                    <td>{parsePrice(order?.subtotal)}</td>
                  </tr>
                  {order?.service_fee !== 0 && (
                    <tr>
                      <td>{t('TAX', 'Tax')} ({parseNumber(order?.tax)}%)</td>
                      <td>{parsePrice(order?.subtotal * order?.tax / 100)}</td>
                    </tr>
                  )}
                  <tr>
                    <td>{t('DELIVERY_FEE', 'Delivery Fee')}</td>
                    <td>{parsePrice(order?.deliveryFee)}</td>
                  </tr>
                  <tr>
                    <td>{t('DRIVER_TIP', 'Driver tip')}</td>
                    <td>{parsePrice(order?.driver_tip)}</td>
                  </tr>
                  {order?.service_fee !== 0 && (
                    <tr>
                      <td>{t('SERVICE FEE', 'Service Fee')} ({parseNumber(order?.service_fee)}%)</td>
                      <td>{parsePrice(order?.serviceFee || 0)}</td>
                    </tr>
                  )}
                  {order?.discount > 0 && (
                    <tr>
                      <td>{t('DISCOUNT', 'Discount')}</td>
                      <td>{parsePrice(order?.discount)}</td>
                    </tr>
                  )}
                </tbody>
              </table>
              <table className='total'>
                <tbody>
                  <tr>
                    <td>{t('TOTAL', 'Total')}</td>
                    <td>{parsePrice(orderTotalPrice)}</td>
                  </tr>
                </tbody>
              </table>
            </OrderBill>
          </OrderInfoContent>
          <ContactInfoContent className='contact-info'>
            <ContactInfoHeader>
              <OrderStatusTypeSelector
                orderId={order.id}
                defaultValue={order.status}
                handleUpdateOrderStatus={handleUpdateOrderStatus}
              />
              <WrapperButton>
                {/* <ButtonLink>
                  <img src={theme?.images?.icons?.help} alt='help' />
                </ButtonLink> */}
                <ButtonLink onClick={() => handleOpenMessages('history')}>
                  <img src={theme?.images?.icons?.timeline} alt='timeline' />
                </ButtonLink>
              </WrapperButton>
            </ContactInfoHeader>
            <SectionTitle>
              {t('CUSTOMER', 'Customer')}
            </SectionTitle>
            <SectionContainer>
              <PhotoWrapper>
                {order?.customer?.photo ? (
                  <Photo bgimage={order?.customer?.photo} />
                ) : (
                  <FaUserAlt />
                )}
              </PhotoWrapper>
              <InfoBlock>
                <h1>{order?.customer?.name} {order?.customer?.lastname}</h1>
                <span><HiOutlineLocationMarker /> {order?.customer?.address}</span>
                <CustomerContactBlock>
                  <button onClick={() => handleOpenMessages('customer')}>
                    <BsChat /> {t('CHAT', 'Chat')}
                  </button>
                  <button onClick={() => window.open(`tel:${order?.customer?.cellphone}`)}>
                    <HiOutlinePhone /> {t('CALL', 'Call')}
                  </button>
                </CustomerContactBlock>
                <PhoneNumber>
                  <HiOutlinePhone /> {order?.customer?.cellphone}
                </PhoneNumber>
              </InfoBlock>
            </SectionContainer>

            <SectionTitle>
              {t('BUSINESS', 'Business')}
            </SectionTitle>
            <SectionContainer>
              <PhotoWrapper>
                <Photo bgimage={order?.business?.logo} />
              </PhotoWrapper>
              <InfoBlock>
                <h1>{order?.business?.name}</h1>
                <span><HiOutlineLocationMarker /> {order?.business?.address}</span>
                <CustomerContactBlock>
                  <button onClick={() => handleOpenMessages('business')}>
                    <BsChat /> {t('CHAT', 'Chat')}
                  </button>
                  <button onClick={() => window.open(`tel:${order.business.phone}`)}>
                    <HiOutlinePhone /> {t('CALL', 'Call')}
                  </button>
                </CustomerContactBlock>
                <PhoneNumber>
                  <HiOutlinePhone /> {order.business.phone}
                </PhoneNumber>
              </InfoBlock>
            </SectionContainer>

            <SectionTitle>
              {t('DRIVER', 'Driver')}
            </SectionTitle>
            <SectionContainer>
              <PhotoWrapper>
                {order?.driver?.photo ? (
                  <Photo bgimage={order?.driver?.photo} />
                ) : (
                  <FaUserAlt />
                )}
              </PhotoWrapper>
              {order.driver_id ? (
                <InfoBlock>
                  <h1>{order?.driver?.name} {order?.driver?.lastname}</h1>
                  <CustomerContactBlock>
                    <button onClick={() => handleOpenMessages('driver')}>
                      <BsChat /> {t('CHAT', 'Chat')}
                    </button>
                    {order?.driver?.cellphone && (
                      <button onClick={() => window.open(`tel:${order.driver.cellphone}`)}>
                        <HiOutlinePhone /> {t('CALL', 'Call')}
                      </button>
                    )}
                  </CustomerContactBlock>
                  <PhoneNumber>
                    <HiOutlinePhone /> {order.driver.cellphone}
                  </PhoneNumber>
                </InfoBlock>
              ) : (
                <InfoBlock>
                  <h1>{t('NO_DRIVER', 'No driver')}</h1>
                </InfoBlock>
              )}
            </SectionContainer>

            <SectionTitle driver>
              {t('SELECT_DRIVER', 'Select Driver')}
            </SectionTitle>
            <DriverSelectorContainer>
              <DriverSelector
                isPhoneView
                defaultValue={order?.driver?.id ? order.driver.id : 'default'}
                order={order}
              />
            </DriverSelectorContainer>
            <PrintButtonContainer>
              <Button color='darkBlue' onClick={() => window.print()}>
                {t('PRINT', 'Print')}
              </Button>
            </PrintButtonContainer>
          </ContactInfoContent>

        </WrapperContainer>
      )}

      {loading && (
        <WrapperContainer className='skeleton-loading'>
          <SkeletonBlockWrapp>
            <SkeletonBlock width={100}>
              <Skeleton height={75} />
              <Skeleton height={100} />
              <Skeleton height={250} />
              <Skeleton height={25} />
              <Skeleton height={25} />
              <Skeleton height={25} />
              <Skeleton height={25} />
              <Skeleton height={25} />
            </SkeletonBlock>
          </SkeletonBlockWrapp>
          <SkeletonBlockWrapp>
            <SkeletonBlock width={100}>
              <Skeleton height={50} />
              {[...Array(3)].map((item, i) => (
                <SkeletonInfoCell key={i}>
                  <Skeleton width={80} height={20} />
                  <SkeletonInnerBlock>
                    <Skeleton width={80} height={80} />
                    <WrapperSkeletonText>
                      <Skeleton width={200} height={20} />
                      <Skeleton width={200} height={20} />
                      <WrapperSkeletonButton>
                        <Skeleton width={80} height={30} />
                        <Skeleton width={80} height={30} />
                      </WrapperSkeletonButton>
                    </WrapperSkeletonText>
                  </SkeletonInnerBlock>
                </SkeletonInfoCell>
              ))}
              <Skeleton width={120} height={25} />
              <WrapperSkeletonBottom>
                <Skeleton height={50} />
                <Skeleton height={50} />
              </WrapperSkeletonBottom>
            </SkeletonBlock>
          </SkeletonBlockWrapp>
        </WrapperContainer>
      )}

      {!loading && !order && (
        <NotFoundSource
          content={t('NOT_FOUND_ORDER', 'Sorry, we couldn\'t find the requested order.')}
          btnTitle={t('PROFILE_ORDERS_REDIRECT', 'Go to Orders')}
          onClickButton={handleBackRedirect}
        />
      )}
      {(openMessages.driver || openMessages.business || openMessages.customer || openMessages.history) && (
        <ChatContainer>
          <Messages
            orderId={order?.id}
            order={order}
            customer={openMessages.customer}
            business={openMessages.business}
            driver={openMessages.driver}
            history={openMessages.history}
            onClose={() => handleCloseMessages()}
          />
        </ChatContainer>
      )}

    </Container>
  )
}
export const OrderDetails = (props) => {
  const orderDetailsProps = {
    ...props,
    asDashboard: true,
    UIComponent: OrderDetailsUI
  }

  return (
    <OrderDetailsController {...orderDetailsProps} />
  )
}
