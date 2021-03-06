import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { UserDetails as UserDetailsController } from 'ordering-components-admin'
import { UserDetailsMenu } from '../UserDetailsMenu'
import { UserProfileForm } from '../UserProfileForm'
import { AddressList } from '../AddressList'
import { OrdersManager } from '../OrdersManager'

import {
  UserName,
  SavedPlaces
} from './styles'
import { Personalization } from '../Personalization'
import { UserMetaFields } from '../UserMetaFields'

export const UserDetailsUI = (props) => {
  const {
    userState,
    setExtraOpen,
    handleSuccessUpdate,
    handleSuccessAddressesUpdate
  } = props

  const [currentMenuSelected, setCurrentMenuSelected] = useState('profile')

  useEffect(() => {
    setExtraOpen(false)
  }, [currentMenuSelected])

  return (
    <>
      <UserName>
        {userState.loading ? (
          <Skeleton width={150} />
        ) : (
          <span>{userState?.user?.name} {userState?.user?.lastname}</span>
        )}
      </UserName>
      <UserDetailsMenu
        currentMenuSelected={currentMenuSelected}
        handleChangeMenu={setCurrentMenuSelected}
      />
      {!userState?.loading && userState?.user && (
        <>
          {currentMenuSelected === 'profile' && (
            <UserProfileForm
              user={userState.user}
              handleSuccessUpdate={handleSuccessUpdate}
            />
          )}
          {currentMenuSelected === 'saved_places' && (
            <>
              {userState?.user?.addresses && (
                <SavedPlaces>
                  <AddressList
                    isSeletectedUserAddresses
                    userId={userState.user?.id}
                    addresses={userState.user?.addresses}
                    setExtraOpen={setExtraOpen}
                    handleSuccessAddressesUpdate={handleSuccessAddressesUpdate}
                  />
                </SavedPlaces>
              )}
            </>
          )}
          {currentMenuSelected === 'orders' && (
            <OrdersManager
              isSelectedOrders
              customerId={userState.user?.id}
              handleCustomOrderDetail={setExtraOpen}
            />
          )}
          {currentMenuSelected === 'metafields' && (
            <UserMetaFields
              userId={userState.user?.id}
            />
          )}
          {currentMenuSelected === 'personalization' && (
            <Personalization />
          )}
        </>
      )}
    </>
  )
}

export const UserDetails = (props) => {
  const userDetailsControlProps = {
    ...props,
    UIComponent: UserDetailsUI
  }

  return (
    <>
      <UserDetailsController {...userDetailsControlProps} />
    </>
  )
}
