import styled, { css } from 'styled-components'

export const OrderDashboardControlsContainer = styled.div`
  display: flex;
  margin-top: 10px;

  button {
    margin: 0 7px;
    height: 42px;

    svg {
      ${props => props.theme?.rtl ? css`
        margin-right: 5px;
      ` : css`
        margin-left: 5px;
      `}
    }
  }

  @media (min-width: 992px) {
    margin: 0px;
  }
`

export const InnerContnet = styled.div`
  display: flex;
`

export const WrapOrderStatusTypeSelector = styled.div`
  margin: 0 7px;
  div.orderStatus {
    > div:first-child {
      background-color: ${props => props.theme.colors.secundary};
  
      p {
        color: ${props => props.theme.colors.secundaryContrast};
      }
    }
  }
`
