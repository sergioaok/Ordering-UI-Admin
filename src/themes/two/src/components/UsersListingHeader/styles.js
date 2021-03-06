import styled, { css } from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;

  > h1 {
    font-size: 24px;
    margin: 0px;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`

export const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;

  > *:not(:last-child) {
    ${props => props.theme?.rtl ? css`
      margin-left: 10px;
    ` : css`
      margin-right: 10px;
    `}
  }

  input {
    background: #E9ECEF;
    border: none;
  }

  @media (min-width: 768px) {
    margin-top: 0px;
  }
`
