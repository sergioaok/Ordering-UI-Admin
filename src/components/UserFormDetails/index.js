import React, { useEffect, useState, useRef } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useSession, useLanguage, useCustomer } from 'ordering-components-admin'
import { useForm } from 'react-hook-form'
import parsePhoneNumber from 'libphonenumber-js'

import {
  FormInput,
  ActionsForm,
  SkeletonForm,
  Label,
  InputWrapper,
  Option
} from './styles'

import { RectangleInput, RectTextArea } from '../../styles/Inputs'
import { RectButton } from '../../styles/Buttons'
import { Select } from '../../styles/Select'
import { ToggleSwitch } from '../../styles/ToggleSwitch'
import { InputPhoneNumber } from '../InputPhoneNumber'
import { Alert } from '../Confirm'
import { sortInputFields } from '../../utils'

export const UserFormDetailsUI = (props) => {
  const {
    isEdit,
    formState,
    showField,
    cleanFormState,
    isRequiredField,
    validationFields,
    handleChangeInput,
    handleButtonUpdateClick,
    isCheckout,
    userData,
    isCustomerMode,
    setFormState,
    deleteUser
  } = props

  const formMethods = useForm()
  const [, t] = useLanguage()

  const [{ user: userSession }] = useSession()
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(null)
  const [userPhoneNumber, setUserPhoneNumber] = useState(null)
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [, { setUserCustomer }] = useCustomer()
  const emailInput = useRef(null)

  const selectTypes = [
    { value: 3, content: <Option>{t('USERS', 'Users')}</Option> },
    { value: 2, content: <Option>{t('BUSINESS_OWNER', 'Business owner')}</Option> },
    { value: 1, content: <Option>{t('CITY_MANAGER', 'City manager')}</Option> },
    { value: 0, content: <Option>{t('ADMINTRATORS', 'Admintrators')}</Option> }
  ]

  const user = userData || userSession

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
    cleanFormState && cleanFormState({ result: { error: false } })
  }

  const showInputPhoneNumber = validationFields?.fields?.checkout?.cellphone?.enabled ?? false

  const setUserCellPhone = (isEdit = false) => {
    if (userPhoneNumber && !userPhoneNumber.includes('null') && !isEdit) {
      setUserPhoneNumber(userPhoneNumber)
      return
    }
    if (user?.cellphone) {
      let phone = null
      if (formState.result.error && formState.changes?.cellphone && formState.changes?.country_phone_code) {
        phone = `+${formState.changes?.country_phone_code} ${formState.changes?.cellphone}`
        setUserPhoneNumber(phone)
        return
      }
      if (user?.country_phone_code) {
        phone = `+${user?.country_phone_code} ${user?.cellphone}`
      } else {
        phone = user?.cellphone
      }
      setUserPhoneNumber(phone)
      return
    }
    setUserPhoneNumber(user?.cellphone || '')
  }

  const onSubmit = () => {
    const isPhoneNumberValid = userPhoneNumber ? isValidPhoneNumber : true
    if (!userPhoneNumber &&
      validationFields?.fields?.checkout?.cellphone?.enabled &&
      validationFields?.fields?.checkout?.cellphone?.required
    ) {
      setAlertState({
        open: true,
        content: [t('VALIDATION_ERROR_MOBILE_PHONE_REQUIRED', 'The field Phone Number is required.')]
      })
      return
    }
    if (!isPhoneNumberValid && userPhoneNumber) {
      if (user?.country_phone_code) {
        setAlertState({
          open: true,
          content: [t('INVALID_ERROR_PHONE_NUMBER', 'The Phone Number field is invalid')]
        })
        return
      }
      setAlertState({
        open: true,
        content: [t('INVALID_ERROR_COUNTRY_CODE_PHONE_NUMBER', 'The country code of the phone number is invalid')]
      })
      return
    }
    if (Object.keys(formState.changes).length > 0 && isPhoneNumberValid) {
      let changes = null
      if (user?.cellphone && !userPhoneNumber) {
        changes = {
          country_phone_code: '',
          cellphone: ''
        }
      }
      if (isCustomerMode) {
        setUserCustomer(formState.result.result, true)
      }
      handleButtonUpdateClick(changes)
    }
  }

  const handleChangePhoneNumber = (number, isValid) => {
    setUserPhoneNumber(number)

    let phoneNumberParser = null
    let phoneNumber = {
      country_phone_code: {
        name: 'country_phone_code',
        value: ''
      },
      cellphone: {
        name: 'cellphone',
        value: ''
      }
    }
    if (isValid) {
      phoneNumberParser = parsePhoneNumber(number)
    }
    if (phoneNumberParser) {
      phoneNumber = {
        country_phone_code: {
          name: 'country_phone_code',
          value: phoneNumberParser.countryCallingCode
        },
        cellphone: {
          name: 'cellphone',
          value: phoneNumberParser.nationalNumber
        }
      }
    }
    handleChangeInput(phoneNumber, true)
  }

  const handleChangeInputEmail = (e) => {
    handleChangeInput({ target: { name: 'email', value: e.target.value.toLowerCase().replace(/[&,()%";:ç?<>{}\\[\]\s]/g, '') } })
    formMethods.setValue('email', e.target.value.toLowerCase().replace(/[&,()%";:ç?<>{}\\[\]\s]/g, ''))
    emailInput.current.value = e.target.value.toLowerCase().replace(/[&,()%";:ç?<>{}\\[\]\s]/g, '')
  }

  useEffect(() => {
    if (Object.keys(formMethods.errors).length > 0) {
      const content = Object.values(formMethods.errors).map(error => error.message)
      if (!isValidPhoneNumber && userPhoneNumber) {
        content.push(t('INVALID_ERROR_PHONE_NUMBER', 'The Phone Number field is invalid.'))
      }
      setAlertState({
        open: true,
        content
      })
    }
  }, [formMethods.errors])

  useEffect(() => {
    if ((!formState?.loading && formState?.result?.error)) {
      setAlertState({
        open: true,
        content: formState.result?.result || [t('ERROR', 'Error')]
      })
    }
  }, [formState?.loading])

  useEffect(() => {
    if ((user || !isEdit) && !formState?.loading) {
      setUserCellPhone()
      if (!isEdit && !formState?.loading) {
        cleanFormState && cleanFormState({ changes: {} })
        setUserCellPhone(true)
      }
    }
  }, [user, isEdit])

  useEffect(() => {
    if (!validationFields.loading && emailInput.current) {
      formMethods.setValue('email', formState?.result?.result
        ? formState?.result?.result?.email
        : formState?.changes?.email ?? (user && user?.email) ?? '')
    }
  }, [validationFields, emailInput.current])

  useEffect(() => {
    formMethods.register('email', {
      required: isRequiredField('email')
        ? t('VALIDATION_ERROR_EMAIL_REQUIRED', 'The field Email is required').replace('_attribute_', t('EMAIL', 'Email'))
        : null,
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: t('INVALID_ERROR_EMAIL', 'Invalid email address').replace('_attribute_', t('EMAIL', 'Email'))
      }
    })
  }, [formMethods])

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <FormInput onSubmit={formMethods.handleSubmit(onSubmit)} isCheckout={isCheckout}>
        {!validationFields?.loading ? (
          <>
            {
              props.beforeMidElements?.map((BeforeMidElements, i) => (
                <React.Fragment key={i}>
                  {BeforeMidElements}
                </React.Fragment>))
            }
            {
              props.beforeMidComponents?.map((BeforeMidComponents, i) => (
                <BeforeMidComponents key={i} {...props} />))
            }
            {sortInputFields({ values: validationFields?.fields?.checkout }).map(field =>
              showField && showField(field.code) && (
                <React.Fragment key={field.id}>
                  {field.code === 'email' ? (
                    <InputWrapper>
                      <Label>{field.name}</Label>
                      <RectangleInput
                        key={field.id}
                        type={field.type}
                        name={field.code}
                        className='form'
                        disabled={!isEdit}
                        placeholder={t(field.code.toUpperCase(), field?.name)}
                        defaultValue={
                          formState?.result?.result
                            ? formState?.result?.result[field.code]
                            : formState?.changes[field.code] ?? (user && user[field.code]) ?? ''
                        }
                        onChange={handleChangeInputEmail}
                        ref={(e) => {
                          emailInput.current = e
                        }}
                        autoComplete='off'
                      />
                    </InputWrapper>
                  ) : (
                    <InputWrapper>
                      <Label>{field.name}</Label>
                      <RectangleInput
                        key={field.id}
                        type={field.type}
                        name={field.code}
                        className='form'
                        disabled={!isEdit}
                        placeholder={t(field.code.toUpperCase(), field?.name)}
                        defaultValue={
                          formState?.result?.result
                            ? formState?.result?.result[field.code]
                            : formState?.changes[field.code] ?? (user && user[field.code]) ?? ''
                        }
                        onChange={handleChangeInput}
                        ref={formMethods.register({
                          required: isRequiredField(field.code)
                            ? t(`VALIDATION_ERROR_${field.code.toUpperCase()}_REQUIRED`, `${field?.name} is required`).replace('_attribute_', t(field?.name, field.code))
                            : null
                        })}
                        autoComplete='off'
                      />
                    </InputWrapper>
                  )}

                </React.Fragment>
              )
            )}
            {!isCheckout && (
              <InputWrapper>
                <Label>{t('PASSWORD', 'Password')}</Label>
                <RectangleInput
                  type='password'
                  name='password'
                  className='form'
                  placeholder={t('FRONT_VISUALS_PASSWORD', 'Password')}
                  onChange={handleChangeInput}
                  ref={formMethods.register({
                    required: isRequiredField('password')
                      ? t('VALIDATION_ERROR_PASSWORD_REQUIRED', 'The field Password is required').replace('_attribute_', t('PASSWORD', 'Password'))
                      : null,
                    minLength: {
                      value: 8,
                      message: t('VALIDATION_ERROR_PASSWORD_MIN_STRING', 'The Password must be at least 8 characters.').replace('_attribute_', t('PASSWORD', 'Password')).replace('_min_', 8)
                    }
                  })}
                />
              </InputWrapper>
            )}
            <InputWrapper>
              <Label>{t('TYPE', 'Type')}</Label>
              <Select
                defaultValue={
                  formState?.result?.result
                    ? formState?.result?.result?.level
                    : formState?.changes?.level ?? (user && user?.level) ?? ''
                }
                options={selectTypes}
                className='rectangle-select'
                onChange={(typeValue) => setFormState({
                  ...formState,
                  changes: { ...formState?.changes, 'level': typeValue }
                })}
              />
            </InputWrapper>
            {!!showInputPhoneNumber && (
              <InputWrapper>
                <Label>{t('PHONE', 'Phone')}</Label>
                <InputPhoneNumber
                  user={user}
                  value={userPhoneNumber}
                  setValue={handleChangePhoneNumber}
                  handleIsValid={setIsValidPhoneNumber}
                />
              </InputWrapper>
            )}
            <InputWrapper style={{ width: '100%' }}>
              <Label>{t('USER_NOTES', 'User notes')}</Label>
              <RectTextArea style={{ width: '100%' }} placeholder={t('WRITE_NOTES', 'Write notes')} />
            </InputWrapper>
            {
              props.afterMidElements?.map((MidElement, i) => (
                <React.Fragment key={i}>
                  {MidElement}
                </React.Fragment>))
            }
            {
              props.afterMidComponents?.map((MidComponent, i) => (
                <MidComponent key={i} {...props} />))
            }
            <ActionsForm>
              <ToggleSwitch
                defaultChecked={
                  formState?.result?.result
                    ? formState?.result?.result?.enabled
                    : formState?.changes?.enabled ?? (user && user?.enabled) ?? false
                }
                onChange={(val) => setFormState({
                  ...formState,
                  changes: { ...formState?.changes, 'enabled': val }
                })}
              />
              <RectButton
                outline
                type='button'
                color='primary'
                disabled={formState.loading}
                onClick={() => deleteUser()}
              >
                {t('DELETE', 'Delete')}
              </RectButton>
              <RectButton
                type='submit'
                color='darkBlue'
                disabled={formState.loading}
              >
                {formState.loading ? t('UPDATING', 'Updating...') : t('SAVE', 'Save')}
              </RectButton>
            </ActionsForm>
          </>
        ) : (
          <SkeletonForm>
            {[...Array(6)].map((item, i) => (
              <Skeleton key={i} />
            ))}
          </SkeletonForm>
        )}
      </FormInput>
      <Alert
        title={t('PROFILE', 'Profile')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}
