import styled from 'styled-components'

export const HeaderContainer = styled.div`
  position: fixed;
  top: 0px;
  z-index: 1000;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  width: 100%;
  box-shadow: 0px 2px 2px #00000029;

  @media print {
    display: none;
  }
`

export const InnerHeader = styled.div`
  display: flex;
  width: 100%;
  color: #151824;
  justify-content: space-between;
  width: 98%;
  margin: 10px auto;
`

export const LogoHeader = styled.div`
  cursor: pointer;

  img {
    width: 150px;
    height: 45px;
    margin: 0;
    vertical-align: middle;

    @media (max-width: 768px) {
      width: 150px;
    }

    @media (max-width: 576px) {
      width: 55px;
    }
  }

  img:nth-child(2) {
    display: none;
  }

  @media (max-width: 576px) {
    img:nth-child(1) {
      display: none;
    }
    img:nth-child(2) {
      display: block;
    }
  }
`

export const LeftHeader = styled.div`
  align-self: center;
  display: flex;
`

export const RightHeader = styled.div`
  display: flex;
  column-gap: 10px;
  align-items: center;
`
export const OverViewControlButton = styled.button`
  background: ${props => props.theme.colors.primary};
  border-radius: 100%;
  border: none;
  outline: none;
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  
  svg {
    flex-shrink: 0;
    font-size: 30px;
    color: #333;
  }

  @media (min-width: 1400px) {
    display: none;
  }
`

export const MobileMenu = styled.div`
  display: block;
  margin: auto 10px;
  @media (min-width: 769px){
    display: none;
  }

  svg {
    font-size: 38px;
  }
`

export const Overlayer = styled.div`
  background: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 1150;
`
