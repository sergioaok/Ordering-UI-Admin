import React, { useState, useRef } from 'react'
import { useLanguage, useUtils, useEvent } from 'ordering-components'
import { useTheme } from 'styled-components'

import EnChevronDown from '@meronex/icons/en/EnChevronDown'
import BsFillCircleFill from '@meronex/icons/bs/BsFillCircleFill'
import OiCircleCheck from '@meronex/icons/oi/OiCircleCheck'
import FaUserAlt from '@meronex/icons/fa/FaUserAlt'
import { OrderStatusTypeSelector } from '../OrderStatusTypeSelector'
import { DriverSelector } from '../DriverSelector'

import {
  AccordionSection,
  OrderItemAccordionContainer,
  OrderItemAccordionCell,
  CheckBoxContainer,
  TextBlockContainer,
  BigText,
  SmallText,
  WrapperAccordionImage,
  WrapperProductImage,
  AccordionImage,
  WrapperDriverSelector,
  DeliveryTypeContainer,
  DeliveryIcon,
  DeliveryName,
  OrderDetailToggleButton,
  OrderProductsQuickDetailContainer,
  OrderProductsInner,
  ProductTable,
  ProductImageContainer
} from './styles'

export const OrderItemAccordion = (props) => {
  const {
    order,
    driversList,
    handleUpdateOrdersStatus
  } = props

  const [, t] = useLanguage()
  const theme = useTheme()
  const [{ parsePrice, parseNumber }] = useUtils()
  const [events] = useEvent()

  const [setActive, setActiveState] = useState('')
  const [setHeight, setHeightState] = useState('0px')
  const [setRotate, setRotateState] = useState('accordion__icon')

  const checkbox = useRef(null)
  const content = useRef(null)
  const toggleBtn = useRef(null)
  const statusTypeSelector = useRef(null)
  const driverSelectorRef = useRef(null)
  const [selectedOrder, setSelectedOrder] = useState(false)

  const toggleOrderSelect = () => {
    setSelectedOrder(!selectedOrder)
  }
  const toggleAccordion = () => {
    setActiveState(setActive === '' ? 'active' : '')
    setHeightState(
      setActive === 'active' ? '0px' : `${content.current.scrollHeight}px`
    )
    setRotateState(
      setActive === 'active' ? 'accordion__icon' : 'accordion__icon rotate'
    )
  }

  const handleGoToPage = (e, data) => {
    const isActionClick = checkbox.current?.contains(e.target) || driverSelectorRef.current?.contains(e.target) || statusTypeSelector.current?.contains(e.target) || toggleBtn.current?.contains(e.target)

    if (!isActionClick) {
      events.emit('go_to_page', data)
    }
  }

  const handleSelectedDriver = (driver) => {
    console.log(driver)
  }

  return (
    <AccordionSection>
      <OrderItemAccordionContainer
        className={setActive}
        // filterColor={
        //   order.deadline_status === 1
        //     ? theme?.colors?.deadlineOk
        //     : order.deadline_status === 2
        //       ? theme?.colors?.deadlineDelayed
        //       : theme?.colors?.deadlineRisk
        // }

        onClick={(e, data) => handleGoToPage(e, { page: 'order_detail', params: { orderId: order.id } })}
      >
        <OrderItemAccordionCell>
          <CheckBoxContainer ref={checkbox}>
            {!selectedOrder ? (
              <BsFillCircleFill className='circle' onClick={() => toggleOrderSelect()} />
            ) : (
              <OiCircleCheck className='circle-check' onClick={() => toggleOrderSelect()} />
            )}
          </CheckBoxContainer>

          <TextBlockContainer>
            <BigText>{t('ORDER_NO', 'Order No.')} {order?.id}</BigText>
            <SmallText>{order?.delivery_datetime}</SmallText>
          </TextBlockContainer>
        </OrderItemAccordionCell>

        <OrderItemAccordionCell>
          <WrapperAccordionImage>
            <AccordionImage bgimage={order?.business?.logo} />
          </WrapperAccordionImage>
          <TextBlockContainer>
            <BigText>{order?.business?.name}</BigText>
            <SmallText>{order?.business?.city?.name}</SmallText>
          </TextBlockContainer>
        </OrderItemAccordionCell>

        <OrderItemAccordionCell>
          <WrapperAccordionImage>
            {order?.customer?.photo ? (
              <AccordionImage bgimage={order?.customer?.photo} />
            ) : (
              <FaUserAlt />
            )}
          </WrapperAccordionImage>
          <TextBlockContainer>
            <BigText>{order?.customer?.name}</BigText>
            <SmallText>{order?.customer?.phone}</SmallText>
          </TextBlockContainer>
        </OrderItemAccordionCell>

        <OrderItemAccordionCell>
          {order?.driver_id ? (
            <WrapperDriverSelector ref={driverSelectorRef}>
              <DriverSelector
                defaultValue={order?.driver_id ? order.driver_id : 0}
                driversList={driversList}
                handleSelectedDriver={(driver) => handleSelectedDriver(driver)}
              />
            </WrapperDriverSelector>
          ) : (
            <WrapperAccordionImage>
              <AccordionImage bgimage={theme?.images?.icons?.noDriver} />
            </WrapperAccordionImage>
          )}

          <TextBlockContainer>
            <BigText>
              {!order?.driver_id && 'No Driver'}
            </BigText>
          </TextBlockContainer>
        </OrderItemAccordionCell>

        <OrderItemAccordionCell>
          <DeliveryTypeContainer>
            <DeliveryIcon>
              {order?.delivery_type === 1 ? (
                <img
                  src={theme?.images?.icons?.driverDelivery}
                  alt='Delivery'
                />
              ) : (
                <img
                  src={theme?.images?.icons?.pickUp}
                  alt='pick up'
                />
              )}
            </DeliveryIcon>
            <DeliveryName>
              {order?.delivery_type === 1 ? (t('DELIVERY', 'Delivery')) : (t('PICKUP', 'Pickup'))}
            </DeliveryName>
          </DeliveryTypeContainer>
        </OrderItemAccordionCell>

        <OrderItemAccordionCell ref={statusTypeSelector}>
          <OrderStatusTypeSelector
            defaultValue={order.status}
            orderId={order.id}
            noPadding
            handleUpdateOrdersStatus={handleUpdateOrdersStatus}
          />
        </OrderItemAccordionCell>

        <OrderItemAccordionCell>
          <BigText>
            {parsePrice(order?.total)}
            <OrderDetailToggleButton
              ref={toggleBtn}
              onClick={() => toggleAccordion()}
            >
              <EnChevronDown className={`${setRotate}`} />
            </OrderDetailToggleButton>
          </BigText>
        </OrderItemAccordionCell>
      </OrderItemAccordionContainer>

      <OrderProductsQuickDetailContainer
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
      >
        <OrderProductsInner>
          <ProductTable>
            <thead>
              <tr>
                <th>{t('NAME', 'Name')}</th>
                <th>{t('PRICE', 'Price')}</th>
                <th>{t('QTY', 'QTY')}</th>
                <th>{t('DISC.', 'Disc.')}</th>
                <th>{t('Total', 'Total')}</th>
              </tr>
            </thead>

            <tbody>
              {order.products.map((product) => {
                return (
                  <tr key={product.id}>
                    <td>
                      <ProductImageContainer>
                        <WrapperProductImage>
                          <AccordionImage bgimage={product.images} />
                        </WrapperProductImage>
                        {product.name}
                      </ProductImageContainer>
                    </td>
                    <td>{parsePrice(product?.price)}</td>
                    <td>X {product.quantity}</td>
                    <td>{product.comment}</td>
                    <td>{parsePrice(order?.subtotal)}</td>
                  </tr>
                )
              })}

              <tr className='subFee'>
                <td />
                <td />
                <td />
                <td>{t('SUBTOTAL', 'Subtotal')}</td>
                <td>{parsePrice(order?.subtotal)}</td>
              </tr>
              <tr className='subFee'>
                <td />
                <td />
                <td />
                <td>{t('TAX', 'Tax')} ({parseNumber(order?.tax)}%)</td>
                <td>{parsePrice(order?.totalTax)}</td>
              </tr>
              <tr className='subFee'>
                <td />
                <td />
                <td />
                <td>{t('DELIVERY_FEE', 'Delivery Fee')}</td>
                <td>{parsePrice(order?.deliveryFee)}</td>
              </tr>
              <tr className='subFee'>
                <td />
                <td />
                <td />
                <td>{t('SERVICE_FEE', 'Service Fee')} ({parseNumber(order?.service_fee)}%)</td>
                <td>{parsePrice(order?.serviceFee || 0)}</td>
              </tr>
              {order?.discount > 0 && (
                <tr>
                  <td />
                  <td />
                  <td />
                  <td>{t('DISCOUNT', 'Discount')}</td>
                  <td>{parsePrice(order?.discount)}</td>
                </tr>
              )}
              <tr className='totalFee'>
                <td />
                <td />
                <td />
                <td>{t('TOTAL', 'Total')}</td>
                <td>{parsePrice(order?.total)}</td>
              </tr>
            </tbody>
          </ProductTable>
        </OrderProductsInner>
      </OrderProductsQuickDetailContainer>

    </AccordionSection>
  )
}
