import styled, { css } from 'styled-components'

export const LateralMenuContainer = styled.div`
  padding-top: 15px;
  position: fixed;
  z-index: 1200;
  background-color: #ffffff;
  height: 100vh;
  box-shadow: 0px 2px 2px #00000029;
  width: ${({ isShowMenu }) => isShowMenu ? '100vw' : '0px'};
  overflow: auto;
  transition: all 0.3s;
  top: 0px;

  @media (min-width: 576px){
    width: ${({ isShowMenu }) => isShowMenu ? '60vw' : '0px'};
  }

  @media (min-width: 769px){
    height: calc(100vh - 65px);
    top: auto;
    width: ${({ colapse }) => colapse ? '200px' : '65px'};
  }
`

export const MenuContent = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding: 5px 10px;
  box-sizing: border-box;
  height: 100%;

  @media (min-width: 769px){
    padding: 10px 5px;
    justify-content: space-between;
  }
`

export const MainMenuList = styled.div``

export const MenuBottom = styled.div``

export const LogoHeader = styled.div`
  cursor: pointer;
  margin-bottom: 25px;
  img {
    width: 130px;
    margin: 0 15px;
    vertical-align: middle;
  }
  display: flex;
  @media (min-width: 769px){
    display: none;
  }
`

export const UserAvatar = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  img,
  svg {
    font-size: 24px;
    margin: 0px 15px;
  }
  > div {
    font-size: 14px;
  }
`

export const UserName = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
`

export const MenuItem = styled.div`
  cursor: pointer;
  padding: 10px 0px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  svg {
    margin: 0px 15px;
    font-size: 24px;
  }
  ${({ active }) => active && css`
  background-color: ${props => props.theme.colors.btnDarkBlue};
  color: white;
`};
`

export const ItemText = styled.span`
  font-size: 12px;

`

export const LogOutItem = styled.div`
  cursor: pointer;
  padding: 5px 0px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  transition: all 0.3s;
  color: red;

  svg {
    margin: 0px 15px;
    color: red;
    font-size: 24px;
  }
`

export const CloseMenu = styled.div`
  margin-bottom: 20px;
  svg {
    font-size: 22px;
  }
  display: flex;
  @media (min-width: 769px){
    display: none;
  }
`

export const SidbeBarControl = styled.div`
  display: none;
  aligin-items: center;
  justify-content: ${({ colapse }) => colapse ? 'flex-end' : 'center'};
  padding: 15px 0px;

  @media (min-width: 769px){
    display: flex;
  }

  svg {
    transform: rotate(0deg);
    cursor: pointer;
    font-size: 22px;
    margin: 0px 15px;
  }

  ${({ colapse }) => colapse && css`
    svg {
      transform: rotate(180deg);
    }
  `};
`
