import styled, { css } from 'styled-components'

export const OrdersListContainer = styled.div`
  display: flex;
  width: calc(100% - 140px);
  padding: 30px 20px;
  box-sizing: border-box;

  ${({ deliveryAndMessageUI }) => deliveryAndMessageUI && css`
    width: 100%;
  `}

  @media (max-width: 1400px) {
    width: 100%;
    padding-right: 0px;
  }

  @media (max-width: 600px) {
    padding: 10px 0;
  }

  transition: all 0.5s;
`
export const OrdersContent = styled.div`
  width: calc(100% - 100px);
  margin-left: 100px;
  display: flex;
  justify-content: center;
  min-width: 300px;

  @media (max-width: 992px) {
    width: calc(100% - 42px);
    margin-left: 42px;
  }

  @media (max-width: 600px) {
    width: 95%;
    margin: 0px auto;
  }

  ${({ messageUI }) => messageUI && css`
    margin-left: 0px;
    width: 100%;
    @media (max-width: 992px) {
      width: 100%;
      margin-left: 0px;
    }
  `}
`
export const OrdersInnerContent = styled.div`
  width: 92%;

  @media (max-width: 1400px) {
    width: 95%;
  }
`
export const WrapperIndicator = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 100px;
  height: 50px;
  border-radius: 5px;
  background: #151824;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 500;
  font-size: 24px;
`
export const OrderNotification = styled.div`
  width: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  p {
    text-align: center;
    font-size: 20px;
    margin: 0px;

    span {
      color: #182964;
      font-weight: 600;
    }
  }
  animation: fadeIn 200ms;

  @keyframes fadeIn {
    from {
      transform: scale(2);
    }
  
    to {
      transform: scale(1);
    }
  }
`

export const WrapperMainContent = styled.div`
  ${({ deliveryUI }) => deliveryUI && css`
    margin-top: 20px;
    height: calc(100% - 65px);
    background: #FAFAFA;
    position: relative;
    border-radius: 10px;
    overflow: hidden;

    @media (max-width: 1200px) {
      height: calc(100% - 120px);
    }

    @media (max-width: 576px) {
      height: calc(100vh - 65px);
    }
  `}
  ${({ messageUI }) => messageUI && css`
    display: flex;
    margin-top: 20px;
    height: calc(100vh - 224px);;
    background: #FAFAFA;
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    padding: 15px;

    @media (max-width: 1200px) {
      height: calc(100vh - 274px);;
    }

    @media (max-width: 576px) {
      height: calc(100vh - 65px);
    }
  `}
`
export const WrapperOrdersAndDriver = styled.div`
  ${({ deliveryUI }) => deliveryUI && css`
    width: 350px;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 12px;
    position: absolute;
    background: #fff;
    right: 10px;
    top: 15px;
    height: calc(100% - 30px);
    overflow: hidden;

    @media (max-width: 576px) {
      position: fixed;
      z-index: 100;
      top: 75px;
      height: calc(100vh - 80px);
    }
  `}
  ${({ messagesUI }) => messagesUI && css`
    width: 350px;
    background: #fff;
    left: 10px;
    top: 15px;
    height: 100%;
    overflow: hidden;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 12px;

    @media (max-width: 992px) {
      position: absolute;
      z-index: 10;
      height: calc(100% - 30px);
    }
  `}
`

export const WrapperTab = styled.div`
  position: fixed;
  width: 350px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;
  border-bottom: 1px solid #F2F2F2;

  ${({ messageUI }) => messageUI && css`
    position: relative;
  `}
`
export const Tab = styled.div`
  width: 50%;
  text-align: center;
  color: #C3C3C3;
  cursor: pointer;
  font-weight: 500;

  ${({ active }) => active && css`
    color: #1C202E;
  `}
`
export const OrderAndDriverListContainer = styled.div`
  ${({ deliveryUI }) => deliveryUI && css`
    overflow: auto;
    height: calc(100% - 91px);
  `}
  ${({ messageUI }) => messageUI && css`
    overflow: auto;
    height: calc(100% - 90px);
  `}
`
export const OrdersOpenButton = styled.button`
  display: block;
  position: absolute;
  right: 10px;
  top: 20px;
  border: none;
  outline: none;
  background: transparent;
  z-index: 100;
  cursor: pointer;

  svg {
    font-size: 30px;
    color: ${props => props.theme.colors.btnDarkBlue};
  }

  ${({ messageDashboardView }) => messageDashboardView && css`
    @media (min-width: 992px) {
      display: none;
    }
    right: initial;
  `}
`
export const OrdersCloseButton = styled.button`
  display: block;
  position: absolute;
  right: 10px;
  top: 20px;
  border: none;
  outline: none;
  background: transparent;
  z-index: 100;
  cursor: pointer;

  svg {
    font-size: 30px;
    color: ${props => props.theme.colors.btnDarkBlue};
  }

  @media (max-width: 576px) {
    position: fixed;
    z-index: 200;
    top: 80px;
  }

  ${({ messageDashboardView }) => messageDashboardView && css`
    @media (min-width: 992px) {
      display: none;
    }
    right: initial;
    @media (max-width: 576px) {
      position: absolute;
      top: 20px
    }
  `}
`
export const WrapperOrderlist = styled.div``
export const WrapperMessage = styled.div`
  flex: 1;
`
export const MessageOrderDetailContainer = styled.div`
  width: 420px;
  border-left: 1px solid #D8D8D8;
  overflow: auto;

  @media(max-width: 1300px) {
    display: block;
    position: absolute;
    right: 0px;
    background: #fff;
    height: calc(100% - 30px);
    border: 1px solid #D8D8D8;
    box-shadow: -3px 3px 6px #00000029;
    z-index: 100;
  }
`
export const WrapperSortContainer = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  > div {
    border-radius: 3px;
    &:first-child {
      border: 1px solid #F2F2F2;
    }
    &:last-child {
      border: none;
    }
  }
`
export const WrapperQuickShow = styled.div`
  display: flex;
  margin-top: 56px;
  padding: 5px 20px;
  justify-content: flex-end;
  column-gap: 10px;

  svg {
    width: 25px;
    height: 25px;
    cursor: pointer;
  }
`
