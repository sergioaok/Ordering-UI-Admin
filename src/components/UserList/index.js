import React, { useState } from 'react'
import GrFormEdit from '@meronex/icons/gr/GrFormEdit'
import { useLanguage } from 'ordering-components-admin'
import Skeleton from 'react-loading-skeleton'
import { Modal } from '../Modal'
import { SpinnerLoader } from '../SpinnerLoader'
import { UserDetails } from '../UserDetails'
import TiArrowUnsorted from '@meronex/icons/ti/TiArrowUnsorted'
import MdcDeleteOutline from '@meronex/icons/mdc/MdcDeleteOutline'
import FiMoreVertical from '@meronex/icons/fi/FiMoreVertical'
import CgCheckR from '@meronex/icons/cg/CgCheckR'
import BiSquareRounded from '@meronex/icons/bi/BiSquareRounded'
import BsFillPlayFill from '@meronex/icons/bs/BsFillPlayFill'
import FaUserAlt from '@meronex/icons/fa/FaUserAlt'
import TiMediaPlayReverse from '@meronex/icons/ti/TiMediaPlayReverse'
import { useTheme } from 'styled-components'
import {
  UserListContainer,
  UserListHeader,
  UserListTR,
  UserListHeaderItem,
  HeaderItemEditContent,
  HeaderItemContent,
  HeaderItemActionContent,
  UserListBody,
  UserListBodyItem,
  BodyCheckSection,
  BodyItemContent,
  UserAvatarSection,
  UserListStatusRound,
  BodyActionContainer,
  BodyActionContent,
  UserListFoot,
  PaginationList,
  PaginationItem,
  HeaderTR,
  EmptyWrapper,
  SkeletonContainer,
  SpinnerLoadWrapper
} from './style'

