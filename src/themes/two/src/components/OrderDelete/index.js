import React, { useEffect, useState } from 'react'
import { useLanguage, CheckPassword as CheckPasswordController } from 'ordering-components-admin'
import FaTrash from '@meronex/icons/fa/FaTrash'
import { useWindowSize } from '../../../../../hooks/useWindowSize'
import { Button } from 'react-bootstrap'
import { Modal } from '../../../../../components/Modal'

import {
  WrapperCheckPassword,
  ErrorText
} from './styles'

const OrderDeleteUI = (props) => {
  const {
    checkPasswordStatus,
    handleChangePassword,
    getCheckPassword,
    handleDeleteMultiOrders
  } = props
  const { width } = useWindowSize()
  const [, t] = useLanguage()

  const [checkPasswordModalOpen, setCheckPasswordModalOpen] = useState(false)
  const [password, setPassword] = useState('')
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleModalOpen = () => {
    setPassword('')
    setCheckPasswordModalOpen(true)
  }

  useEffect(() => {
    handleChangePassword(password)
  }, [password])

  useEffect(() => {
    if (checkPasswordStatus.loading || checkPasswordStatus.error !== null) return
    if (checkPasswordStatus.result === 'OK') {
      setCheckPasswordModalOpen(false)
      setPassword('')
      handleDeleteMultiOrders()
    }
  }, [checkPasswordStatus])

  return (
    <>
      <Button
        variant='light'
        onClick={() => handleModalOpen()}
      >
        {width > 600 && t('DELETE', 'Delete')}
        <FaTrash />
      </Button>

      <Modal
        width='70%'
        open={checkPasswordModalOpen}
        onClose={() => setCheckPasswordModalOpen(false)}
        acceptText={t('DELETE', 'Delete')}
        onAccept={() => getCheckPassword()}
      >
        <WrapperCheckPassword>
          <h3>{t('CONFIRM_PASSWORD', 'Confirm password')}</h3>
          <p>{t('TYPE_YOUR_PASSWORD_TO_CONFIRM_DELETE', 'Type your password to confirm delete.')}</p>
          <input
            autoComplete='new-password'
            type='password'
            value={password}
            placeholder={t('PASSWORD', 'password')}
            onChange={(e) => handlePassword(e)}
          />
          <ErrorText>
            {checkPasswordStatus.error}
          </ErrorText>
        </WrapperCheckPassword>
      </Modal>
    </>
  )
}

export const OrderDelete = (props) => {
  const checkPasswordControlProps = {
    ...props,
    UIComponent: OrderDeleteUI
  }
  return <CheckPasswordController {...checkPasswordControlProps} />
}
