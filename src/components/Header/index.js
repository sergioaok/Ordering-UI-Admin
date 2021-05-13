import React, { useState } from 'react'
import { useEvent } from 'ordering-components-admin'
import { useTheme } from 'styled-components'
import HiMenu from '@meronex/icons/hi/HiMenu'
// import { useWindowSize } from '../../hooks/useWindowSize'
// import IosMenu from '@meronex/icons/ios/IosMenu'

import {
  HeaderContainer,
  InnerHeader,
  LogoHeader,
  LeftHeader,
  RightHeader,
  MobileMenu,
  Overlayer
  // OverViewControlButton
} from './styles'
import { useOnlineStatus } from '../../hooks/useOnlineStatus'

import { UserPopover } from '../UserPopover'
// import { MobileSidebarMenu } from '../MobileSidebarMenu'
import { LateralMenu } from '../LateralMenu'

export const Header = (props) => {
  const [events] = useEvent()
  const [openPopover, setOpenPopover] = useState({})
  const [isMobile, setIsMobile] = useState(false)
  // const [openOverview, setOpenOverview] = useState(true)
  const theme = useTheme()
  // const { width } = useWindowSize()
  const onlineStatus = useOnlineStatus()

  const handleTogglePopover = (type) => {
    setOpenPopover({
      ...openPopover,
      [type]: !openPopover[type]
    })
  }

  const handleClosePopover = (type) => {
    setOpenPopover({
      ...openPopover,
      [type]: false
    })
  }

  const handleGoToPage = (data) => {
    events.emit('go_to_page', data)
  }

  // useEffect(() => {
  //   if (document.getElementById('overView') !== null) {
  //     if (width < 1400) {
  //       if (!openOverview) {
  //         document.getElementById('overView').style.right = '0px'
  //       } else {
  //         document.getElementById('overView').style.right = '-140px'
  //       }
  //     } else {
  //       document.getElementById('overView').style.right = '0px'
  //     }
  //   }
  // }, [openOverview, width])

  return (
    <>
      <LateralMenu
        isMobile={isMobile}
        setIsMobile={setIsMobile}
      />
      { isMobile && <Overlayer onClick={() => setIsMobile(false)} />}
      <HeaderContainer>
        <InnerHeader>
          <LeftHeader>
            {/* <MobileSidebarMenu /> */}
            <MobileMenu>
              <HiMenu onClick={() => setIsMobile(true)} />
            </MobileMenu>
            <LogoHeader onClick={() => handleGoToPage({ page: 'orders-deliveries' })}>
              <img alt='Logotype' src={theme?.images?.logos?.logotype} />
              <img alt='Isotype' src={theme?.images?.logos?.isotype} />
            </LogoHeader>
          </LeftHeader>

          {onlineStatus && (
            <RightHeader>
              <UserPopover
                open={openPopover.user}
                onClick={() => handleTogglePopover('user')}
                onClose={() => handleClosePopover('user')}
              />

              {/* {window.location.pathname === '/orders' && (
              <OverViewControlButton onClick={() => setOpenOverview(!openOverview)}>
                <IosMenu />
              </OverViewControlButton>
            )} */}
            </RightHeader>
          )}
        </InnerHeader>
      </HeaderContainer>
    </>
  )
}
