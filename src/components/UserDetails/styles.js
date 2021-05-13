import styled, { css } from 'styled-components'

export const UserDetailsContainer = styled.div``

export const DetailsTitle = styled.h2`
  font-size: 22px;
  margin-top: 0px;
`

export const CustomerInfoList = styled.div`
  display: flex;
  align-items: center;
`

export const InfoItem = styled.span`
  font-size: 11px;
  padding: 10px 5px;
  border-radius: 5px;
  transition: all 0.3s;
  cursor: pointer;
  margin-right: 5px;
  ${({ active }) => active && css`
      background: #182964c7;
      color: ${props => props.theme.colors.primary};
  `}

  @media (min-width: 480px){
    margin-right: 15px;
    font-size: 12px;
  }
`

export const CustomerInfoContent = styled.div``

export const GeneralInfo = styled.div``
