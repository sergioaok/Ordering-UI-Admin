import styled, { css } from 'styled-components'

export const Option = styled.div`
  display: flex;
  align-items: center;
  padding: 3px 0;
  column-gap: 5px;  

  ${({ noPadding }) => noPadding && css`
    padding: 0px;
  `}

  img {
    width: 15px;
  }

  p {
    margin: 0px;
    white-space: nowrap;

    @media (max-width: 1300px) {
      margin: 0px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      max-width: 120px;
    }
  }
`
export const PlaceholderTitle = styled.div`
  display: flex;
  align-items: center;
  column-gap: 5px;
  padding: 5px 10px;

  svg {
    width: 20px;
    height: 20px;
  }
`
