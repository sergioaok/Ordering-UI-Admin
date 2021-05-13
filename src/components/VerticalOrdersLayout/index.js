import React from 'react'
import { useLanguage, useUtils } from 'ordering-components-admin'
import { useTheme } from 'styled-components'
import { RectButton } from '../../styles/Buttons'

import {
  SingleCard,
  OrderPastContent,
  PastLogo,
  WrapperBusinessTitle,
  Reorder,
  WrappButton
} from './styles'

import { OrdersContainer, BusinessInformation } from '../OrdersOption/styles'

export const VerticalOrdersLayout = (props) => {
  const {
    orders,
    pagination,
    loadMoreOrders,
    getOrderStatus,
    reorderLoading
  } = props

  const theme = useTheme()
  const [, t] = useLanguage()
  const [{ parseDate }] = useUtils()

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <OrdersContainer id='orders-container'>
        {orders.map(order => (
          <SingleCard key={order.id} id='order-card'>
            <OrderPastContent>
              {(order.business?.logo || theme.images?.dummies?.businessLogo) && (
                <PastLogo>
                  <img src={order.business?.logo || theme.images?.dummies?.businessLogo} alt='business-logo' width='55px' height='64px' loading='lazy' />
                </PastLogo>
              )}
              <BusinessInformation>
                <WrapperBusinessTitle>
                  <h2>{order.business?.name}</h2>
                </WrapperBusinessTitle>
                <p>{order?.delivery_datetime_utc ? parseDate(order?.delivery_datetime_utc) : parseDate(order?.delivery_datetime, { utc: false })}</p>
                <p>{getOrderStatus(order.status)?.value}</p>
              </BusinessInformation>
            </OrderPastContent>
            <Reorder>
              <RectButton
                color='primary'
                disabled={reorderLoading}
              >
                {t('MOBILE_FRONT_BUTTON_VIEW_ORDER', 'View Order')}
              </RectButton>
            </Reorder>
          </SingleCard>
        ))}
      </OrdersContainer>
      {pagination.totalPages && pagination.currentPage < pagination.totalPages && (
        <WrappButton>
          <RectButton
            outline
            color='primary'
            bgtransparent
            onClick={loadMoreOrders}
          >
            {t('LOAD_MORE_ORDERS', 'Load more orders')}
          </RectButton>
        </WrappButton>
      )}
      {
        props.afterComponents?.map((AfterComponent, i) => (
          <AfterComponent key={i} {...props} />))
      }
      {
        props.afterElements?.map((AfterElement, i) => (
          <React.Fragment key={i}>
            {AfterElement}
          </React.Fragment>))
      }
    </>
  )
}
