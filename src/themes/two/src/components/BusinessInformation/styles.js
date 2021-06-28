import styled from 'styled-components'

export const InfoConatiner = styled.div`
  height: 100%;
  overflow-x: hidden;
  padding: 20px;
  h1 {
    color: ${props => props.theme.colors.headingColor};
    font-size: 24px;
  }
`