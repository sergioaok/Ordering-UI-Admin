import React from 'react'
// import { UsersFilter as UsersFilterController } from './naked'
import {
  useLanguage,
  UsersFilter as UsersFilterController
} from 'ordering-components-admin'

import {
  UserFilterListContainer,
  InputWrapper,
  Label,
  Title,
  InputForm,
  ActionButtons,
  Option
} from './styles'
import { RectangleInput } from '../../styles/Inputs'
import { RectButton } from '../../styles/Buttons'
import { useForm } from 'react-hook-form'
import { Select } from '../../styles/Select'

const UsersFilterListUI = (props) => {
  const {
    handleChangeInput,
    filterState,
    applyFilter,
    clearFilter
  } = props

  const [, t] = useLanguage()
  const { handleSubmit } = useForm()

  const FilterOptions = [
    { key: 'name', type: 'text', label: 'Name' },
    { key: 'lastname', type: 'text', label: 'Last Name' },
    { key: 'email', type: 'text', label: 'Email' },
    { key: 'email_verified', type: 'select', label: t('VERIFIED_EMAIL', 'Verified Email') },
    { key: 'phone', type: 'text', label: t('PHONE', 'Phone') },
    { key: 'phone_verified', type: 'select', label: t('VERIFIED_PHONE', 'Verified Phone') },
    { key: 'id', type: 'number', label: t('ID', 'ID') }
  ]

  const selectTypes = [
    { value: true, content: <Option>{t('VERIFIED', 'Verified')}</Option> },
    { value: false, content: <Option>{t('UNVERIFIED', 'UnVerified')}</Option> }
  ]

  const onSubmit = () => {
    applyFilter && applyFilter()
  }

  return (
    <UserFilterListContainer>
      <Title>{t('FILTERS', 'Filters')}</Title>
      <InputForm onSubmit={handleSubmit(onSubmit)}>
        {FilterOptions && FilterOptions.map((item, i) => (
          item.type === 'select' ? (
            <InputWrapper key={i}>
              <Label>{item?.label}</Label>
              <Select
                defaultValue={filterState?.changes?.[`${item?.key}`]}
                options={selectTypes}
                placeholder={t('SELECT_A_TYPE', 'Select a type')}
                className='rectangle-select'
                onChange={(val) => handleChangeInput(item?.key, val)}
              />
            </InputWrapper>
          ) : (
            <InputWrapper key={i}>
              <Label>{item?.label}</Label>
              <RectangleInput
                type={item?.type}
                name={item?.key}
                className='form'
                placeholder={item?.label}
                value={filterState?.changes?.[`${item?.key}`] || ''}
                onChange={(e) => handleChangeInput(e.target.name, e.target.value)}
                autoComplete='off'
              />
            </InputWrapper>
          )))}
        <ActionButtons>
          <RectButton
            outline
            type='button'
            onClick={() => clearFilter()}
          >
            {t('CLEAR', 'Clear')}
          </RectButton>
          <RectButton
            type='submit'
            color='darkBlue'
          >
            {t('FILTER', 'Filter')}
          </RectButton>
        </ActionButtons>
      </InputForm>
    </UserFilterListContainer>
  )
}

export const UsersFilterList = (props) => {
  const usersFilterListProps = {
    ...props,
    UIComponent: UsersFilterListUI
  }
  return <UsersFilterController {...usersFilterListProps} />
}
