import styled from 'styled-components'

export const AdminMainContainer = styled.div`
  display: flex;
  margin-top: 65px;
`

export const AdminContent = styled.div`
  padding-left: 0px;

  @media (min-width: 769px){
    padding-left: ${({ collapse }) => collapse ? '200px' : '65px'};
  }
`
