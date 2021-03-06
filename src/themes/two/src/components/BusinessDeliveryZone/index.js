import React, { useState, useEffect } from 'react'
import { useLanguage, useUtils, BusinessDeliveryZone as BusinessDeliveryZoneController } from 'ordering-components-admin'
import BsPlusSquare from '@meronex/icons/bs/BsPlusSquare'
import FiMoreVertical from '@meronex/icons/fi/FiMoreVertical'
import AiFillPlusCircle from '@meronex/icons/ai/AiFillPlusCircle'
import { Switch } from '../../styles/Switch'
import { useTheme } from 'styled-components'
import { DropdownButton, Dropdown } from 'react-bootstrap'
import { BusinessDeliveryZoneSetting } from '../BusinessDeliveryZoneSetting'
import { Alert } from '../Confirm'
import { useForm } from 'react-hook-form'
import { Modal } from '../Modal'
import { useWindowSize } from '../../../../../hooks/useWindowSize'
import {
  MainContainer,
  ZoneContainer,
  Header,
  DeliveryZonesContainer,
  DeliveryZoneWrapper,
  ZoneName,
  ZoneMin,
  ZonePrice,
  ZoneActions,
  EnableWrapper,
  DropDownWrapper,
  AddDeliveryZoneButton,
  AddButton,
  DeliveryZoneFormWrapper
} from './styles'

