import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import { Select } from '../../styles/Select'
import { Select as FirstSelect } from '../../styles/Select/FirstSelect'
import {
  Option
} from './styles'

export const UserTypeSelector = (props) => {
  const {
    userId,
    defaultUserType,
    handleChangeUserType,
    isPrimary
  } = props
  const [, t] = useLanguage()

  const userTypes = [
    {
      value: 0,
      content: <Option>{t('ADMINISTRATOR', 'Administrator')}</Option>,
      disabled: !isPrimary && defaultUserType === 0
    },
    {
      value: 1,
      content: <Option>{t('CITY_MANAGER', 'City manager')}</Option>,
      disabled: !isPrimary && defaultUserType === 1
    },
    {
      value: 2,
      content: <Option>{t('BUSINESS_OWNER', 'Business owner')}</Option>,
      disabled: !isPrimary && defaultUserType === 2
    },
    { 
      value: 3,
      content: <Option>{t('USER', 'User')}</Option>,
      disabled: !isPrimary && defaultUserType === 3
    }
  ]
  const placeholder=<Option>{t('TYPE', 'Type')}</Option>

  const onUpdateUserType = (type) => {
    handleChangeUserType && handleChangeUserType({ id: userId, level: type })
  }

  return (
    <>
      {isPrimary ? (
        <FirstSelect
          defaultValue={defaultUserType}
          placeholder={placeholder}
          options={userTypes}
          onChange={type => handleChangeUserType(type)}
        />
      ) : (
        <Select
          type='primary'
          noSelected
          placeholder={placeholder}
          options={userTypes}
          onChange={type => onUpdateUserType(type)}
        />
      )}
    </>
  )
}
