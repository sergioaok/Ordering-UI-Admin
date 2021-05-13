import React from 'react'
import {
  UserContainer,
  PageTitleText,
  UserListSection
} from './styles'

import { UserTypeFilter } from '../UserTypeFilter'
import { UserList } from '../UserList'
import { ActionsSection } from '../ActionsSection'

import {
  useLanguage,
  UserList as UserListController
} from 'ordering-components-admin'

const UserListingUI = (props) => {
  const {
    usersList,
    handleChangeUserType,
    paginationProps,
    getUserById,
    getUsers,
    setUsersList,
    filterValues,
    setFilterValues,
    searchVal,
    onSearch,
    spinLoading,
    paginationDetail
  } = props
  const [, t] = useLanguage()

  return (
    <>
      <UserContainer>
        <UserTypeFilter
          handleChangeUserType={handleChangeUserType}
        />
        <UserListSection>
          <PageTitleText>{t('USERS', 'Users')}</PageTitleText>
          <ActionsSection
            filterValues={filterValues}
            setFilterValues={setFilterValues}
            searchVal={searchVal}
            onSearch={onSearch}
          />
          <UserList
            usersList={usersList}
            paginationProps={paginationProps}
            getUserById={getUserById}
            getUsers={getUsers}
            setUsersList={setUsersList}
            spinLoading={spinLoading}
            paginationDetail={paginationDetail}
          />
        </UserListSection>

      </UserContainer>
    </>
  )
}

export const UserListing = (props) => {
  const userListingProps = {
    ...props,
    UIComponent: UserListingUI,
    isSearchByUserId: true,
    isSearchByCustomerEmail: true,
    isSearchByCustomerPhone: true
  }

  return <UserListController {...userListingProps} />
}
