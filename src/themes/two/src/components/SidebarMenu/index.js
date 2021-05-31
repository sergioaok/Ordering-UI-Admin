import React, { useEffect, useState } from 'react'
import AiOutlineHome from '@meronex/icons/ai/AiOutlineHome'
import BsListCheck from '@meronex/icons/bs/BsListCheck'
import BiMessageRounded from '@meronex/icons/bi/BiMessageRounded'
import BiStore from '@meronex/icons/bi/BiStore'
import FiUsers from '@meronex/icons/fi/FiUsers'
import MdcGoogleAnalytics from '@meronex/icons/mdc/MdcGoogleAnalytics'
import FiSettings from '@meronex/icons/fi/FiSettings'
import BiSupport from '@meronex/icons/bi/BiSupport'
import MdcArrowLeft from '@meronex/icons/mdc/MdcArrowLeft'
import FaUserAlt from '@meronex/icons/fa/FaUserAlt'

import {
  SidebarContainer,
  SidebarInnerContainer,
  LogoWrap,
  SidebarContent,
  UserInfo,
  CollapseButton
} from './styles'
import { useTheme } from 'styled-components'
import { useEvent, useLanguage, useSession } from 'ordering-components-admin'
import { useWindowSize } from '../../../../../hooks/useWindowSize'
import {
  Image,
  Button
} from 'react-bootstrap'
import { SubMenu } from '../SubMenu'

export const SidebarMenu = (props) => {
  const theme = useTheme()
  const [events] = useEvent()
  const [, t] = useLanguage()
  const [sessionState] = useSession()
  const windowSize = useWindowSize()

  const [isCollapse, setIsCollapse] = useState(false)
  const [showSubmenu, setShowSubmenu] = useState({})

  const ordersSubMenus = {
    menu: t('ORDERS', 'Orders'),
    submenus: [
      {
        id: 1,
        title: t('ORDERS_MANAGER', 'Orders manager'),
        pageName: 'orders'
      },
      {
        id: 2,
        title: t('ORDERS_DASHBOARD', 'Orders dashboard'),
        pageName: 'deliveries'
      },
      {
        id: 3,
        title: t('DRIVERS_DASHBOARD', 'Drivers Dashboard'),
        pageName: 'drivers'
      }
    ]
  }

  const handleGoToPage = (data) => {
    events.emit('go_to_page', data)
  }

  const handleShowSubmenu = (type) => {
    setShowSubmenu({
      ...showSubmenu,
      [type]: true
    })
  }

  const handleCloseSubmenu = (type) => {
    setShowSubmenu({
      ...showSubmenu,
      [type]: false
    })
  }

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}

      <SidebarContainer>
        <SidebarInnerContainer
          className='d-flex flex-column'
          isCollapse={isCollapse}
        >
          <CollapseButton
            className='position-absolute bg-white p-1'
            onClick={() => setIsCollapse(!isCollapse)}
            isCollapse={isCollapse}
          >
            <MdcArrowLeft />
          </CollapseButton>
          <LogoWrap
            className='d-flex justify-content-center align-items-center'
            onClick={() => handleGoToPage({ page: 'home' })}
          >
            {isCollapse ? (
              <Image src={theme?.images?.logos?.isotype} fluid width='35px' height='45px' />
            ) : (
              <Image src={theme?.images?.logos?.logotype} fluid width='150px' height='45px' />
            )}
          </LogoWrap>
          <SidebarContent
            className='d-flex flex-column justify-content-between p-1 pt-0'
          >
            {showSubmenu?.orders && (
              <SubMenu
                items={ordersSubMenus}
                handleGoToPage={handleGoToPage}
                onClose={handleCloseSubmenu}
              />
            )}
            {!showSubmenu?.orders && (
              <div className='d-flex flex-column'>
                <Button
                  variant={(window.location.pathname === '/home' || window.location.pathname === '/') && 'primary'}
                  className='d-flex align-items-center m-1'
                  onClick={() => handleGoToPage({ page: 'home' })}
                >
                  <AiOutlineHome />
                  {!isCollapse && <span className='mx-2'>{t('HOME', 'Home')}</span>}
                </Button>
                <Button
                  className='d-flex align-items-center m-1'
                  variant={
                    (
                      window.location.pathname === '/orders' ||
                      window.location.pathname === '/deliveries' ||
                      window.location.pathname === '/drivers'
                    ) && 'primary'
                  }
                  onClick={() => handleShowSubmenu('orders')}
                >
                  <BsListCheck />
                  {!isCollapse && <span className='mx-2'>{t('ORDERS', 'Orders')}</span>}
                </Button>
                <Button
                  className='d-flex align-items-center m-1'
                  variant={window.location.pathname === '/messages-manager' && 'primary'}
                  onClick={() => handleGoToPage({ page: 'messages_manager' })}
                >
                  <BiMessageRounded />
                  {!isCollapse && <span className='mx-2'>{t('MESSAGES', 'Messages')}</span>}
                </Button>
                <Button
                  className='d-flex align-items-center m-1'
                  variant={window.location.pathname === '/stores' && 'primary'}
                  onClick={() => handleGoToPage({ page: 'stores' })}
                >
                  <BiStore />
                  {!isCollapse && <span className='mx-2'>{t('STORES', 'Stores')}</span>}
                </Button>
                <Button
                  className='d-flex align-items-center m-1'
                  variant={window.location.pathname === '/users' && 'primary'}
                  onClick={() => handleGoToPage({ page: 'users' })}
                >
                  <FiUsers />
                  {!isCollapse && <span className='mx-2'>{t('USERS', 'Users')}</span>}
                </Button>
                <Button
                  className='d-flex align-items-center m-1'
                  variant={window.location.pathname === '/analytics' && 'primary'}
                  onClick={() => handleGoToPage({ page: 'analytics' })}
                >
                  <MdcGoogleAnalytics />
                  {!isCollapse && <span className='mx-2'>{t('ANALYTICS', 'Analytics')}</span>}
                </Button>
              </div>
            )}
            <div className='d-flex flex-column'>
              <Button
                className='d-flex align-items-center m-1'
                variant={window.location.pathname === '/settings' && 'primary'}
                onClick={() => handleGoToPage({ page: 'settings' })}
              >
                <FiSettings />
                {!isCollapse && <span className='mx-2'>{t('SETTINGS', 'Settings')}</span>}
              </Button>
              <Button
                className='d-flex align-items-center m-1'
                variant={window.location.pathname === '/support' && 'primary'}
                onClick={() => handleGoToPage({ page: 'support' })}
              >
                <BiSupport />
                {!isCollapse && <span className='mx-2'>{t('SUPPORT', 'Support')}</span>}
              </Button>
            </div>
          </SidebarContent>
          <UserInfo
            className='d-flex align-items-center py-2 px-2 text-center'
          >
            <Button
              onClick={() => handleGoToPage({ page: 'profile' })}
              variant={window.location.pathname === '/profile' && 'primary'}
            >
              {sessionState?.user?.photo ? (
                <Image src={sessionState?.user?.photo} width='30px' height='30px' roundedCircle />
              ) : (
                <FaUserAlt />
              )}
              {!isCollapse && <span className='mx-2'>{sessionState?.user?.name}</span>}
            </Button>
          </UserInfo>
        </SidebarInnerContainer>
      </SidebarContainer>

      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}
