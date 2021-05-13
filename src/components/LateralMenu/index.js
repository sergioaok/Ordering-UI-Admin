import React, { useState } from 'react'
import { useTheme } from 'styled-components'
import {
  useSession,
  useLanguage,
  useEvent,
  LogoutAction as LogoutActionController
} from 'ordering-components-admin'
import BiChevronDown from '@meronex/icons/bi/BiChevronDown'
import { DropDownCircleImage } from '../Dropdown/style'
import FaUserAlt from '@meronex/icons/fa/FaUserAlt'
import BsListTask from '@meronex/icons/bs/BsListTask'
import EnUsers from '@meronex/icons/en/EnUsers'
import RiLogoutCircleRLine from '@meronex/icons/ri/RiLogoutCircleRLine'
import GrClose from '@meronex/icons/gr/GrClose'
import EnLogin from '@meronex/icons/en/EnLogin'

import {
  LateralMenuContainer,
  MainMenuList,
  MenuBottom,
  LogoHeader,
  UserAvatar,
  UserName,
  MenuItem,
  ItemText,
  LogOutItem,
  MenuContent,
  CloseMenu,
  SidbeBarControl
} from './styles'

export const LateralMenu = (props) => {
  const {
    isCollapse,
    setIsCollapse,
    isMobile,
    setIsMobile
  } = props
  const [events] = useEvent()
  const theme = useTheme()
  const [, t] = useLanguage()
  const [sessionState] = useSession()

  const handleGoToPage = (data) => {
    events.emit('go_to_page', data)
  }

  return (
    <>
      <LateralMenuContainer
        isShowMenu={isMobile}
        colapse={isCollapse}
      >
        <MenuContent>
          <MainMenuList>
            <CloseMenu>
              <GrClose onClick={() => setIsMobile(false)} />
            </CloseMenu>
            <LogoHeader onClick={() => handleGoToPage({ page: 'orders_deliveries' })}>
              <img alt='Logotype' src={theme?.images?.logos?.logotype} />
            </LogoHeader>
            <UserAvatar>
              <DropDownCircleImage
                src={sessionState?.user?.photo}
                fallback={<FaUserAlt />}
              />
              {
                (isCollapse || isMobile) && (
                  <UserName>
                    {sessionState?.user?.name} {sessionState?.user?.lastname}
                    <BiChevronDown />
                  </UserName>
                )
              }
            </UserAvatar>
            <MenuItem
              onClick={() => handleGoToPage({ page: 'orders_deliveries' })}
              active={
                window.location.pathname === '/orders-deliveries'
              }
            >
              <BsListTask />
              {
                (isCollapse || isMobile) && <ItemText>{t('ORDERS_MANAGER', 'Orders Manager')}</ItemText>
              }
            </MenuItem>
            <MenuItem
              active={
                window.location.pathname === '/users'
              }
              onClick={() => handleGoToPage({ page: 'users' })}
            >
              <EnUsers />
              {
                (isCollapse || isMobile) && <ItemText>{t('USERS', 'Users')}</ItemText>
              }
            </MenuItem>
          </MainMenuList>
          <MenuBottom>
            <PopoverListItemLogout
              isCollapse={isCollapse}
              isMobile={isMobile}
            />
            {
              !isMobile && (
                <SidbeBarControl colapse={isCollapse}>
                  <EnLogin
                    onClick={() => setIsCollapse(!isCollapse)}
                  />
                </SidbeBarControl>
              )
            }
          </MenuBottom>
        </MenuContent>
      </LateralMenuContainer>
    </>
  )
}

const LogoutActionUI = (props) => {
  const {
    isCollapse,
    isMobile
  } = props
  const [, t] = useLanguage()

  const handleClick = () => {
    props.handleLogoutClick()
    props.onClose && props.onClose()
  }
  return (
    <LogOutItem onClick={handleClick}>
      <RiLogoutCircleRLine />
      {
        (isCollapse || isMobile) && <ItemText>{t('LOGOUT', 'Log out')}</ItemText>
      }
    </LogOutItem>
  )
}

const PopoverListItemLogout = (props) => {
  const logoutActionProps = {
    ...props,
    UIComponent: LogoutActionUI,
    onClose: props.onClose
  }
  return <LogoutActionController {...logoutActionProps} />
}

