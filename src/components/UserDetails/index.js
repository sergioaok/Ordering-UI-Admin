import React, { useState } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { UserProfileForm } from '../UserProfileForm'
import { UserOrders } from '../UserOrders'
import { ActivityRegister } from '../ActivityRegister'
import { Personalization } from '../Personalization'

import {
  UserDetailsContainer,
  DetailsTitle,
  CustomerInfoList,
  InfoItem,
  CustomerInfoContent,
  GeneralInfo
} from './styles'

export const UserDetails = (props) => {
  const {
    setSelectedUser,
    user,
    onClose,
    setUsersList,
    usersList,
    defaultItemType
  } = props
  const [, t] = useLanguage()
  const [currentItemSelected, setCurrentItemSelected] = useState(defaultItemType)

  const itemTypes = [
    { key: 'General Info', value: 1 },
    { key: 'Orders history', value: 2 },
    { key: 'Timeline', value: 3 },
    { key: 'Activity Register', value: 4 },
    { key: 'Personalization', value: 5 }
  ]

  return (
    <UserDetailsContainer>
      <DetailsTitle>{user?.name || t('CUSTOMER_NAME', 'Customer name')}</DetailsTitle>
      <CustomerInfoList>
        {itemTypes && itemTypes.length > 0 && itemTypes.map((type, i) => (
          <InfoItem
            active={type.value === currentItemSelected}
            onClick={() => setCurrentItemSelected(type.value)}
            key={i}
          >
            {type.key}
          </InfoItem>
        ))}
      </CustomerInfoList>
      <CustomerInfoContent>
        {currentItemSelected === 1 && (
          <GeneralInfo>
            <UserProfileForm
              onClose={onClose}
              user={user}
              setSelectedUser={setSelectedUser}
              setUsersList={setUsersList}
              usersList={usersList}
              useValidationFields
            />
          </GeneralInfo>
        )}
        {currentItemSelected === 2 && (
          <UserOrders />
        )}
        {currentItemSelected === 4 && (
          <ActivityRegister />
        )}
        {currentItemSelected === 5 && (
          <Personalization />
        )}
      </CustomerInfoContent>
    </UserDetailsContainer>
  )
}
