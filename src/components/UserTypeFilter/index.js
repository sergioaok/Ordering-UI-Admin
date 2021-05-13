import React from 'react'
import { UserTypeFilter as UserTypeFilterController } from 'ordering-components-admin'
import {
  UserTypeFilterContainer,
  FilterItemText
} from './styles'

export const UserTypeFilterUI = (props) => {
  const {
    handleChangeUserType,
    userTypes,
    currentTypeSelected
  } = props

  const handleChangeUserRole = (types) => {
    handleChangeUserType && handleChangeUserType(types)
  }

  return (
    <UserTypeFilterContainer>
      {userTypes && userTypes.length > 0 && userTypes.map((type, i) => (
        <FilterItemText
          active={type.value === currentTypeSelected}
          onClick={() => handleChangeUserRole(type.value)}
          key={i}
        >
          {type.key}
        </FilterItemText>
      ))}
    </UserTypeFilterContainer>
  )
}

export const UserTypeFilter = (props) => {
  const userTypeFilterProps = {
    ...props,
    UIComponent: UserTypeFilterUI,
    userTypes: props.userTypes || [
      { key: 'Users', value: 3 },
      { key: 'Business owner', value: 2 },
      { key: 'City manager', value: 1 },
      { key: 'Admintrators', value: 0 }
    ],
    defaultUserType: props.defaultUserType || 3,
    onChangeUserType: props.handleChangeUserType
  }

  return (
    <UserTypeFilterController {...userTypeFilterProps} />
  )
}
