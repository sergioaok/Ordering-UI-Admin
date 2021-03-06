import React from 'react'
import styled, { css } from 'styled-components'

export const UsersConatiner = styled.div`
`

export const UserTableWrapper = styled.div`
  max-height: calc(100vh - 380px);
  overflow: auto;

  @media (min-width: 768px) {
    max-height: calc(100vh - 280px);
  }
`

export const UsersTable = styled.table`
  width: calc(100% - 10px);
  min-width: 900px;
  color: ${props => props.theme.colors?.headingColor};

  td, th {
    padding: 10px 0;
    &:first-child {
      width: 30%;
    }
    &:nth-child(2) {
      width: 20%;
    }

    &:nth-child(4),
    &:nth-child(5) {
      width: 10%;
    }
  }

  thead {
    tr {
      th {
        position: sticky;
        top: 0px;
        z-index: 100;
        background: #FFF;
        border-bottom: 1px solid #B1BCCC;
      }
    }
  }

  tbody {
    border-bottom: 1px solid #E9ECEF;
    cursor: pointer;
  }
`

export const WrapperImage = styled.div`
  max-width: 45px;
  max-height: 45px;
  height: 45px;
  width: 45px;
  ${({ isSkeleton }) => !isSkeleton && css`
    border: 1px solid #E3E3E3;
  `}
  border-radius: 10px;

  svg {
    width: 100%;
    height: 100%;
    padding: 7px;
    box-sizing: border-box;
    border-radius: 50%;
  }

  ${props => props.theme?.rtl ? css`
    margin-left: 10px;
  ` : css`
    margin-right: 10px;
  `}
`

const ImageStyled = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  object-fit: cover;
  background-position: center;
  border-radius: 10px;
`
export const Image = (props) => {
  return (
    <ImageStyled
      {...props}
      style={{ backgroundImage: `url(${props.bgimage})` }}
    >
      {props.children}
    </ImageStyled>
  )
}

export const UserMainInfo = styled.div`
  display: flex;
  align-items: center;
`

export const CheckBoxWrapper = styled.div`
  cursor: pointer;
  ${props => props.theme?.rtl ? css`
    margin-left: 10px;
  ` : css`
    margin-right: 10px;
  `}
  svg {
    font-size: 24px;
    color: ${props => props.theme.colors?.headingColor};

    ${({ isChecked }) => isChecked && css`
      color: ${props => props.theme.colors?.primary};
    `}
  }
`

export const InfoBlock = styled.div`
  p {
    margin: 5px 0 0 0;
    font-size: 12px;
  }
  p.bold {
    margin: 0px;
    font-size: 14px;
    font-weight: 600;
  }
`
export const UserTypeWrapper = styled.div`
  width: fit-content;
  > div {
    display: flex;

    .select {
      border: none;
      padding: 0px;

      > div {
        padding: 0px;
      }
    }

    .list {
      .options {
        border: 1px solid #E9ECEF;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
        border-radius: 8px;
      }
    }
  }
  p {
    margin: 5px 0 0 0;
    font-size: 12px;
  }
`

export const UserEnableWrapper = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;

  span {
    font-size: 14px;

    ${props => props.theme?.rtl ? css`
      padding-left: 10px;
    ` : css`
      padding-right: 10px;
    `}
  }
`
export const WrapperPagination = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`
export const PageButton = styled.button`
  outline: none;
  border: 1px solid #00000029;
  border-radius: 100%;
  background: transparent;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 0 5px;

  &:active {
    background: #1c202e;
    color: #fff;
  }
  &:disabled {
    cursor: no-drop;
    pointer-events: none;
  }
`
export const WrapperPageState = styled.div`
  display: flex;
  min-width: 140px;
`

export const WrapperUserActionSelector = styled.div`
`
