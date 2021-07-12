import React, { useState, useEffect, useRef } from 'react'
import { toast } from 'react-toastify'
import Skeleton from 'react-loading-skeleton'
import {
  useUtils,
  useLanguage,
  DragAndDrop,
  ExamineClick,
  SingleBusinessProduct as SingleBusinessProductController
} from 'ordering-components-admin'
import { bytesConverter } from '../../../../../utils'
import { Switch } from '../../styles/Switch'
import { Alert } from '../Confirm'
import { DropdownButton, Dropdown } from 'react-bootstrap'
import { useTheme } from 'styled-components'
import FiMoreVertical from '@meronex/icons/fi/FiMoreVertical'
import BiImage from '@meronex/icons/bi/BiImage'

import {
  SingleListBusinessContainer,
  BusinessGeneralInfo,
  WrapperImage,
  InfoBlock,
  BusinessEnableWrapper,
  ActionSelectorWrapper,
  ProductTypeImage,
  UploadWrapper
} from './styles'

const SingleBusinessProductUI = (props) => {
  const {
    isSkeleton,
    viewMethod,
    product,
    allowColumns,
    handleChangeProductActive,
    handleUpdateClick,
    deleteProduct,
    productFormState,
    handleChangeInput,
    handlechangeImage,
    isEditMode
  } = props

  const theme = useTheme()
  const [, t] = useLanguage()
  const [{ parsePrice }] = useUtils()
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const conatinerRef = useRef(null)
  const ProductTypeImgRef = useRef(null)
  const ActionIcon = <FiMoreVertical />

  const handleClickImage = () => {
    ProductTypeImgRef.current.click()
  }

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
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

  const closeProductEdit = (e) => {
    const outsideDropdown = !conatinerRef.current?.contains(e.target)
    if (outsideDropdown) {
      if (!e.target.closest('.popup-component')) {
        if (isEditMode && Object.keys(productFormState?.changes).length > 0 && !productFormState?.loading) {
          handleUpdateClick()
        }
      }
    }
  }

  useEffect(() => {
    if (productFormState?.result?.error) {
      setAlertState({
        open: true,
        content: productFormState?.result?.result
      })
    }
  }, [productFormState?.result])

  useEffect(() => {
    document.addEventListener('click', closeProductEdit)
    return () => document.removeEventListener('click', closeProductEdit)
  }, [productFormState])

  useEffect(() => {
    if (!productFormState?.loading && !productFormState?.result.error && productFormState?.result?.result) {
      const toastConfigure = {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      }
      console.log(productFormState?.result?.result)
      const content = productFormState?.result?.result?.id
        ? t('PRODUCT_UPDATE', 'Product Updated')
        : t('PRODUCT_DELETE', 'Product Deleted')
      toast.dark(content, toastConfigure)
    }
  }, [productFormState?.loading])

  return (
    <>
      {viewMethod === 'list' && (
        <>
          {isSkeleton ? (
            <SingleListBusinessContainer>
              <tr>
                {allowColumns?.business && (
                  <td className='business'>
                    <BusinessGeneralInfo>
                      <WrapperImage>
                        <Skeleton width={38} height={38} />
                      </WrapperImage>
                      <p><Skeleton width={80} /></p>
                    </BusinessGeneralInfo>
                  </td>
                )}
                {allowColumns?.price && (
                  <td>
                    <InfoBlock>
                      <p><Skeleton width={50} /></p>
                    </InfoBlock>
                  </td>
                )}
                {allowColumns?.description && (
                  <td>
                    <InfoBlock className='description'>
                      <p><Skeleton width={100} height={30} /></p>
                    </InfoBlock>
                  </td>
                )}
                <td>
                  <Skeleton width={100} />
                </td>
                <td>
                  <Skeleton width={30} />
                </td>
              </tr>
            </SingleListBusinessContainer>
          ) : (
            <SingleListBusinessContainer ref={conatinerRef}>
              <tr>
                {allowColumns?.business && (
                  <td className='business'>
                    <BusinessGeneralInfo>
                      <ProductTypeImage
                        onClick={() => handleClickImage()}
                        disabled={productFormState?.loading}
                      >
                        <ExamineClick
                          onFiles={files => handleFiles(files)}
                          childRef={(e) => { ProductTypeImgRef.current = e }}
                          accept='image/png, image/jpeg, image/jpg'
                          disabled={productFormState?.loading}
                        >
                          <DragAndDrop
                            onDrop={dataTransfer => handleFiles(dataTransfer.files)}
                            accept='image/png, image/jpeg, image/jpg'
                            disabled={productFormState?.loading}
                          >
                            {
                              (!productFormState.changes?.images || productFormState.result?.result === 'Network Error' || productFormState.result?.error)
                                ? (product?.images
                                  ? (<img src={product?.images} alt='category image' loading='lazy' />)
                                  : <UploadWrapper><BiImage /></UploadWrapper>)
                                : productFormState?.changes?.images &&
                                  <img src={productFormState?.changes?.images} alt='category image' loading='lazy' />
                            }
                          </DragAndDrop>
                        </ExamineClick>
                      </ProductTypeImage>
                      {
                        product?.name && (
                          <input
                            type='text'
                            name='name'
                            defaultValue={
                              productFormState?.result?.result
                                ? productFormState?.result?.result?.name
                                : productFormState?.changes?.name ?? product?.name ?? ''
                            }
                            onChange={handleChangeInput}
                            autoComplete='off'
                          />
                        )
                      }
                    </BusinessGeneralInfo>
                  </td>
                )}
                {allowColumns?.price && (
                  <td>
                    {
                      <InfoBlock>
                        <input
                          type='text'
                          name='price'
                          defaultValue={
                            productFormState?.result?.result
                              ? productFormState?.result?.result?.price
                              : productFormState?.changes?.price ?? product?.price ?? ''
                          }
                          onChange={handleChangeInput}
                          autoComplete='off'
                        />
                      </InfoBlock>
                    }
                  </td>
                )}
                {allowColumns?.description && (
                  <td>
                    {
                      <InfoBlock>
                        <textarea
                          name='description'
                          defaultValue={
                            productFormState?.result?.result
                              ? productFormState?.result?.result?.description
                              : productFormState?.changes?.description ?? product?.description ?? ''
                          }
                          onChange={handleChangeInput}
                          autoComplete='off'
                          className='description'
                        />
                      </InfoBlock>
                    }
                  </td>
                )}
                <td>
                  <BusinessEnableWrapper className='business_enable_control'>
                    {
                      product?.enabled
                        ? <span>{t('ENABLE', 'Enable')}</span>
                        : <span>{t('DISABLE', 'Disable')}</span>
                    }
                    <Switch
                      defaultChecked={
                        productFormState?.result?.result
                          ? productFormState?.result?.result?.enabled
                          : productFormState?.changes?.enabled ?? product?.enabled ?? true
                      }
                      onChange={handleChangeProductActive}
                    />
                  </BusinessEnableWrapper>
                </td>
                <td>
                  <ActionSelectorWrapper>
                    <DropdownButton
                      menuAlign={theme?.rtl ? 'left' : 'right'}
                      title={ActionIcon}
                      id={theme?.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'}
                    >
                      <Dropdown.Item onClick={() => console.log('handleOpenProductDetails(product)')}>{t('EDIT', 'Edit')}</Dropdown.Item>
                      <Dropdown.Item onClick={deleteProduct}>{t('DELETE', 'Delete')}</Dropdown.Item>
                    </DropdownButton>
                  </ActionSelectorWrapper>
                </td>
              </tr>
            </SingleListBusinessContainer>
          )}
        </>
      )}
      {viewMethod === 'spreedsheet' && (
        <>
          {isSkeleton ? (
            <SingleListBusinessContainer>
              <tr>
                <td className='business'>
                  <InfoBlock>
                    <p><Skeleton width={30} /></p>
                  </InfoBlock>
                </td>
                <td>
                  <InfoBlock>
                    <p><Skeleton width={50} /></p>
                  </InfoBlock>
                </td>
                <td>
                  <InfoBlock className='description'>
                    <p><Skeleton width={100} height={30} /></p>
                  </InfoBlock>
                </td>
                <td>
                  <Skeleton width={50} />
                </td>
                <td>
                  <Skeleton width={50} />
                </td>
              </tr>
            </SingleListBusinessContainer>
          ) : (
            <SingleListBusinessContainer>
              <tr>
                <td>
                  {
                    product?.id && (
                      <InfoBlock>
                        <p>{product?.id}</p>
                      </InfoBlock>
                    )
                  }
                </td>
                <td>
                  {
                    product?.name && (
                      <InfoBlock>
                        <p>{product?.name}</p>
                      </InfoBlock>
                    )
                  }
                </td>
                <td>
                  {
                    product?.description && (
                      <InfoBlock>
                        <p>{product?.description}</p>
                      </InfoBlock>
                    )
                  }
                </td>
                <td>
                  {
                    product?.price && (
                      <InfoBlock>
                        <p>{parsePrice(product?.price)}</p>
                      </InfoBlock>
                    )
                  }
                </td>
                <td>
                  {
                    product?.quantity && (
                      <InfoBlock>
                        <p>{product?.quantity}</p>
                      </InfoBlock>
                    )
                  }
                </td>
              </tr>
            </SingleListBusinessContainer>
          )}
        </>
      )}
      <Alert
        title={t('PRODUCT', 'Product')}
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

export const SingleBusinessProduct = (props) => {
  const { isSkeleton } = props
  const singleBusinessProductProps = {
    ...props,
    UIComponent: SingleBusinessProductUI
  }
  return (
    <>
      {isSkeleton ? (
        <SingleBusinessProductUI {...props} />
      ) : (
        <SingleBusinessProductController {...singleBusinessProductProps} />
      )}
    </>
  )
}
