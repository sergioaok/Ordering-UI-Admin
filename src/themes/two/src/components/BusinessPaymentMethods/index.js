import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useLanguage } from 'ordering-components-admin'
import { BusinessPaymentMethods as BusinessPaymentMethodsController } from './naked'

import RiCheckboxBlankLine from '@meronex/icons/ri/RiCheckboxBlankLine'
import RiCheckboxFill from '@meronex/icons/ri/RiCheckboxFill'
import FiMoreVertical from '@meronex/icons/fi/FiMoreVertical'
import { DropdownButton, Dropdown } from 'react-bootstrap'
import { useTheme } from 'styled-components'
import { PaymentOptionStripeDirect } from '../PaymentOptionStripeDirect'
import { SpinnerLoader } from '../SpinnerLoader'

import {
  MainContainer,
  PaymentMethodsContainer,
  PaymethodListWrapper,
  PaymethodOptionContainer,
  PaymethodOption,
  PaymethodName,
  DropDownWrapper,
  WrapperSpinnerLoader
} from './styles'

const BusinessPaymentMethodsUI = (props) => {
  const {
    businessPaymethodsState,
    paymethodsList,
    handleClickPayment,
    handleDeleteBusinessPaymethodOption,
    setIsExtendExtraOpen,
    actionState,
    changesState,
    cleanChangesState,
    handleChangeSandbox,
    handleChangeInput,
    handleSaveClick
  } = props
  const [, t] = useLanguage()
  const theme = useTheme()
  const [isEdit, setIsEdit] = useState(false)
  const [selectedBusinessPaymethod, setSelectedBusinessPaymethod] = useState(null)
  const ActionIcon = <FiMoreVertical />

  const isCheckEnableSate = (id) => {
    const found = businessPaymethodsState.paymethods.find(paymethod => paymethod.paymethod_id === id)
    let valid = false
    if (found) {
      valid = found.enabled
    }
    return valid
  }

  const isCheckFoundBusinessPaymethod = (id) => {
    const found = businessPaymethodsState.paymethods.find(paymethod => paymethod.paymethod_id === id)
    return found
  }

  const handleOpenEdit = (paymethodId) => {
    const businessPaymethod = businessPaymethodsState.paymethods.find(paymethod => paymethod.paymethod_id === paymethodId)
    setSelectedBusinessPaymethod(businessPaymethod)
    setIsEdit(true)
    setIsExtendExtraOpen(true)
  }

  const handleCloseEdit = () => {
    setIsExtendExtraOpen(false)
    setIsEdit(false)
  }

  return (
    <MainContainer>
      {actionState.loading && (
        <WrapperSpinnerLoader>
          <SpinnerLoader />
        </WrapperSpinnerLoader>
      )}
      <PaymentMethodsContainer>
        <h1>{t('PAYMETHODS', 'Payment methods')}</h1>
        {(paymethodsList.loading || businessPaymethodsState.loading) && (
          [...Array(10).keys()].map(i => (
            <PaymethodOptionContainer key={i}>
              <PaymethodOption>
                <Skeleton width={15} height={15} />
                <PaymethodName>
                  <Skeleton width={120} height={24} />
                </PaymethodName>
              </PaymethodOption>
            </PaymethodOptionContainer>
          ))
        )}
        <PaymethodListWrapper>
          {paymethodsList.paymethods.map(paymethod => (
            <PaymethodOptionContainer key={paymethod.id}>
              <PaymethodOption
                onClick={() => handleClickPayment(paymethod.id)}
              >
                {isCheckEnableSate(paymethod.id) ? (
                  <RiCheckboxFill className='fill' />
                ) : (
                  <RiCheckboxBlankLine />
                )}
                <PaymethodName>{paymethod?.name}</PaymethodName>
              </PaymethodOption>
              {isCheckFoundBusinessPaymethod(paymethod.id) && (
                <DropDownWrapper>
                  <DropdownButton
                    menuAlign={theme?.rtl ? 'left' : 'right'}
                    title={ActionIcon}
                    id={theme?.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'}
                  >
                    <Dropdown.Item
                      onClick={() => handleOpenEdit(paymethod.id)}
                    >
                      {t('EDIT', 'Edit')}
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => console.log('edit')}
                    >
                      {t('CUSTOM_FIELDS', 'Custom fields')}
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => handleDeleteBusinessPaymethodOption(paymethod.id)}
                    >
                      {t('DELETE', 'Delete')}
                    </Dropdown.Item>
                  </DropdownButton>
                </DropDownWrapper>
              )}
            </PaymethodOptionContainer>
          ))}
        </PaymethodListWrapper>
      </PaymentMethodsContainer>
      {isEdit && (
        <>
          <PaymentOptionStripeDirect
            open={isEdit}
            businessPaymethodsState={businessPaymethodsState}
            onClose={() => handleCloseEdit()}
            businessPaymethod={selectedBusinessPaymethod}
            changesState={changesState}
            cleanChangesState={cleanChangesState}
            actionState={actionState}
            handleChangeSandbox={handleChangeSandbox}
            handleChangeInput={handleChangeInput}
            handleSaveClick={handleSaveClick}
          />
        </>
      )}
    </MainContainer>
  )
}

export const BusinessPaymentMethods = (props) => {
  const businessPaymethodProps = {
    ...props,
    UIComponent: BusinessPaymentMethodsUI
  }
  return <BusinessPaymentMethodsController {...businessPaymethodProps} />
}
