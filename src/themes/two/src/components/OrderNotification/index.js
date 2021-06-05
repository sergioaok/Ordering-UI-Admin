import React, { useState, useEffect } from 'react'
import { useLanguage, useConfig, useEvent } from 'ordering-components-admin'
import { Modal } from '../../../../../components/Modal'
import { Button } from '../../styles/Buttons'
import 'react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify'
toast.configure()

import {
  ModalContainer
} from './styles'
export const OrderNotification = (props) => {
  const [configState] = useConfig()
  const [, t] = useLanguage()
  const [events] = useEvent()

  const [notificationModalOpen, setNotificationModalOpen] = useState(false)
  const [registerOrderIds, setRegisterOrderIds] = useState([])

  const handleNotification = (orderId) => {
    const _registerOrderIds = [...registerOrderIds]
    if (!_registerOrderIds.includes(orderId)) {
      _registerOrderIds.push(orderId)
      setRegisterOrderIds(_registerOrderIds)
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

  const closeNotificationModal = (e) => {
    if (e.code === 'Escape') {
      handleCloseNotificationModal()
    }
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

  useEffect(() => {
    if (registerOrderIds.length > 0) return
    setNotificationModalOpen(false)
  }, [registerOrderIds])

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
      <Modal
        width='50%'
        hideCloseDefault
        open={notificationModalOpen}
      >
        <ModalContainer>
          <p>{t('ORDERING', 'Ordering')}</p>
          {registerOrderIds.map((orderId) =>
            <p key={orderId}>Order <span>#{orderId}</span> has been ordered.</p>
          )}
          <Button color='primary' onClick={() => handleCloseNotificationModal()}>
            {t('OK', 'OK')}
          </Button>
        </ModalContainer>
      </Modal>
      <audio id='notification-sound' muted>
        <source src={require('../../../../../../template/assets/sounds/notification.ogg')} type='audio/ogg' />
        <source src={require('../../../../../../template/assets/sounds/notification.mp3')} type='audio/mpeg' />
      </audio>
    </>
  )
}
