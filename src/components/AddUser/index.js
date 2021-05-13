import React, { useState, useRef, useEffect } from 'react'
// import { AddUser as AddUserController } from './naked'
import {
  useLanguage,
  DragAndDrop,
  ExamineClick,
  AddUser as AddUserController
} from 'ordering-components-admin'
import { Alert } from '../Confirm'
import FiCamera from '@meronex/icons/fi/FiCamera'
import BiImage from '@meronex/icons/bi/BiImage'
import { useForm } from 'react-hook-form'
import { RectangleInput } from '../../styles/Inputs'
import { RectButton } from '../../styles/Buttons'
import { Select } from '../../styles/Select'
import { ToggleSwitch } from '../../styles/ToggleSwitch'
import parsePhoneNumber from 'libphonenumber-js'
import { InputPhoneNumber } from '../InputPhoneNumber'
import { bytesConverter, sortInputFields } from '../../utils'

import {
  AddUserContainer,
  Title,
  InputForm,
  UserImage,
  Image,
  Camera,
  UploadImageIcon,
  SideForm,
  InputWrapper,
  Label,
  FormContainer,
  Option,
  ActionsForm
} from './styles'

const AddUserUI = (props) => {
  const {
    formState,
    handlechangeImage,
    handleButtonUpdateClick,
    handleChangeInput,
    validationFields,
    isRequiredField,
    setFormState,
    onCloseModal
  } = props
  const [, t] = useLanguage()
  const formMethods = useForm()
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [userPhoneNumber, setUserPhoneNumber] = useState(null)
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(null)

  const inputRef = useRef(null)
  const emailInput = useRef(null)

  const selectTypes = [
    { value: 3, content: <Option>{t('USERS', 'Users')}</Option> },
    { value: 2, content: <Option>{t('BUSINESS_OWNER', 'Business owner')}</Option> },
    { value: 1, content: <Option>{t('CITY_MANAGER', 'City manager')}</Option> },
    { value: 0, content: <Option>{t('ADMINTRATORS', 'Admintrators')}</Option> }
  ]

  const handleFiles = (files) => {
    if (files.length === 1) {
      const type = files[0].type.split('/')[0]
      if (type !== 'image') {
        setAlertState({
          open: true,
          content: [t('ERROR_ONLY_IMAGES', 'Only images can be accepted')]
        })
        return
      }

      if (bytesConverter(files[0]?.size) > 2048) {
        setAlertState({
          open: true,
          content: [t('IMAGE_MAXIMUM_SIZE', 'The maximum image size is 2 megabytes')]
        })
        return
      }
      handlechangeImage(files[0])
    }
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
      if (formState?.changes.country_phone_code) {
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
    if (Object.keys(formState.changes).length > 0) {
      let changes = null
      changes = {
        country_phone_code: '',
        cellphone: ''
      }
      handleButtonUpdateClick(changes)
    }
  }

  const handleClickImage = () => {
    inputRef.current.click()
  }

  const handleChangeInputEmail = (e) => {
    handleChangeInput({ target: { name: 'email', value: e.target.value.toLowerCase().replace(/[&,()%";:ç?<>{}\\[\]\s]/g, '') } })
    formMethods.setValue('email', e.target.value.toLowerCase().replace(/[&,()%";:ç?<>{}\\[\]\s]/g, ''))
    emailInput.current.value = e.target.value.toLowerCase().replace(/[&,()%";:ç?<>{}\\[\]\s]/g, '')
  }

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
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
      <AddUserContainer>
        <Title>{t('ADD_USER', 'Add User')}</Title>
        <InputForm onSubmit={formMethods.handleSubmit(onSubmit)}>
          <UserImage className='user-image'>
            <Image onClick={() => handleClickImage()} isImage={formState?.changes?.photo && !formState.result.error}>
              <ExamineClick onFiles={handleFiles} childRef={(e) => { inputRef.current = e }} accept='image/png, image/jpeg, image/jpg' disabled={formState.loading}>
                <DragAndDrop onDrop={dataTransfer => handleFiles(dataTransfer.files)} accept='image/png, image/jpeg, image/jpg' disabled={formState.loading}>
                  {formState.changes?.photo
                    ? (<img src={formState.changes?.photo} alt='user image' width='200px' height='200px' loading='lazy' />)
                    : (
                      <UploadImageIcon>
                        <BiImage />
                        <span>{t('DRAG_DROP_IMAGE_HERE', 'Put your image here')}</span>
                      </UploadImageIcon>
                    )}
                </DragAndDrop>
              </ExamineClick>
            </Image>
            <Camera><FiCamera /></Camera>
          </UserImage>
          <SideForm>
            <FormContainer>
              {sortInputFields({ values: validationFields?.fields?.checkout }).map(field =>
                <React.Fragment key={field.id}>
                  {field.code === 'email' ? (
                    <InputWrapper>
                      <Label>{field.name}</Label>
                      <RectangleInput
                        key={field.id}
                        type={field.type}
                        name={field.code}
                        className='form'
                        placeholder={t(field.code.toUpperCase(), field?.name)}
                        defaultValue={
                          formState?.changes[field.code] || ''
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
                        placeholder={t(field.code.toUpperCase(), field?.name)}
                        defaultValue={
                          formState?.changes[field.code] || ''
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
              )}
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
              <InputWrapper>
                <Label>{t('TYPE', 'Type')}</Label>
                <Select
                  defaultValue={formState?.changes?.level || 3}
                  options={selectTypes}
                  className='rectangle-select'
                  onChange={(typeValue) => setFormState({
                    ...formState,
                    changes: { ...formState?.changes, 'level': typeValue }
                  })}
                />
              </InputWrapper>
              <InputWrapper>
                <Label>{t('PHONE', 'Phone')}</Label>
                <InputPhoneNumber
                  value={userPhoneNumber}
                  setValue={handleChangePhoneNumber}
                  handleIsValid={setIsValidPhoneNumber}
                />
              </InputWrapper>
              <ActionsForm>
                <ToggleSwitch
                  defaultChecked={formState?.changes?.enabled || false}
                  onChange={(enabled) => setFormState({
                    ...formState,
                    changes: { ...formState?.changes, 'enabled': enabled }
                  })}
                />
                <RectButton
                  outline
                  type='button'
                  color='darkBlue'
                  onClick={onCloseModal}
                  disabled={formState.loading}
                >
                  {t('CANCEL', 'Cancel')}
                </RectButton>
                <RectButton
                  type='submit'
                  color='darkBlue'
                  disabled={formState.loading}
                >
                  {formState.loading ? t('UPDATING', 'Updating...') : t('SAVE', 'Save')}
                </RectButton>
              </ActionsForm>
            </FormContainer>

          </SideForm>
        </InputForm>
      </AddUserContainer>
      <Alert
        title={t('ADD_USER', 'Add a User')}
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

export const AddUser = (props) => {
  const addUserProps = {
    ...props,
    UIComponent: AddUserUI
  }

  return (
    <AddUserController {...addUserProps} />
  )
}
