import React, { useState } from 'react'
import { useLanguage } from 'ordering-components-admin'
import GrFilter from '@meronex/icons/gr/GrFilter'
import { RectButton } from '../../styles/Buttons'
import MdAddCircleOutline from '@meronex/icons/ios/MdAddCircleOutline'
import { Modal } from '../Modal'

import { UserExport } from '../UserExport'
import { AddUser } from '../AddUser'
import { UsersFilterList } from '../UsersFilterList'
import { SearchBar } from '../SearchBar'
import {
  ActionsSectionContainer,
  FilterContainer,
  SearchContent,
  ExportContainer,
  AddUserContainer
} from './styles'

export const ActionsSection = (props) => {
  const {
    searchVal,
    onSearch
  } = props
  const [, t] = useLanguage()
  const [modals, setModals] = useState({ listOpen: false, formOpen: false })
  const [addUserModal, setAddUserModal] = useState({ listOpen: false, formOpen: false })

  return (
    <>
      <ActionsSectionContainer>
        <FilterContainer>
          <SearchContent>
            <SearchBar
              search={searchVal}
              onSearch={onSearch}
              placeholder={t('SEARCH', 'Search')}
            />
          </SearchContent>
          <GrFilter onClick={() => setModals({ ...modals, formOpen: true })} />
        </FilterContainer>
        <ExportContainer>
          <UserExport
            {...props}
          />
        </ExportContainer>
        <AddUserContainer>
          <RectButton
            onClick={() => setAddUserModal({ ...addUserModal, formOpen: true })}
            color='darkBlue'
          >
            <MdAddCircleOutline />{t('ADD_USER', 'Add user')}
          </RectButton>
        </AddUserContainer>
      </ActionsSectionContainer>
      <Modal
        open={modals.formOpen}
        width='70%'
        onClose={() => setModals({ ...modals, formOpen: false })}
      >
        <UsersFilterList
          {...props}
          onCloseModal={() => setModals({ ...modals, formOpen: false })}
        />
      </Modal>
      {/* add user */}
      <Modal
        open={addUserModal.formOpen}
        width='70%'
        onClose={() => setAddUserModal({ ...addUserModal, formOpen: false })}
      >
        <AddUser
          {...props}
          onCloseModal={() => setAddUserModal({ ...addUserModal, formOpen: false })}
        />
      </Modal>
    </>
  )
}
