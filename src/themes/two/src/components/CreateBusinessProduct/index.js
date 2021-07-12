import React, { useState, useEffect, useRef } from 'react'
import { toast } from 'react-toastify'
import Skeleton from 'react-loading-skeleton'
import { Alert } from '../Confirm'
import { bytesConverter } from '../../../../../utils'
import {
  useLanguage,
  DragAndDrop,
  ExamineClick,
  CreateBusinessProduct as CreateBusinessProductController
} from 'ordering-components-admin'
import { Switch } from '../../styles/Switch'
import FiMoreVertical from '@meronex/icons/fi/FiMoreVertical'
import BiImage from '@meronex/icons/bi/BiImage'

import {
  CreateBusinessProductContainer,
  BusinessGeneralInfo,
  BusinessEnableWrapper,
  ProductTypeImage,
  SkeletonWrapper,
  UploadImageIconContainer,
  UploadImageIcon,
  ProductInput,
  GeneralInfo
} from './styles'
import {
  ActionSelectorWrapper
} from '../SingleProductsCategory/styles'

const CreateBusinessProductUI = (props) => {
  const {
    allowColumns,
    formState,
    handleChangeCheckBox,
    handleChangeInput,
    handleUpdateClick,
    handlechangeImage,
    setIsAddProduct
  } = props

  const [, t] = useLanguage()
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const conatinerRef = useRef(null)

  const ProductTypeImgRef = useRef(null)
  const handleClickImage = () => {
    ProductTypeImgRef.current.click()
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

  const CloseAddBusinessTypeForm = (e) => {
    const outsideDropdown = !conatinerRef.current?.contains(e.target)
    if (outsideDropdown) {
      if (!e.target.closest('.popup-component')) {
        if (Object.keys(formState?.changes).length > 1 && !formState?.loading) {
          handleUpdateClick()
        } else {
          setIsAddProduct(false)
        }
      }
    }
  }

  useEffect(() => {
    if (formState?.result?.error) {
      setAlertState({
        open: true,
        content: formState?.result?.result
      })
    }
  }, [formState?.result])

  useEffect(() => {
    document.addEventListener('click', CloseAddBusinessTypeForm)
    return () => document.removeEventListener('click', CloseAddBusinessTypeForm)
  }, [formState])

  useEffect(() => {
    if (!formState?.loading && !formState?.result.error && formState?.result?.result) {
      const toastConfigure = {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      }
      const content = t('PRODUCT_ADD', 'Product added')
      toast.dark(content, toastConfigure)
    }
  }, [formState?.loading])

  return (
    <>
      <CreateBusinessProductContainer ref={conatinerRef}>
        <tr>
          {allowColumns?.business && (
            <td className='business'>
              <BusinessGeneralInfo>
                <ProductTypeImage
                  onClick={() => handleClickImage()}
                  disabled={formState?.loading}
                >
                  <ExamineClick
                    onFiles={files => handleFiles(files)}
                    childRef={(e) => { ProductTypeImgRef.current = e }}
                    accept='image/png, image/jpeg, image/jpg'
                    disabled={formState?.loading}
                  >
                    <DragAndDrop
                      onDrop={dataTransfer => handleFiles(dataTransfer.files)}
                      accept='image/png, image/jpeg, image/jpg'
                      disabled={formState?.loading}
                    >
                      {formState?.loading
                        ? (<SkeletonWrapper><Skeleton /></SkeletonWrapper>)
                        : ((!formState?.changes?.images)
                          ? <div />
                          : formState?.changes?.images &&
                          (
                            <img src={formState?.changes?.images} alt='business type image' loading='lazy' />
                          )
                        )}
                      <UploadImageIconContainer>
                        <UploadImageIcon>
                          <BiImage />
                        </UploadImageIcon>
                      </UploadImageIconContainer>
                    </DragAndDrop>
                  </ExamineClick>
                </ProductTypeImage>
                <ProductInput
                  type='text'
                  name='name'
                  defaultValue={formState?.changes?.name || ''}
                  onChange={handleChangeInput}
                  placeholder={t('WRITE_A_NAME', 'Write a name')}
                  autoComplete='off'
                />
              </BusinessGeneralInfo>
            </td>
          )}
          {allowColumns?.price && (
            <td>
              <GeneralInfo>
                <ProductInput
                  type='number'
                  name='price'
                  defaultValue={formState?.changes?.price || ''}
                  onChange={handleChangeInput}
                  placeholder={t('WRITE_PRICE', 'Write price')}
                  autoComplete='off'
                />
              </GeneralInfo>
            </td>
          )}
          {allowColumns?.description && (
            <td>
              <GeneralInfo>
                <ProductInput
                  type='text'
                  name='description'
                  defaultValue={formState?.changes?.description || ''}
                  onChange={handleChangeInput}
                  placeholder={t('WRITE_DESCRIPTION', 'Write description')}
                  autoComplete='off'
                />
              </GeneralInfo>
            </td>
          )}
          <td>
            <BusinessEnableWrapper className='business_enable_control'>
              {
                formState?.changes.enabled
                  ? <span>{t('ENABLE', 'Enable')}</span>
                  : <span>{t('DISABLE', 'Disable')}</span>
              }
              <Switch
                defaultChecked={formState?.changes.enabled || false}
                onChange={handleChangeCheckBox}
              />
            </BusinessEnableWrapper>
          </td>
          <td>
            <ActionSelectorWrapper className='business_actions'>
              <FiMoreVertical />
            </ActionSelectorWrapper>
          </td>
        </tr>
      </CreateBusinessProductContainer>
      <Alert
        title={t('CREATE_PRODUCT', 'Create Product')}
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

export const CreateBusinessProduct = (props) => {
  const createBusinessProductProps = {
    ...props,
    UIComponent: CreateBusinessProductUI
  }
  return (
    <CreateBusinessProductController {...createBusinessProductProps} />
  )
}
