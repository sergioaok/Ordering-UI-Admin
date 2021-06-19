import React, { useState, useRef } from 'react'
import { useLanguage, DragAndDrop, ExamineClick, BusinessFormDetails as BusinessFormDetailsController } from 'ordering-components-admin'
import MdcClose from '@meronex/icons/mdc/MdcClose'
import BsLifePreserver from '@meronex/icons/bs/BsLifePreserver'
import { Switch } from '../../styles/Switch'
import { useForm } from 'react-hook-form'
import { Alert } from '../Confirm'
import { bytesConverter } from '../../../../../utils'
import BiImage from '@meronex/icons/bi/BiImage'
import { Input, TextArea } from '../../styles/Inputs'
import { Button } from '../../styles/Buttons'
import Skeleton from 'react-loading-skeleton'

import {
  BusinessDetailsContainer,
  DetailsHeader,
  BusinessName,
  LeftHeader,
  RightHeader,
  SupportButton,
  CloseButton,
  FormInput,
  HeaderImage,
  SkeletonWrapper,
  UploadImageIcon,
  InputWrapper,
  ActionsForm,
  UploadImageIconContainer,
  LogoImage
} from './styles'

const AddBusinessFormUI = (props) => {
  const {
    actionSidebar,
    handleChangeActiveBusiness,
    handleItemSelected,
    formState,
    handlechangeImage,
    handleChangeInput,
    handleButtonUpdateClick
  } = props
  const [, t] = useLanguage()
  const formMethods = useForm()
  const headerImageInputRef = useRef(null)
  const logoImageInputRef = useRef(null)
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const emailInput = useRef(null)

  const handleClickImage = (type) => {
    if (type === 'header') {
      headerImageInputRef.current.click()
    }

    if (type === 'logo') {
      logoImageInputRef.current.click()
    }
  }

  const handleFiles = (files, name) => {
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
      handlechangeImage(files[0], name)
    }
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

  const onSubmit = () => {
    if (Object.keys(formState.changes).length > 0) {
      handleButtonUpdateClick()
    }
  }
  return (
    <>
      <BusinessDetailsContainer>
        <DetailsHeader>
          <LeftHeader>
            <BusinessName>
              {t('BUSIENSS_NAME', 'Business name')}
            </BusinessName>
            <Switch
              defaultChecked={false}
              onChange={handleChangeActiveBusiness}
            />
          </LeftHeader>
          <RightHeader>
            <SupportButton
              onClick={() => handleItemSelected('support')}
            >
              <BsLifePreserver />
            </SupportButton>
            <CloseButton
              onClick={() => actionSidebar(false)}
            >
              <MdcClose />
            </CloseButton>
          </RightHeader>
        </DetailsHeader>
        <FormInput onSubmit={formMethods.handleSubmit(onSubmit)}>
          <HeaderImage
            onClick={() => handleClickImage('header')}
          >
            <ExamineClick
              onFiles={files => handleFiles(files, 'header')}
              childRef={(e) => { headerImageInputRef.current = e }}
              accept='image/png, image/jpeg, image/jpg'
              disabled={formState.loading}
            >
              <DragAndDrop
                onDrop={dataTransfer => handleFiles(dataTransfer.files, 'header')}
                accept='image/png, image/jpeg, image/jpg'
                disabled={formState.loading}
              >
                {formState.loading
                  ? (<SkeletonWrapper><Skeleton /></SkeletonWrapper>)
                  : ((!formState.changes?.header || formState.result?.result === 'Network Error' || formState.result.error)
                    ? <div />
                    : formState?.changes?.header &&
                      <img src={formState?.changes?.header} alt='header image' loading='lazy' />
                  )}
                <UploadImageIconContainer>
                  <UploadImageIcon>
                    <BiImage />
                    <span>{t('DRAG_DROP_IMAGE_HERE', 'Put your image here')}</span>
                  </UploadImageIcon>
                </UploadImageIconContainer>
              </DragAndDrop>
            </ExamineClick>
          </HeaderImage>

          <LogoImage
            onClick={() => handleClickImage('logo')}
          >
            <ExamineClick
              onFiles={files => handleFiles(files, 'logo')}
              childRef={(e) => { logoImageInputRef.current = e }}
              accept='image/png, image/jpeg, image/jpg'
              disabled={formState.loading}
            >
              <DragAndDrop
                onDrop={dataTransfer => handleFiles(dataTransfer.files, 'logo')}
                accept='image/png, image/jpeg, image/jpg'
                disabled={formState.loading}
              >
                {formState.loading
                  ? (<SkeletonWrapper><Skeleton /></SkeletonWrapper>)
                  : ((!formState.changes?.header || formState.result?.result === 'Network Error' || formState.result.error)
                    ? <div />
                    : formState?.changes?.logo &&
                      <img src={formState?.changes?.logo} alt='logo image' loading='lazy' />
                  )}
                <UploadImageIconContainer small>
                  <UploadImageIcon small>
                    <BiImage />
                  </UploadImageIcon>
                </UploadImageIconContainer>
              </DragAndDrop>
            </ExamineClick>
          </LogoImage>
          <InputWrapper>
            <label>{t('BUSINESS_NAME', 'Business name')}</label>
            <Input
              name='name'
              placeholder={t('NAME', 'name')}
              defaultValue={
                formState?.result?.result
                  ? formState?.result?.result?.name
                  : formState?.changes?.name
              }
              onChange={handleChangeInput}
              ref={formMethods.register({
                required: t('VALIDATION_ERROR_BUSINESS_NAME_REQUIRED', 'Business name is required')
              })}
              disabled={formState.loading}
              autoComplete='off'
            />
          </InputWrapper>
          <InputWrapper>
            <label>{t('BUSINESS_EMAIL', 'Business email')}</label>
            <Input
              name='email'
              placeholder={t('EMAIL', 'email')}
              defaultValue={
                formState?.result?.result
                  ? formState?.result?.result?.email
                  : formState?.changes?.email
              }
              onChange={handleChangeInputEmail}
              ref={(e) => {
                emailInput.current = e
              }}
              disabled={formState.loading}
              autoComplete='off'
            />
          </InputWrapper>
          <InputWrapper>
            <label>{t('BUSINESS_SLUG', 'Business slug')}</label>
            <Input
              name='slug'
              placeholder={t('SLUG', 'slug')}
              defaultValue={
                formState?.result?.result
                  ? formState?.result?.result?.slug
                  : formState?.changes?.slug
              }
              onChange={handleChangeInput}
              ref={formMethods.register({
                required: t('VALIDATION_ERROR_BUSINESS_SLUG_REQUIRED', 'Business slug is required')
              })}
              disabled={formState.loading}
              autoComplete='off'
            />
          </InputWrapper>
          <InputWrapper>
            <label>{t('BUSINESS_DESCRIPTION', 'Business description')}</label>
            <TextArea
              rows={4}
              name='description'
              placeholder={t('WRITE_A_LITTLE_DESCRIPTION', 'Write a little description')}
              defaultValue={
                formState?.result?.result
                  ? formState?.result?.result?.description
                  : formState?.changes?.description
              }
              onChange={handleChangeInput}
              disabled={formState.loading}
              autoComplete='off'
            />
          </InputWrapper>
          <ActionsForm>
            <Button
              type='submit'
              color='primary'
              borderRadius='5px'
              disabled={!(Object.keys(formState?.changes).length > 0) || formState?.loading}
            >
              {t('SAVE', 'Save')}
            </Button>
          </ActionsForm>
        </FormInput>
        <Alert
          title={t('BUSINESS', 'Business')}
          content={alertState.content}
          acceptText={t('ACCEPT', 'Accept')}
          open={alertState.open}
          onClose={() => closeAlert()}
          onAccept={() => closeAlert()}
          closeOnBackdrop={false}
        />
      </BusinessDetailsContainer>
    </>
  )
}

export const AddBusinessForm = (props) => {
  const businessFormDetailsProps = {
    ...props,
    UIComponent: AddBusinessFormUI
  }
  return <BusinessFormDetailsController {...businessFormDetailsProps} />
}
