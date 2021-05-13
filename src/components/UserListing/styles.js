import styled from 'styled-components'

export const UserContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 0px 15px;

  @media (min-width: 769px){
    flex-direction: row;
    padding: 0px;
  }
`

export const PageTitleText = styled.h3`
  margin-top: 32px;
`

export const UserListSection = styled.div`
  width: 100%;

  @media (min-width: 769px){
    flex-grow: 1;
    padding-right: 50px;
  }
`
