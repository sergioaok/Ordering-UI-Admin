import React, { useState } from 'react'
import { Header } from '../components/Header'
// import { SideMenu } from '../components/SideMenu'
import { LateralMenu } from '../components/LateralMenu'
import {
  AdminMainContainer,
  AdminContent
} from './styles'

export const AdminLayout = (props) => {
  const [isCollapse, setIsCollapse] = useState(true)

  const sideMenuProps = {
    isCollapse: isCollapse,
    setIsCollapse: setIsCollapse
  }

  return (
    <>
      <Header />
      <AdminMainContainer>
        <LateralMenu {...sideMenuProps} />
        <AdminContent collapse={isCollapse}>
          {props.children}
        </AdminContent>
      </AdminMainContainer>
    </>
  )
}
