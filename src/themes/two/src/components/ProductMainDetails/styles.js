import React from 'react'
import styled, { css } from 'styled-components'

export const ProductDetailsContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  overflow-x: hidden;

  > button {
    position: sticky;
    top: 100%;
    margin: 30px 0;
    background: #E9ECEF;
    height: 42px;
  }
`

export const DetailsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`

export const ProductName = styled.h1`
  color: ${props => props.theme.colors.headingColor};
  font-size: 24px;
  margin: 0px;
  font-weight: 600;

  ${props => props.theme?.rtl ? css`
    margin-left: 10px;
  ` : css`
    margin-right: 10px;
  `}
`

export const LeftHeader = styled.div`
  display: flex;
  align-items: center;
`

export const RightHeader = styled.div`
  display: flex;
  align-items: center;
`

export const CloseButton = styled.span`
  cursor: pointer;
  svg {
    color: ${props => props.theme.colors.headingColor};
    font-size: 24px;
  }
`

const ProductImageStyled = styled.div`
  background: #CCC;
  width: 200px;
  height: 200px;
  box-sizing: border-box;
  position: relative;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  object-fit: cover;
  background-position: center;
  border-radius: 8px;
  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.1));
`

export const ProductImage = (props) => {
  const style = {}
  style.backgroundImage = `url(${props.bgimage})`

  return (
    <ProductImageStyled {...props} style={style}>
      {props.children}
    </ProductImageStyled>
  )
}

export const ProductDetailsContent = styled.div`
  margin: 20px 0;
`

export const ProductPrice = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin: 30px 0 15px;
  color: ${props => props.theme.colors.headingColor};
`

export const ProductDescription = styled.p`
  color: ${props => props.theme.colors.headingColor};
  margin: 25px 0;
`

export const ProductConfigsContainer = styled.div`
  border: 1px solid #E9ECEF;
  border-radius: 8px;
  margin-bottom: 50px;
  > div:last-child {
    border-bottom: none;
  }
`

export const ProductConfigOption = styled.div`
  cursor: pointer;
  padding: 10px 15px;
  display: flex;
  justify-content: space-between;
  color: ${props => props.theme.colors.lightGray};
  border-bottom: 1px solid #E9ECEF;

  ${({ active }) => active && css`
    color: ${props => props.theme.colors.headingColor};
  `}
  
  svg {
    font-size: 20px;
  }
`
