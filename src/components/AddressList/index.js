import React from 'react'
import FiMoreVertical from '@meronex/icons/fi/FiMoreVertical'
import GrFormEdit from '@meronex/icons/gr/GrFormEdit'
import MdcDeleteOutline from '@meronex/icons/mdc/MdcDeleteOutline'

import {
  AddressListContainer,
  AddressItem,
  AddressText
} from './styles'

import {
  BodyActionContainer,
  BodyActionContent
} from '../UserList/style'

export const AddressList = (props) => {
  const {
    user
  } = props

  return (
    <AddressListContainer>
      {
        user?.address &&
        <AddressItem>
          <AddressText>{user?.address}</AddressText>
          <BodyActionContainer>
            <BodyActionContent>
              <FiMoreVertical className='more-svg' />
              <GrFormEdit className='edit-svg' />
              <MdcDeleteOutline className='remove-svg' />
            </BodyActionContent>
          </BodyActionContainer>
        </AddressItem>
      }
    </AddressListContainer>
  )
}
