import React, { useState, useEffect } from 'react'
import { useLanguage, UsersList as UsersListController } from 'ordering-components-admin'
import { Select } from '../../styles/Select/FirstSelect'

import { Option } from './styles'

const BusinessOwnerSelectorUI = (props) => {
  const {
    usersList,
    selectedOwnerIds,
    handleSelectBusinessOwner
  } = props

  const [, t] = useLanguage()
  const [usersListOptions, setUsersListOptions] = useState([])

  const placeholder = <Option>{t('SELECT_BUSINESS_OWNER', 'Select business owner')}</Option>

  const onSelectBusinessOwner = (id) => {
    const selectedOwner = usersList?.users.find(user => user.id === id)
    handleSelectBusinessOwner(selectedOwner)
  }

  useEffect(() => {
    if (usersList?.loading) return
    const _usersListOptions = usersList?.users.map(user => {
      return {
        value: user.id,
        content: (
          <Option>
            {user.id}. {user?.name} {user?.lastname}
          </Option>
        ),
        showDisable: selectedOwnerIds.includes(user.id)
      }
    })
    setUsersListOptions(_usersListOptions)
  }, [usersList, selectedOwnerIds])
  return (
    <Select
      options={usersListOptions}
      placeholder={placeholder}
      onChange={onSelectBusinessOwner}
    />
  )
}

export const BusinessOwnerSelector = (props) => {
  const businessOwnersProps = {
    ...props,
    UIComponent: BusinessOwnerSelectorUI,
    isBusinessOwners: true,
    deafultUserTypesSelected: [0, 2]
  }
  return <UsersListController {...businessOwnersProps} />
}
