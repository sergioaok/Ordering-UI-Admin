import React, { useState, useEffect, useRef } from 'react'
import Skeleton from 'react-loading-skeleton'
import { toast } from 'react-toastify'
import { useForm } from 'react-hook-form'
import {
  useLanguage,
  DragAndDrop,
  ExamineClick,
  SingleProductsCategory as SingleProductsCategoryController
} from 'ordering-components-admin'
import { Alert } from '../Confirm'
import { bytesConverter } from '../../../../../utils'
import { Switch } from '../../styles/Switch'
import { useTheme } from 'styled-components'
import { DropdownButton, Dropdown } from 'react-bootstrap'
import FiMoreVertical from '@meronex/icons/fi/FiMoreVertical'
import BiImage from '@meronex/icons/bi/BiImage'
import {
  SingleCategoryContainer,
  CategoryContent,
  CategoryActionContainer,
  CategoryEnableWrapper,
  ActionSelectorWrapper
} from './styles'
import {
  ProductTypeImage,
  UploadWrapper
} from '../SingleBusinessProduct/styles'

export const SingleProductsCategoryUI = (props) => {
  const {
    category,
    categorySelected,
    handleChangeCategory,
    isSkeleton,
    handelChangeCategoryActive,
    handleUpdateClick,
    handleDeleteClick,
    handleOpenCategoryDetails,
    categoryFormState,
    handlechangeImage,
    handleInputChange,
    isAddCategory,
    setIsAddCategory
  } = props
  const [, t] = useLanguage()
  const theme = useTheme()
  const formMethods = useForm()
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const conatinerRef = useRef(null)
  const ProductTypeImgRef = useRef(null)
  const submitBtnRef = useRef(null)
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
    if (outsideDropdown && !e.target.closest('.popup-component') && !categoryFormState?.loading) {
      if (Object.keys(categoryFormState.changes).length > 0) {
        submitBtnRef.current.click()
      } else if (isAddCategory) {
        setIsAddCategory(false)
      }
    }
  }

  const onSubmit = () => {
    handleUpdateClick()
  }

  const handleSelectedCategory = (e) => {
    if (!isAddCategory && handleChangeCategory) handleChangeCategory(e, category)
  }

  useEffect(() => {
    if (categoryFormState?.result?.error) {
      setAlertState({
        open: true,
        content: categoryFormState?.result?.result
      })
    }
  }, [categoryFormState?.result])

  useEffect(() => {
    document.addEventListener('click', closeProductEdit)
    return () => document.removeEventListener('click', closeProductEdit)
  }, [categoryFormState])

  useEffect(() => {
    if (!categoryFormState?.loading &&
      !categoryFormState?.result?.error &&
      categoryFormState?.result?.result) {
      const toastConfigure = {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      }
      let content = ''
      switch (categoryFormState?.status) {
        case 'update':
          content = t('CATEGORY_UPDATED', 'Category Updated')
          break
        case 'delete':
          content = t('CATEGORY_DELETE', 'Category Deleted')
          break
        case 'add':
          content = t('CATEGORY_ADD', 'Category Added')
          break
        default:
          content = t('CATEGORY_SAVED', 'Category Saved')
          break
      }
      toast.dark(content, toastConfigure)
    }
  }, [categoryFormState?.loading])

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
      <SingleCategoryContainer
        active={!isSkeleton && !isAddCategory && (category?.id === categorySelected?.id)}
        addMode={isAddCategory}
        onClick={handleSelectedCategory}
        ref={conatinerRef}
        onSubmit={formMethods.handleSubmit(onSubmit)}
      >
        {
          isSkeleton
            ? <Skeleton width={41} height={41} />
            : (
              <ProductTypeImage
                onClick={() => handleClickImage()}
                disabled={categoryFormState?.loading}
                className='img-section'
              >
                <ExamineClick
                  onFiles={files => handleFiles(files)}
                  childRef={(e) => { ProductTypeImgRef.current = e }}
                  accept='image/png, image/jpeg, image/jpg'
                  disabled={categoryFormState?.loading}
                >
                  <DragAndDrop
                    onDrop={dataTransfer => handleFiles(dataTransfer.files)}
                    accept='image/png, image/jpeg, image/jpg'
                    disabled={categoryFormState?.loading}
                  >
                    {
                      (!categoryFormState.changes?.image || categoryFormState.result?.result === 'Network Error' || categoryFormState.result?.error)
                        ? (category?.image
                          ? (<img src={category?.image} alt='category image' loading='lazy' />)
                          : <UploadWrapper><BiImage /></UploadWrapper>)
                        : categoryFormState?.changes?.image &&
                          <img src={categoryFormState?.changes?.image} alt='category image' loading='lazy' />
                    }
                  </DragAndDrop>
                </ExamineClick>
              </ProductTypeImage>
            )
        }

        <CategoryContent>
          {
            isSkeleton
              ? <Skeleton height={15} />
              : (
                <input
                  type='text'
                  name='name'
                  defaultValue={
                    categoryFormState?.result?.result
                      ? categoryFormState?.result?.result?.name
                      : categoryFormState?.changes?.name ?? category?.name ?? ''
                  }
                  onChange={handleInputChange}
                  ref={formMethods.register({
                    required: t('VALIDATION_ERROR_CATEGORY_NAME_REQUIRED', 'Category name is required')
                  })}
                  placeholder={t('WRITE_NAME', 'Write name')}
                  autoComplete='off'
                />
              )
          }
          <CategoryActionContainer>
            <CategoryEnableWrapper className='business_enable_control'>
              {
                isSkeleton
                  ? <Skeleton height={15} width={100} />
                  : (
                    <>
                      {
                        category?.enabled
                          ? <span>{t('ENABLE', 'Enable')}</span>
                          : <span>{t('DISABLE', 'Disable')}</span>
                      }
                      <Switch
                        defaultChecked={
                          categoryFormState?.result?.result
                            ? categoryFormState?.result?.result?.enabled
                            : categoryFormState?.changes?.enabled ?? category?.enabled ?? true
                        }
                        onChange={handelChangeCategoryActive}
                      />
                    </>
                  )
              }
            </CategoryEnableWrapper>
            <ActionSelectorWrapper className='business_actions'>
              {
                isSkeleton
                  ? <Skeleton height={15} width={15} />
                  : (
                    <DropdownButton
                      menuAlign={theme?.rtl ? 'left' : 'right'}
                      title={ActionIcon}
                      id={theme?.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'}
                    >
                      {
                        !isAddCategory && <Dropdown.Item onClick={() => handleOpenCategoryDetails(category)}>{t('EDIT', 'Edit')}</Dropdown.Item>
                      }
                      <Dropdown.Item onClick={handleDeleteClick}>{t('DELETE', 'Delete')}</Dropdown.Item>
                    </DropdownButton>
                  )
              }
            </ActionSelectorWrapper>
          </CategoryActionContainer>
        </CategoryContent>
        <button type='submit' ref={submitBtnRef} style={{ display: 'none' }} />
      </SingleCategoryContainer>

      <Alert
        title={t('CATEGORY', 'Category')}
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

export const SingleProductsCategory = (props) => {
  const { isSkeleton } = props
  const singleProductsCategoryProps = {
    ...props,
    UIComponent: SingleProductsCategoryUI
  }
  return (
    <>
      {isSkeleton ? (
        <SingleProductsCategoryUI {...props} />
      ) : (
        <SingleProductsCategoryController {...singleProductsCategoryProps} />
      )}
    </>
  )
}
