import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const ActionsSectionContainer = styled.div`
  padding: 20px 15px 0px 15px;
  margin-bottom: 20px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0px 2px 2px #00000029;

  @media (min-width: 576px) {
    flex-direction: row;
  }

  > div {
    @media(max-width: 576px) {
      width: 100%;
    }
  }
`

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  > svg {
    cursor: pointer;
    font-size: 18px;
    margin: 0px 15px;
  }
`
export const SearchContent = styled.div`
  position: relative;
  img {
    width: 18px;
    position: absolute;
    left: 10px;
    ${props => props.theme?.rtl && css`
        right: 10px;
    `};
    top: 11px;
  }
  input {
    border-radius: 5px;
    transition: all 0.3s;

    @media (min-width: 576px) {
      width: 150px;
    }

    @media (min-width: 769px) {
      width: 170px;
    }

    @media (min-width: 1200px) {
      width: 350px;
    }

    @media (min-width: 1366px) {
      width: 550px;
    }

    &:focus {
      border-color: ${() => darken(0.07, '#CCC')};
    }
  }
`

export const ExportContainer = styled.div`
  padding: 0px 20px;
  margin-bottom: 20px;
`

export const AddUserContainer = styled.div`
  margin-bottom: 20px;
  button {
    width: 255px;
    transition: all 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    
    @media (min-width: 576px) {
      width: 150px;
    }

    > svg {
      margin: 0px 10px;
      color: ${props => props.theme.colors.btnDarkBlueContrast};
      font-size: 22px;
    }
  }
`
