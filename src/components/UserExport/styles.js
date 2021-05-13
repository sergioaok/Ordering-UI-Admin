import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const ExportContent = styled.div`
  position: relative;
  width: 255px;

  @media (min-width: 576px) {
    width: 150px;
  }
`

export const ExportTitle = styled.div`
  border-radius: 5px;
  border: 1px solid #707070;
  padding: 7px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  ${({ disabled }) => disabled && css`
    pointer-events: none;
  `};
`

export const ExportText = styled.div`
  display: flex;
  align-items: center;
`

export const ExportDropMenu = styled.div`
  position: absolute;
  border-radius: 5px;
  border: 1px solid ${() => darken(0.07, '#CCC')};
  width: 100%;
  margin-top: 10px;
  z-index: 50;
  background-color: white;
`
export const MenuItem = styled.div`
  padding: 5px;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    background: ${() => darken(0.07, '#CCC')};
  }
`
