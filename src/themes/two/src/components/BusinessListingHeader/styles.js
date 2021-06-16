import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;

  > h1 {
    font-size: 24px;
    margin: 0px;
  }

  input {
    background: #E9ECEF;
    border: none;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`
