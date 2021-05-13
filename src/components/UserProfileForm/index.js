import React, { useState, useEffect, useRef } from 'react'
import Skeleton from 'react-loading-skeleton'
import {
  useLanguage,
  DragAndDrop,
  ExamineClick,
  UserFormDetails as UserProfileController
} from 'ordering-components-admin'
import { SpinnerLoader } from '../SpinnerLoader'

// import { UserFormDetails as UserProfileController } from './naked'
import { UserFormDetailsUI } from '../UserFormDetails'
import { Alert } from '../Confirm'

import { bytesConverter } from '../../utils'

import FiCamera from '@meronex/icons/fi/FiCamera'
import BiImage from '@meronex/icons/bi/BiImage'
import { AddressList } from '../AddressList'

import {
  Container,
  UserProfileContainer,
  UserImage,
  Image,
  SideForm,
  Camera,
  UploadImageIcon,
  SkeletonWrapper,
  WrapperForm,
  SpinnerLoadWrapper,
  SavedPlaces
} from './styles'

const UserProfileFormUI = (props) => {
  const {
    handleButtonUpdateClick,
    handlechangeImage,
    formState,
    isHiddenAddress,
    selectedUser,
    deleteUser
  } = props

  const [, t] = useLanguage()
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const inputRef = useRef(null)

  const handleFiles = (files) => {
    if (files.length === 1) {
      const type = files[0].type.split('/')[0]
      if (type !== 'image') {
        setAlertState({
          open: true,
          content: [t('ERROR_ONLY_IMAGES', 'Only images can be accepted')]
        })
        return
      }

      if (bytesConverter(files[0]?.size) > 2048) {
        setAlertState({
          open: true,
          content: [t('IMAGE_MAXIMUM_SIZE', 'The maximum image size is 2 megabytes')]
        })
        return
      }
      handlechangeImage(files[0])
    }
  }

  const handleClickImage = () => {
    inputRef.current.click()
  }

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  useEffect(() => {
    if (formState.changes?.photo) {
      const isImage = true
      handleButtonUpdateClick(null, isImage)
    }
  }, [formState.changes?.photo])

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}

      <Container>
        <UserProfileContainer mbottom={isHiddenAddress && 25}>
          <UserImage className='user-image'>
            <Image onClick={() => handleClickImage()} isImage={selectedUser?.photo || (formState?.changes?.photo && !formState.result.error)}>
              <ExamineClick onFiles={handleFiles} childRef={(e) => { inputRef.current = e }} accept='image/png, image/jpeg, image/jpg' disabled={formState.loading}>
                <DragAndDrop onDrop={dataTransfer => handleFiles(dataTransfer.files)} accept='image/png, image/jpeg, image/jpg' disabled={formState.loading}>
                  {formState.changes?.photo && formState.loading
                    ? (<SkeletonWrapper><Skeleton /></SkeletonWrapper>)
                    : ((!formState.changes?.photo || formState.result?.result === 'Network Error' || formState.result.error)
                      ? selectedUser?.photo
                        ? (<img src={selectedUser?.photo} alt='user image' width='200px' height='200px' loading='lazy' />)
                        : (
                          <UploadImageIcon>
                            <BiImage />
                            <span>{t('DRAG_DROP_IMAGE_HERE', 'Put your image here')}</span>
                          </UploadImageIcon>
                        )
                      : formState?.changes?.photo && formState.result.error && <img src={formState?.changes?.photo} alt='user image' loading='lazy' />
                    )}
                </DragAndDrop>
              </ExamineClick>
            </Image>
            <Camera><FiCamera /></Camera>
          </UserImage>
          <SideForm className='user-form'>
            <WrapperForm>
              <UserFormDetailsUI
                {...props}
                isHiddenAddress={isHiddenAddress}
                isEdit
                userData={selectedUser}
                deleteUser={deleteUser}
              />
            </WrapperForm>
          </SideForm>
        </UserProfileContainer>
        {selectedUser?.address && (
          <SavedPlaces>
            <h1>{t('SAVED_PLACES', 'Saved Places')}</h1>
            <AddressList user={selectedUser} />
          </SavedPlaces>
        )}
        {formState.loading && (
          <SpinnerLoadWrapper>
            <SpinnerLoader />
          </SpinnerLoadWrapper>
        )}
      </Container>
      <Alert
        title={t('PROFILE', 'Profile')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}

export const UserProfileForm = (props) => {
  const UserProfileProps = {
    ...props,
    UIComponent: UserProfileFormUI
  }

  return (
    <UserProfileController {...UserProfileProps} />
  )
}