export const UserList = (props) => {
  const {
    usersList,
    paginationProps,
    getUserById,
    getUsers,
    setUsersList,
    spinLoading,
    paginationDetail
  } = props
  const theme = useTheme()
  const [, t] = useLanguage()
  const [modals, setModals] = useState({ listOpen: false, formOpen: false })
  const [selectedUser, setSelectedUser] = useState({})

  const editUserById = (userId, enabled) => {
    getUserById && getUserById(userId, enabled)
  }

  const prevNextPage = (isNextPage) => {
    getUsers && getUsers(false, isNextPage)
  }

  const openModal = (user) => {
    setSelectedUser(user)
    setModals({ ...modals, formOpen: true })
  }

  return (
    <>
      <UserListContainer>
        <UserListHeader>
          <HeaderTR isLoading={usersList.loading}>
            <UserListHeaderItem>
              <HeaderItemEditContent>
                <GrFormEdit />
              </HeaderItemEditContent>
            </UserListHeaderItem>
            <UserListHeaderItem>
              <HeaderItemContent>
                {t('NAME', 'Name')}
                <TiArrowUnsorted />
              </HeaderItemContent>
            </UserListHeaderItem>
            <UserListHeaderItem>
              <HeaderItemContent>
                {t('ID', 'ID')}
                <TiArrowUnsorted />
              </HeaderItemContent>
            </UserListHeaderItem>
            <UserListHeaderItem className='email-section'>
              <HeaderItemContent>
                {t('EMAIL', 'Email')}
                <TiArrowUnsorted />
              </HeaderItemContent>
            </UserListHeaderItem>
            <UserListHeaderItem>
              <HeaderItemContent>
                {t('PHONE', 'Phone')}
                <TiArrowUnsorted />
              </HeaderItemContent>
            </UserListHeaderItem>
            <UserListHeaderItem>
              <HeaderItemContent>
                {t('STATUS', 'Status')}
                <TiArrowUnsorted />
              </HeaderItemContent>
            </UserListHeaderItem>
            <UserListHeaderItem>
              <HeaderItemActionContent>
                {t('ACTION', 'Action')}
              </HeaderItemActionContent>
            </UserListHeaderItem>
          </HeaderTR>
        </UserListHeader>
        {
          !usersList?.loading &&
          usersList?.users?.length > 0 &&
          usersList?.users?.map((user) => (
            <UserListBody key={user.id}>
              <UserListTR>
                <UserListBodyItem>
                  <BodyCheckSection>
                    <BiSquareRounded className='un-checked-status' />
                    <CgCheckR className='pending-check-status' />
                  </BodyCheckSection>
                </UserListBodyItem>
                <UserListBodyItem>
                  <BodyItemContent>
                    {user?.photo ? (
                      <UserAvatarSection style={{ backgroundImage: `url(${user?.photo})` }} loading='lazy' />
                    ) : (
                      <FaUserAlt className='default-user-avatar' />
                    )}
                    {
                      user?.name && user?.name
                    }
                  </BodyItemContent>
                </UserListBodyItem>
                <UserListBodyItem>
                  {
                    user?.id && (
                      <BodyItemContent>
                        {user?.id}
                      </BodyItemContent>
                    )
                  }
                </UserListBodyItem>
                <UserListBodyItem className='email-section'>
                  {
                    user?.email && (
                      <BodyItemContent>
                        {user?.email}
                      </BodyItemContent>
                    )
                  }
                </UserListBodyItem>
                <UserListBodyItem>
                  {
                    user?.cellphone && (
                      <BodyItemContent>
                        {user?.cellphone}
                      </BodyItemContent>
                    )
                  }
                </UserListBodyItem>
                <UserListBodyItem>
                  <BodyItemContent
                    style={{ cursor: 'pointer' }}
                    onClick={() => editUserById(user?.id, user?.enabled)}
                  >
                    <UserListStatusRound
                      active={user?.enabled}
                    /> {user?.enabled ? 'Active' : 'Decative'}
                  </BodyItemContent>
                </UserListBodyItem>
                <UserListBodyItem>
                  <BodyActionContainer>
                    <BodyActionContent>
                      <FiMoreVertical className='more-svg' />
                      <GrFormEdit className='edit-svg' onClick={() => openModal(user)} />
                      <MdcDeleteOutline className='remove-svg' />
                    </BodyActionContent>
                  </BodyActionContainer>
                </UserListBodyItem>
              </UserListTR>
            </UserListBody>
          ))
        }
        {!usersList?.loading && usersList?.users?.length === 0 && (
          <UserListBody>
            <UserListTR>
              <UserListBodyItem colSpan='7'>
                <EmptyWrapper>
                  <img src={theme?.images?.dummies?.nonOrders} alt='none' />
                </EmptyWrapper>
              </UserListBodyItem>
            </UserListTR>
          </UserListBody>
        )}
        {
          !spinLoading && usersList?.loading && [...Array(10)].map((item, i) => (
            <UserListBody key={i}>
              <UserListTR>
                <UserListBodyItem>
                  <SkeletonContainer>
                    <Skeleton width={25} height={25} />
                  </SkeletonContainer>
                </UserListBodyItem>
                <UserListBodyItem>
                  <SkeletonContainer>
                    <Skeleton width={25} height={25} />
                    <Skeleton width={35} className='item-text' />
                  </SkeletonContainer>
                </UserListBodyItem>
                <UserListBodyItem>
                  <SkeletonContainer>
                    <Skeleton width={50} />
                  </SkeletonContainer>
                </UserListBodyItem>
                <UserListBodyItem>
                  <SkeletonContainer>
                    <Skeleton width={50} />
                  </SkeletonContainer>
                </UserListBodyItem>
                <UserListBodyItem>
                  <SkeletonContainer>
                    <Skeleton width={50} />
                  </SkeletonContainer>
                </UserListBodyItem>
                <UserListBodyItem>
                  <SkeletonContainer>
                    <Skeleton circle width={15} height={15} />
                    <Skeleton width={40} className='item-text' />
                  </SkeletonContainer>
                </UserListBodyItem>
                <UserListBodyItem>
                  <SkeletonContainer>
                    <Skeleton circle width={30} height={30} />
                  </SkeletonContainer>
                </UserListBodyItem>
              </UserListTR>
            </UserListBody>
          ))
        }
        {usersList?.users?.length > 0 && !usersList?.loading && (
          <UserListFoot>
            <HeaderTR>
              <td colSpan='7'>
                <PaginationList>
                  <PaginationItem>
                    {`${paginationDetail?.from} - ${paginationDetail?.to} of ${paginationDetail?.total}`}
                  </PaginationItem>
                  {
                    paginationProps?.currentPage > 1 && <TiMediaPlayReverse onClick={() => prevNextPage(false)} />
                  }
                  {
                    paginationProps?.totalPages !== paginationProps?.currentPage && <BsFillPlayFill onClick={() => prevNextPage(true)} />
                  }
                </PaginationList>
              </td>
            </HeaderTR>
          </UserListFoot>
        )}
      </UserListContainer>
      {spinLoading && (
        <SpinnerLoadWrapper>
          <SpinnerLoader />
        </SpinnerLoadWrapper>
      )}
      <Modal
        open={modals.formOpen}
        width='70%'
        onClose={() => setModals({ ...modals, formOpen: false })}
      >
        <UserDetails
          onClose={() => setModals({ ...modals, formOpen: false })}
          onCancel={() => setModals({ ...modals, formOpen: false })}
          onSaveUser={() => setModals({ ...modals, formOpen: false })}
          user={selectedUser}
          setSelectedUser={setSelectedUser}
          setUsersList={setUsersList}
          usersList={usersList}
          defaultItemType={1}
        />
      </Modal>
    </>
  )
}
