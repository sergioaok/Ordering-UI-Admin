import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useLanguage, useConfig, useEvent, OrdersManage as OrdersManageController } from 'ordering-components-admin'
import { OrdersContentHeader } from '../OrdersContentHeader'
import { OrderDetails } from '../OrderDetails'
import { Modal } from '../../../../../components/Modal'
import { Button } from '../../styles/Buttons'
import { DriversDashboard } from '../DriversDashboard'

import {
  DriversContainer,
  DriversContent,
  OrderNotification
} from './styles'

toast.configure()

const DriversManagerUI = (props) => {
  const {
    searchValue,
    driverGroupList,
    driversList,
    paymethodsList,
    businessesList,
    ordersStatusGroup,
    filterValues,
    deletedOrderId,
    handleChangeSearch,
    handleChangeFilterValues,
    handleOrdersStatusGroupFilter,
    handleSelectedOrderIds,
    selectedSubOrderStatus,
    handleSelectedSubOrderStatus,
    onOrderRedirect
  } = props

  const [, t] = useLanguage()
  const [configState] = useConfig()
  const [events] = useEvent()
  const query = new URLSearchParams(useLocation().search)
  const [isOpenOrderDetail, setIsOpenOrderDetail] = useState(false)
  const [orderDetailId, setOrderDetailId] = useState(null)
  const [detailsOrder, setDetailsOrder] = useState(null)

  const [notificationModalOpen, setNotificationModalOpen] = useState(false)
  const [registerOrderIds, setRegisterOrderIds] = useState([])

  const handleBackRedirect = () => {
    setIsOpenOrderDetail(false)
    onOrderRedirect()
  }

  const handleOpenOrderDetail = (order) => {
    setDetailsOrder(order)
    setOrderDetailId(order.id)
    onOrderRedirect(order.id)
    setIsOpenOrderDetail(true)
  }

  const handleNotification = (orderId) => {
    if (!registerOrderIds.includes(orderId)) {
      setRegisterOrderIds([
        ...registerOrderIds,
        orderId
      ])
      if (configState?.configs?.notification_toast?.value === 'true') {
        toastNotify(orderId)
      } else {
        setNotificationModalOpen(true)
      }
    }
  }

  const handleCloseNotificationModal = () => {
    setNotificationModalOpen(false)
    setRegisterOrderIds([])
  }

  const toastNotify = (orderId) => {
    const toastConfigure = {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    }
    const content = `Order #${orderId} has been ordered.`
    toast.dark(content, toastConfigure)
    const sound = document.getElementById('notification-sound')
    sound.muted = false
    sound.play()
    setRegisterOrderIds([])
  }

  const closeOrderDetailModal = (e) => {
    if (e.code === 'Escape') {
      handleBackRedirect()
    }
  }

  const closeNotificationModal = (e) => {
    if (e.code === 'Escape') {
      handleCloseNotificationModal()
    }
  }

  useEffect(() => {
    if (registerOrderIds.length > 0) return
    setNotificationModalOpen(false)
  }, [registerOrderIds])

  useEffect(() => {
    const id = query.get('id')
    if (id === null) setIsOpenOrderDetail(false)
    else {
      setOrderDetailId(id)
      onOrderRedirect(id)
      setIsOpenOrderDetail(true)
    }
  }, [])

  useEffect(() => {
    const sound = document.getElementById('notification-sound')
    const interval = setInterval(() => {
      if (notificationModalOpen) {
        sound.muted = false
        sound.play()
      }
    }, 3000)
    if (!notificationModalOpen) {
      clearInterval(interval)
      return
    }
    return () => clearInterval(interval)
  }, [notificationModalOpen])

  useEffect(() => {
    if (!isOpenOrderDetail) return
    document.addEventListener('keydown', closeOrderDetailModal)
    return () => document.removeEventListener('keydown', closeOrderDetailModal)
  }, [isOpenOrderDetail])

  useEffect(() => {
    if (!notificationModalOpen) return
    document.addEventListener('keydown', closeNotificationModal)
    return () => document.removeEventListener('keydown', closeNotificationModal)
  }, [notificationModalOpen])

  useEffect(() => {
    if (configState.loading) return
    events.on('order_added', handleNotification)
    return () => {
      events.off('order_added', handleNotification)
    }
  }, [configState])

  return (
    <>
      <DriversContainer>
        <OrdersContentHeader
          isDisableControl
          title={t('DRIVERS_DASHBOARD', 'Drivers dashboard')}
          searchValue={searchValue}
          driverGroupList={driverGroupList}
          driversList={driversList}
          paymethodsList={paymethodsList}
          businessesList={businessesList}
          filterValues={filterValues}
          handleChangeSearch={handleChangeSearch}
          handleChangeFilterValues={handleChangeFilterValues}
        />
        <DriversContent>
          <DriversDashboard />
        </DriversContent>
      </DriversContainer>

      {isOpenOrderDetail && (
        <OrderDetails
          open={isOpenOrderDetail}
          order={detailsOrder}
          orderId={orderDetailId}
          driversList={driversList}
          onClose={() => handleBackRedirect()}
        />
      )}

      <Modal
        width='50%'
        hideCloseDefault
        open={notificationModalOpen}
      >
        <OrderNotification>
          <p>{t('ORDERING', 'Ordering')}</p>
          {registerOrderIds.map((orderId) =>
            <p key={orderId}>Order <span>#{orderId}</span> has been ordered.</p>
          )}
          <Button color='primary' onClick={() => handleCloseNotificationModal()}>
            {t('OK', 'OK')}
          </Button>
        </OrderNotification>
      </Modal>

      <audio id='notification-sound' muted>
        <source src={require('../../../../../../template/assets/sounds/notification.ogg')} type='audio/ogg' />
        <source src={require('../../../../../../template/assets/sounds/notification.mp3')} type='audio/mpeg' />
      </audio>
    </>
  )
}

export const DriversManager = (props) => {
  const OrdersListControlProps = {
    ...props,
    UIComponent: DriversManagerUI
  }
  return <OrdersManageController {...OrdersListControlProps} />
}