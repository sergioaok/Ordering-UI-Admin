import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 0;
  position: fixed;
  box-shadow: -4px 0px 7px #ccc;

  ${({ isDriverOrders }) => isDriverOrders && css`
    position: absolute;
    box-shadow: none;

    ${props => props.theme?.rtl ? css`
      border-right: 1px solid #CCC;
    ` : css`
      border-left: 1px solid #CCC;
    `}
  `}
  background: #FFF;
  height: 100vh;
  top: 0px;
  z-index: 1001;
  overflow-x: hidden;
  transition: 0.3s;

  ${props => props.theme?.rtl ? css`
    left: 0px;
    ` : css`
    right: 0px;
  `}
  @media print {
    box-shadow: none;
  }
`

export const SkeletonWrapper = styled.div`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  flex-direction: column;
  > span {
    width: 100%;
  }
`

export const CategoryForm = styled.form`
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
  overflow-x: hidden;
`

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    background: transparent;
    border: none;

    svg {
      color: ${props => props.theme.colors?.headingColor};
      font-size: 16px;
    }
  }
`

export const BusinessEnableWrapper = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;

  span {
    font-weight: bold;
    font-size: 20px;

    ${props => props.theme?.rtl ? css`
      padding-left: 20px;
    ` : css`
      padding-right: 20px;
    `}
  }
`

export const CategoryTypeImage = styled.div`
  margin-top: 48px;
  height: 240px;
  width: 240px;
  border-radius: 8px;
  overflow: hidden;
  cursor: -webkit-grab;
  cursor: grab;
  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.1));

  ${({ disabled }) => disabled && css`
    pointer-events: none;
  `}
  img,
  div {
    width: 100%;
    border-radius: 8px;
    height: 100%;
    overflow: hidden;
  };

  img{
    object-fit: cover;
  }
`

export const BtnWrapper = styled.div`
  position: absolute;
  bottom: 50px;

  button {
    background: ${props => props.theme.colors.primary};
    border-radius: 8px;
    font-size: 14px;
  }
`

export const UploadImageIconContainer = styled.div`
  position: absolute;
  top: 0px;
  background: rgba(0,0,0,0.2);
`

export const UploadImageIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #FFF;
  span {
    margin: 0;
  }

  svg {
    width: 25px;
    height: 25px;
  }
`

export const CategoryNameWrapper = styled.div`
  margin-top: 50px;

  label {
    width: 100%;
    font-size: 14px;
    color: ${props => props.theme.colors.headingColor};
  }

  input {
    margin-top: 10px;
    font-size: 14px;
    width: 100%;
  }
`
