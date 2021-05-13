import styled from 'styled-components'

export const ActivityRegisterContainer = styled.div`
  margin-top: 20px;
`

export const VisitInfo = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 480px) {
    flex-direction: row;
  }
`

export const ItemContainer = styled.div`
  padding: 15px 20px;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  margin-bottom: 20px;

  @media (min-width: 480px) {
    flex-direction: row;
    margin-right: 20px;
  }
`

export const ItemName = styled.p`
  color: #e5e5e5;
  font-size: 12px;
  margin-top: 0px;
`

export const ItemData = styled.div``

export const ItemUnit = styled.span`
  font-size: 12px;
`

export const ItemAmount = styled.span`
  font-size: 25px;
  font-weight: bold;
`

export const OrdersContainer = styled.div``
