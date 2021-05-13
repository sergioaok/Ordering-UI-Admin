import styled, { css } from 'styled-components'

export const UserTypeFilterContainer = styled.div`
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0px 2px 2px #00000029;
  padding: 5px;
  margin: 0px;
  width: 100%;
  box-sizing: border-box;
  margin-top: 80px;
  
  @media (min-width: 769px){
    width: 20%;
    margin: 0px 20px;
    margin-top: 80px;
  }
`

export const FilterItemText = styled.div`
  padding: 10px 5px;
  cursor: pointer;
  font-size: 14px;
  border-radius: 5px;
  transition: all 0.3s;
  ${({ active }) => active && css`
    background-color: ${props => props.theme.colors.btnDarkBlue};
    color: white;
  `};
`