const BusinessDeliveryZoneUI = (props) => {
  const {
    business,
    formState,
    businessDeliveryZonesState,
    handleChangeInput,
    handleChangeActiveState,
    handleDeleteBusinessDeliveryZone,
    setIsExtendExtraOpen,
    errors,
    setErrors,
    cleanErrors,
    handleZoneType,
    handleChangeZoneData,
    isEdit,
    setIsEdit,
    openAddDeliveryZone,
    setOpenAddDeliveryZone,
    isAddValid,
    setIsAddValid,
    handleUpdateBusinessDeliveryZone,
    handleAddBusinessDeliveryZone
  } = props
  const [, t] = useLanguage()
  const [{ parseNumber }] = useUtils()
  const theme = useTheme()
  const { width } = useWindowSize()

  const [curZone, setCurZone] = useState(null)
  const [alertState, setAlertState] = useState({ open: false, content: [] })

  const formMethods = useForm()

  const ActionIcon = <FiMoreVertical />

  const handleOpenSetting = (zone) => {
    if (formState.changes?.name === '' || formState.changes?.minimum === '' || formState.changes?.price === '') {
      setErrors({
        name: formState.changes?.name === '',
        minimum: formState.changes?.minimum === '',
        price: formState.changes?.price === ''
      })
    } else {
      if (Object.keys(zone).length) {
        setIsEdit(true)
        setIsExtendExtraOpen(true)
      }
      setCurZone(zone)
    }
  }

  const handleCloseOption = () => {
    setIsEdit(false)
    setIsAddValid(false)
    setIsExtendExtraOpen(false)
  }

  const closeAlert = () => {
    cleanErrors()
    setAlertState({
      open: false,
      content: []
    })
  }

  const onSubmit = () => {
    setIsExtendExtraOpen(true)
    setIsAddValid(true)
  }

  useEffect(() => {
    if (openAddDeliveryZone) {
      setIsExtendExtraOpen(false)
      setIsEdit(false)
    }
  }, [openAddDeliveryZone])

  useEffect(() => {
    if (Object.keys(formMethods.errors).length > 0) {
      const content = Object.values(formMethods.errors).map(error => error.message)
      setAlertState({
        open: true,
        content
      })
    }
  }, [formMethods.errors])

  useEffect(() => {
    if (openAddDeliveryZone && !isAddValid) return
    if (Object.keys(errors).length) {
      const errorContent = []
      if (errors?.name) errorContent.push(t('NAME_REQUIRED', 'The name is required.'))
      if (errors?.minimum) errorContent.push(t('MINIMUN_PURCHASED_REQUIRED', 'The minimum purchase is required.'))
      if (errors?.price) errorContent.push(t('DELIVERY_PRICE_REQUIRED', 'The delivery price is required.'))
      if (errorContent.length) {
        setAlertState({
          open: true,
          content: errorContent
        })
      }
    }
  }, [errors, isAddValid])

  return (
    <>
      <MainContainer>
        <ZoneContainer>
          <Header>
            <h1>{t('DELIVERY_ZONE', 'Delivery zones')}</h1>
            <BsPlusSquare />
          </Header>
          <DeliveryZonesContainer>
            <DeliveryZoneWrapper>
              <ZoneName>{t('NAME', 'Name')}</ZoneName>
              <ZoneMin>{t('MIN', 'Min')}</ZoneMin>
              <ZonePrice>{t('PRICE', 'Price')}</ZonePrice>
              <ZoneActions>{t('ACTIONS', 'Actions')}</ZoneActions>
            </DeliveryZoneWrapper>
            {businessDeliveryZonesState?.zones?.map(zone => (
              <DeliveryZoneWrapper key={zone.id}>
                <ZoneName>
                  <input
                    name='name'
                    defaultValue={zone?.name ?? ''}
                    onChange={(e) => handleChangeInput(e, zone.id)}
                    disabled={isEdit}
                  />
                </ZoneName>
                <ZoneMin>
                  <input
                    name='minimum'
                    type='number'
                    defaultValue={
                      formState.result?.result?.minimum
                        ? formState.result?.result?.minimum
                        : formState?.changes?.minimum
                          ? parseNumber(formState.changes?.minimum, { separator: '.' })
                          : parseNumber(zone?.minimum, { separator: '.' }) ?? ''
                    }
                    onChange={(e) => handleChangeInput(e, zone.id)}
                    disabled={isEdit}
                  />
                </ZoneMin>
                <ZonePrice>
                  <input
                    name='price'
                    type='number'
                    defaultValue={
                      formState.result?.result?.price
                        ? formState.result?.result?.price
                        : formState.changes?.price
                          ? parseNumber(formState.changes?.price, { separator: '.' })
                          : parseNumber(zone?.price, { separator: '.' }) ?? ''
                    }
                    onChange={(e) => handleChangeInput(e, zone.id)}
                    disabled={isEdit}
                  />
                </ZonePrice>
                <ZoneActions>
                  <EnableWrapper className='business_enable_control'>
                    <span>{t('ENABLE', 'Enable')}</span>
                    <Switch
                      defaultChecked={zone?.enabled}
                      onChange={() => handleChangeActiveState(zone.id)}
                    />
                  </EnableWrapper>
                  <DropDownWrapper>
                    <DropdownButton
                      menuAlign={theme?.rtl ? 'left' : 'right'}
                      title={ActionIcon}
                      id={theme?.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'}
                    >
                      <Dropdown.Item
                        onClick={() => handleOpenSetting(zone)}
                      >
                        {t('EDIT', 'Edit')}
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => handleDeleteBusinessDeliveryZone(zone.id)}
                      >
                        {t('DELETE', 'Delete')}
                      </Dropdown.Item>
                    </DropdownButton>
                  </DropDownWrapper>
                </ZoneActions>
              </DeliveryZoneWrapper>
            ))}
          </DeliveryZonesContainer>
          {!openAddDeliveryZone ? (
            <AddDeliveryZoneButton
              onClick={() => setOpenAddDeliveryZone(true)}
            >
              {t('ADD_DELIVERY_ZONE', 'Add delivery zone')}
            </AddDeliveryZoneButton>
          ) : (
            <DeliveryZoneFormWrapper onSubmit={formMethods.handleSubmit(onSubmit)}>
              <ZoneName>
                <input
                  name='name'
                  placeholder={t('ZONE_NAME', 'Zone name')}
                  onChange={(e) => handleChangeInput(e, null)}
                  ref={formMethods.register({
                    required: t('NAME_REQUIRED', 'The name is required.')
                  })}
                />
              </ZoneName>
              <ZoneMin>
                <input
                  name='minimum'
                  type='number'
                  placeholder={t('MIN', 'Min')}
                  onChange={(e) => handleChangeInput(e, null)}
                  ref={formMethods.register({
                    required: t('MINIMUN_PURCHASED_REQUIRED', 'The minimum purchase is required.')
                  })}
                />
              </ZoneMin>
              <ZonePrice>
                <input
                  name='price'
                  type='number'
                  placeholder={t('PRICE', 'Price')}
                  onChange={(e) => handleChangeInput(e, null)}
                  ref={formMethods.register({
                    required: t('DELIVERY_PRICE_REQUIRED', 'The delivery price is required.')
                  })}
                />
              </ZonePrice>
              <ZoneActions>
                <AddButton
                  type='submit'
                  onClick={() => handleOpenSetting({})}
                >
                  <AiFillPlusCircle /> <span>{t('ADD', 'Add')}</span>
                </AddButton>
              </ZoneActions>
            </DeliveryZoneFormWrapper>
          )}
        </ZoneContainer>
        {(isEdit || isAddValid) && (
          <>
            {width >= 1000 ? (
              <BusinessDeliveryZoneSetting
                open={isEdit || isAddValid}
                isAddValid={isAddValid}
                onClose={() => handleCloseOption()}
                zone={curZone}
                business={business}
                handleZoneType={handleZoneType}
                handleChangeZoneData={handleChangeZoneData}
                handleUpdateBusinessDeliveryZone={handleUpdateBusinessDeliveryZone}
                handleAddBusinessDeliveryZone={handleAddBusinessDeliveryZone}
              />
            ) : (
              <Modal
                width='80%'
                open={isEdit || isAddValid}
                onClose={() => handleCloseOption()}
              >
                <BusinessDeliveryZoneSetting
                  open={isEdit || isAddValid}
                  isAddValid={isAddValid}
                  onClose={() => handleCloseOption()}
                  zone={curZone}
                  business={business}
                  handleZoneType={handleZoneType}
                  handleChangeZoneData={handleChangeZoneData}
                  handleUpdateBusinessDeliveryZone={handleUpdateBusinessDeliveryZone}
                  handleAddBusinessDeliveryZone={handleAddBusinessDeliveryZone}
                />
              </Modal>
            )}
          </>
        )}
      </MainContainer>
      <Alert
        title={t('ORDERING', 'Ordering')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
    </>
  )
}

export const BusinessDeliveryZone = (props) => {
  const businessDeliveryZoneProps = {
    ...props,
    UIComponent: BusinessDeliveryZoneUI
  }
  return <BusinessDeliveryZoneController {...businessDeliveryZoneProps} />
}
