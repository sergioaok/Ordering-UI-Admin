import styled from 'styled-components'

export const OrdersListContainer = styled.div`
  display: flex;
  width: calc(100% - 140px);
  padding: 30px 20px;
  box-sizing: border-box;

  @media (max-width: 1400px) {
    width: 100%;
    padding-right: 0px;
  }

  @media (max-width: 600px) {
    padding: 10px 0;
  }
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
