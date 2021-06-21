import styled, { css } from 'styled-components'

export const Option = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${({ isDefault }) => isDefault ? css`
    padding: 0px 15px;
  ` : css`
    padding: 10px 15px;
  `}

  svg {
    margin-right: 5px;
    ${props => props.theme?.rtl && css`
      margin-left: 5px;
      margin-right: 0px;
    `} 
  }
`

export const PlaceholderTitle = styled(Option)`
  padding: 5px 15px;
`
