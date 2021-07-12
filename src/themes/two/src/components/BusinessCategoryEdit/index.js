import React, { useState, useEffect, useRef } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import {
  useLanguage,
  DragAndDrop,
  ExamineClick,
  BusinessCategoryEdit as BusinessCategoryEditController
} from 'ordering-components-admin'
import { useWindowSize } from '../../../../../hooks/useWindowSize'
import { bytesConverter } from '../../../../../utils'
import { Alert } from '../Confirm'
import { Switch } from '../../styles/Switch'
import { Input } from '../../styles/Inputs'
import { Button } from '../../styles/Buttons'
import MdcClose from '@meronex/icons/mdc/MdcClose'
import FiCamera from '@meronex/icons/fi/FiCamera'

import {
  Container,
  CategoryForm,
  HeaderContainer,
  BusinessEnableWrapper,
  CategoryTypeImage,
  BtnWrapper,
  UploadImageIconContainer,
  UploadImageIcon,
  CategoryNameWrapper
} from './styles'

const BusinessCategoryEditUI = (props) => {
  const {
    open,
    onClose,
    formState,
    category,
    handlechangeImage,
    handleChangeInput,
    handleButtonUpdateClick,
    handleChangeCheckBox
  } = props
  const [, t] = useLanguage()
  const formMethods = useForm()
  const { width } = useWindowSize()

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const categoryTypeImageInputRef = useRef(null)

  const actionSidebar = (value) => {
    setIsMenuOpen(value)
  }

  const handleClose = () => {
    onClose()
    setIsMenuOpen(false)
  }

  const onSubmit = () => {
    if (Object.keys(formState.changes).length > 0) {
      handleButtonUpdateClick()
    }
  }

  const handleClickImage = () => {
    categoryTypeImageInputRef.current.click()
  }

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

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  useEffect(() => {
    if (formState?.result?.error) {
      setAlertState({
        open: true,
        content: formState?.result?.result
      })
    }
  }, [formState?.result])

  const toggleMainContent = () => {
    if (isMenuOpen) {
      if (width <= 500) {
        document.getElementById('editCategory').style.width = '100vw'
      } else {
        document.getElementById('editCategory').style.width = '500px'
      }
    }
  }

  useEffect(() => {
    toggleMainContent()
  }, [width])

  useEffect(() => {
    if (!open) return
    actionSidebar(true)
  }, [open])

  useEffect(() => {
    if (!formState?.result.error && formState?.result?.result && !formState?.loading) {
      const toastConfigure = {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      }
      const content = t('CATEOGORY_UPDATED', 'Category Updated')
      toast.dark(content, toastConfigure)
    }
  }, [formState?.loading])

  useEffect(() => {
    if (Object.keys(formMethods.errors).length > 0) {
      const content = Object.values(formMethods.errors).map(error => error.message)
      setAlertState({
        open: true,
        content
      })
    }
  }, [formMethods.errors])

  return (
    <>
      <Container id='editCategory'>
        <CategoryForm onSubmit={formMethods.handleSubmit(onSubmit)}>
          {
            formState?.loading ? (
              <>
                <HeaderContainer>
                  <BusinessEnableWrapper className='business_enable_control'>
                    <Skeleton width={100} />
                    <Skeleton width={50} />
                  </BusinessEnableWrapper>
                  <Button onClick={handleClose}>
                    <Skeleton width={30} height={30} />
                  </Button>
                </HeaderContainer>
                <CategoryTypeImage>
                  <Skeleton width={300} height={300} />
                </CategoryTypeImage>
                <CategoryNameWrapper>
                  <label>
                    <Skeleton width={70} />
                  </label>
                  <Skeleton width={300} />
                </CategoryNameWrapper>
                <BtnWrapper>
                  <Skeleton width={70} height={30} />
                </BtnWrapper>
              </>
            ) : (
              <>
                <HeaderContainer>
                  <BusinessEnableWrapper className='business_enable_control'>
                    <span>
                      {
                        formState?.result?.result
                          ? formState?.result?.result?.name
                          : formState?.changes?.name ?? category?.name ?? ''
                      }
                    </span>
                    <Switch
                      defaultChecked={
                        formState?.result?.result
                          ? formState?.result?.result?.enabled
                          : formState?.changes?.enabled ?? category?.enabled ?? false
                      }
                      onChange={handleChangeCheckBox}
                    />
                  </BusinessEnableWrapper>
                  <Button onClick={handleClose}>
                    <MdcClose />
                  </Button>
                </HeaderContainer>
                <CategoryTypeImage
                  onClick={() => handleClickImage()}
                  disabled={formState?.loading}
                >
                  <ExamineClick
                    onFiles={files => handleFiles(files)}
                    childRef={(e) => { categoryTypeImageInputRef.current = e }}
                    accept='image/png, image/jpeg, image/jpg'
                    disabled={formState?.loading}
                  >
                    <DragAndDrop
                      onDrop={dataTransfer => handleFiles(dataTransfer.files)}
                      accept='image/png, image/jpeg, image/jpg'
                      disabled={formState?.loading}
                    >
                      {
                        (!formState.changes?.image || formState.result?.result === 'Network Error' || formState.result.error)
                          ? category?.image &&
                            (<img src={category?.image} alt='category image' loading='lazy' />)
                          : formState?.changes?.image &&
                            <img src={formState?.changes?.image} alt='category image' loading='lazy' />
                      }
                      <UploadImageIconContainer>
                        <UploadImageIcon>
                          <FiCamera />
                        </UploadImageIcon>
                      </UploadImageIconContainer>
                    </DragAndDrop>
                  </ExamineClick>
                </CategoryTypeImage>
                <CategoryNameWrapper>
                  <label>{t('CATEGORY_NAME', 'Category name')}</label>
                  <Input
                    placeholder={t('Enter_CATEGORY_NAME', 'Enter a category name')}
                    name='name'
                    defaultValue={
                      formState?.result?.result
                        ? formState?.result?.result?.name
                        : formState?.changes?.name ?? category?.name ?? ''
                    }
                    key={`name: ${
                      formState?.result?.result
                      ? formState?.result?.result?.name
                      : formState?.changes?.name ?? category?.name ?? ''
                    }`}
                    onChange={handleChangeInput}
                    ref={formMethods.register({
                      required: t('VALIDATION_ERROR_CATEGORY_NAME_REQUIRED', 'Category name is required')
                    })}
                    autoComplete='off'
                  />
                </CategoryNameWrapper>
                <BtnWrapper>
                  <Button
                    type='submit'
                    color='primary'
                    borderRadius='5px'
                    disabled={formState.loading}
                  >
                    {t('SAVE', 'Save')}
                  </Button>
                </BtnWrapper>
              </>
            )
          }
        </CategoryForm>
      </Container>
      <Alert
        title={t('BUSINESS_TYPE', 'Business type')}
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
export const BusinessCategoryEdit = (props) => {
  const businessCategoryEditProps = {
    ...props,
    UIComponent: BusinessCategoryEditUI
  }

  return (
    <BusinessCategoryEditController {...businessCategoryEditProps} />
  )
}
