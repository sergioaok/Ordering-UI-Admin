import React, { useState, useEffect, useRef } from 'react'
import { useLanguage, DragAndDrop, ExamineClick, ProductExtraOptions as ProductExtraOptionsController } from 'ordering-components-admin'
import { useWindowSize } from '../../../../../hooks/useWindowSize'
import MdcClose from '@meronex/icons/mdc/MdcClose'
import { Switch } from '../../styles/Switch'
import { DropdownButton, Dropdown } from 'react-bootstrap'
import { PlusCircle } from 'react-bootstrap-icons'
import { useTheme } from 'styled-components'
import FiMoreVertical from '@meronex/icons/fi/FiMoreVertical'
import BiImage from '@meronex/icons/bi/BiImage'
import { bytesConverter } from '../../../../../utils'
import { Alert, Confirm } from '../Confirm'
import Skeleton from 'react-loading-skeleton'
import { ProductExtraMetaFields } from '../ProductExtraMetaFields'

import {
  MainContainer,
  OptionsContainer,
  Header,
  OptionsTable,
  OptionNameContainer,
  OptionImage,
  UploadImageIconContainer,
  SkeletonWrapper,
  ActionsContainer,
  EnableWrapper,
  DropDownWrapper
} from './styles'

const ProductExtraOptionsUI = (props) => {
  const {
    open,
    onClose,
    editErrors,
    cleanEditErrors,
    extraState,
    formState,
    handlechangeImage,
    handleChangeInput,
    handleChangeOptionEnable,
    handleChangeAddOption,
    addChangesState,
    handleAddOption,
    handleChangeAddOptionEnable,
    handleDeteteOption,
    businessId
  } = props

  const theme = useTheme()
  const [, t] = useLanguage()
  const { width } = useWindowSize()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const optionImageInputRef = useRef(null)
  const ActionIcon = <FiMoreVertical />
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })

  const closeAlert = () => {
    cleanEditErrors()
    setAlertState({
      open: false,
      content: []
    })
  }

  const handleChangeOptionInput = (e, option, min) => {
    const regexp = /^[0-9.\b]+$/
    if (e.target.value === '' || regexp.test(e.target.value)) {
      if (min) {
        const max = formState?.changes?.max ? formState?.changes?.max : option?.max
        if (parseInt(e.target.value) > parseInt(max)) return
      } else {
        const min = formState?.changes?.min ? formState?.changes?.min : option?.min
        if (parseInt(e.target.value) < parseInt(min)) return
      }
      handleChangeInput(e, option.id)
    }
  }

  const handleChangeAddOptionInput = (e, min) => {
    const regexp = /^[0-9.\b]+$/
    if (e.target.value === '' || regexp.test(e.target.value)) {
      if (min) {
        if (parseInt(e.target.value) > parseInt(addChangesState?.max)) return
      } else {
        if (parseInt(e.target.value) < parseInt(addChangesState?.min)) return
      }
      handleChangeAddOption(e)
    }
  }

  const handleClickImage = () => {
    optionImageInputRef.current.click()
  }

  const handleFiles = (files, optionId) => {
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
      handlechangeImage(files[0], optionId)
    }
  }

  const actionSidebar = (value) => {
    if (!value) {
      onClose()
    }
    setIsMenuOpen(value)
    document.getElementById('extra_options').style.width = value
      ? width > 1000 ? '500px' : '100%'
      : '0'
  }

  const handleAddOptionClick = () => {
    if (addChangesState?.name === '' || !addChangesState?.name || addChangesState?.min === '' || addChangesState?.max === '') {
      const errorContent = []
      if (addChangesState?.name === '' || !addChangesState?.name) errorContent.push(t('NAME_REQUIRED', 'The name is required.'))
      if (addChangesState?.min === '') errorContent.push(t('MIN_PURCHASED_REQUIRED', 'The min is required.'))
      if (addChangesState?.max === '') errorContent.push(t('MAX_PURCHASED_REQUIRED', 'The max is required.'))
      if (errorContent.length) {
        setAlertState({
          open: true,
          content: errorContent
        })
      }
    } else {
      handleAddOption()
    }
  }

  const handleDeteteClick = (optionId) => {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_OPTION', 'Are you sure that you want to delete this option?'),
      handleOnAccept: () => {
        setConfirm({ ...confirm, open: false })
        handleDeteteOption(optionId)
      }
    })
  }

  useEffect(() => {
    if (isMenuOpen) {
      if (width < 1000) {
        document.getElementById('extra_options').style.width = '100%'
      } else {
        document.getElementById('extra_options').style.width = '500px'
      }
    }
  }, [width])

  useEffect(() => {
    if (!open) return
    actionSidebar(true)
  }, [open])

  useEffect(() => {
    if (Object.keys(editErrors).length) {
      const errorContent = []
      if (editErrors?.name) errorContent.push(t('NAME_REQUIRED', 'The name is required.'))
      if (editErrors?.min) errorContent.push(t('MIN_PURCHASED_REQUIRED', 'The min is required.'))
      if (editErrors?.max) errorContent.push(t('MAX_PURCHASED_REQUIRED', 'The max is required.'))
      if (errorContent.length) {
        setAlertState({
          open: true,
          content: errorContent
        })
      }
    }
  }, [editErrors])

  return (
    <MainContainer id='extra_options'>
      <OptionsContainer>
        <Header>
          <h1>{t('OPTIONS', 'Options')}</h1>
          <MdcClose
            onClick={() => onClose()}
          />
        </Header>
        <OptionsTable>
          <thead>
            <tr>
              <th>{t('NAME', 'Name')}</th>
              <th>{t('MIN', 'Min')}</th>
              <th>{t('MAX', 'Max')}</th>
              <th>{t('ACTIONS', 'Actions')}</th>
            </tr>
          </thead>
          {extraState.extra?.options.map(option => (
            <tbody key={option.id}>
              <tr>
                <td>
                  <OptionNameContainer>
                    <OptionImage
                      onClick={() => handleClickImage()}
                    >
                      <ExamineClick
                        onFiles={files => handleFiles(files, option.id)}
                        childRef={(e) => { optionImageInputRef.current = e }}
                        accept='image/png, image/jpeg, image/jpg'
                        disabled={extraState.loading}
                      >
                        <DragAndDrop
                          onDrop={dataTransfer => handleFiles(dataTransfer.files, option.id)}
                          accept='image/png, image/jpeg, image/jpg'
                          disabled={formState.loading}
                        >
                          {extraState.loading
                            ? (<SkeletonWrapper><Skeleton /></SkeletonWrapper>)
                            : ((!formState.changes?.image || formState.result?.result === 'Network Error' || formState.result.error)
                              ? option?.image &&
                                (<img src={option?.image} alt='product image' loading='lazy' />)
                              : formState?.changes?.image &&
                                <img src={formState?.changes?.image} alt='product image' loading='lazy' />
                            )}
                          <UploadImageIconContainer>
                            <BiImage />
                          </UploadImageIconContainer>
                        </DragAndDrop>
                      </ExamineClick>
                    </OptionImage>
                    <input
                      name='name'
                      defaultValue={option.name}
                      onChange={(e) => handleChangeInput(e, option.id)}
                    />
                  </OptionNameContainer>
                </td>
                <td>
                  <input
                    name='min'
                    value={
                      formState?.result?.result
                        ? formState?.result?.result?.min
                        : formState?.changes?.min ?? option?.min
                    }
                    onChange={(e) => handleChangeOptionInput(e, option, true)}
                  />
                </td>
                <td>
                  <input
                    name='max'
                    value={
                      formState?.result?.result
                        ? formState?.result?.result?.max
                        : formState?.changes?.max ?? option?.max
                    }
                    onChange={(e) => handleChangeOptionInput(e, option, false)}
                  />
                </td>
                <td>
                  <ActionsContainer>
                    <EnableWrapper>
                      <span>{t('ENABLE', 'Enable')}</span>
                      <Switch
                        defaultChecked={option?.enabled}
                        onChange={enabled => handleChangeOptionEnable(enabled, option.id)}
                      />
                    </EnableWrapper>
                    <DropDownWrapper>
                      <DropdownButton
                        menuAlign={theme?.rtl ? 'left' : 'right'}
                        title={ActionIcon}
                        id={theme?.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'}
                      >
                        <Dropdown.Item>{t('EDIT', 'Edit')}</Dropdown.Item>
                        <Dropdown.Item onClick={() => console.log()}>{t('CUSTOM_FIELDS', 'Custom fields')}</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleDeteteClick(option.id)}>{t('DELETE', 'Delete')}</Dropdown.Item>
                      </DropdownButton>
                    </DropDownWrapper>
                  </ActionsContainer>
                </td>
              </tr>
            </tbody>
          ))}
          <tbody className='add_option'>
            <tr>
              <td>
                <OptionNameContainer>
                  <input
                    name='name'
                    value={addChangesState?.name || ''}
                    placeholder={t('WRITE_A_NAME', 'Write a name')}
                    onChange={(e) => handleChangeAddOption(e)}
                  />
                </OptionNameContainer>
              </td>
              <td>
                <input
                  name='min'
                  value={addChangesState?.min}
                  onChange={(e) => handleChangeAddOptionInput(e, true)}
                />
              </td>
              <td>
                <input
                  name='max'
                  value={addChangesState?.max}
                  onChange={(e) => handleChangeAddOptionInput(e, false)}
                />
              </td>
              <td>
                <ActionsContainer>
                  <EnableWrapper>
                    <span>{t('ENABLE', 'Enable')}</span>
                    <Switch
                      defaultChecked={addChangesState?.enabled}
                      onChange={handleChangeAddOptionEnable}
                    />
                  </EnableWrapper>
                  <PlusCircle
                    onClick={() => handleAddOptionClick()}
                  />
                </ActionsContainer>
              </td>
            </tr>
          </tbody>
        </OptionsTable>
      </OptionsContainer>
      <ProductExtraMetaFields
        businessId={businessId}
        extraId={extraState.extra.id}
      />
      <Alert
        title={t('ORDERING', 'Ordering')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
      <Confirm
        title={t('ORDERING', 'Ordering')}
        content={confirm.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={confirm.open}
        onClose={() => setConfirm({ ...confirm, open: false })}
        onCancel={() => setConfirm({ ...confirm, open: false })}
        onAccept={confirm.handleOnAccept}
        closeOnBackdrop={false}
      />
    </MainContainer>
  )
}

export const ProductExtraOptions = (props) => {
  const productExtraOptionsProps = {
    ...props,
    UIComponent: ProductExtraOptionsUI
  }
  return <ProductExtraOptionsController {...productExtraOptionsProps} />
}
