import styled from 'styled-components'

export const PersonalizationContainer = styled.div``

export const Title = styled.h2``

export const Description = styled.p``

export const Link = styled.span`
  color: #38a1f4;
`

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 98%;
    margin: auto;
    height: auto;
    @media(min-width: 576px) {
      width: 50%;
    }
  }
`
