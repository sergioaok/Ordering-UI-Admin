import styled, { css } from 'styled-components'

export const BusinessActionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 25px;
`

export const SingleListBusinessContainer = styled.tbody`
  border-bottom: 1px solid #E9ECEF;
  cursor: pointer;
  transition: all 0.3s;
  .business {
    padding-right: 20px;
  }

  &:hover {
    background: #E9F2FE;
    input, textarea {
      background: #E9F2FE;
    }
  }
`

export const BusinessGeneralInfo = styled.div`
  display: flex;
  align-items: center;
  ${props => props.theme?.rtl ? css`
  border-left: 1px solid #E9ECEF;
` : css`
  border-right: 1px solid #E9ECEF;
`}
  p {
    margin: 0;
  }

  input {
    font-weight: 500;
    font-size: 13px;
    color: ${props => props.theme.colors.headingColor};
    border: 1px solid transparent;
    outline: none;
    transition: all 0.3s;
    border-radius: 3px;
    padding: 5px;
  }

  &:hover {
    input {
      border: 1px solid ${props => props.theme.colors.lightGray};
      background: white;
    }
  }
`
export const WrapperImage = styled.div`
  max-width: 38px;
  max-height: 38px;
  min-width: 38px;
  height: 38px;
  width: 38px;
  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.1));
  border-radius: 10px;
  ${props => props.theme?.rtl ? css`
    margin-left: 10px;
  ` : css`
    margin-right: 10px;
  `}
`

export const InfoBlock = styled.div`
  input, textarea {
    font-weight: 500;
    font-size: 13px;
    color: ${props => props.theme.colors.headingColor};
    border: 1px solid transparent;
    outline: none;
    transition: all 0.3s;
    border-radius: 3px;
    padding: 5px;

    &.description {
      font-size: 12px;
      color: ${props => props.theme.colors.lightGray};
      resize: none;
      width: 100%;
    }
  }

  &:hover {
    > input, textarea {
      border: 1px solid ${props => props.theme.colors.lightGray};
      background: white;
    }
  }
`

export const BusinessEnableWrapper = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  span {
    font-size: 13px;
    ${props => props.theme?.rtl ? css`
      padding-left: 10px;
    ` : css`
      padding-right: 10px;
    `}
  }
`

export const ActionSelectorWrapper = styled.div`
  ${props => props.theme?.rtl ? css`
    margin-right: 35px;
    ` : css`
    margin-left: 35px;
  `}
  button {
    background: #F8F9FA !important;
    border: none;
    padding: 0px;
    svg {
      color: ${props => props.theme.colors.headingColor};
    }
    &:after {
      display: none;
    }
  }
  > div {
    border: 1px solid #E9ECEF;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
    border-radius: 8px;
    > div {
      a:last-child {
        color: #E63757;
      }
    }
  }
`

export const ProductTypeImage = styled.div`
  min-height: 38px;
  min-width: 38px;
  height: 38px;
  width: 38px;
  border-radius: 8px;
  overflow: hidden;
  cursor: -webkit-grab;
  cursor: grab;
  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.1));

  ${props => props.theme?.rtl ? css`
  maring-left: 10px;
  ` : css`
    margin-right: 10px;
  `}

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

export const UploadWrapper = styled.div`
  border-radius: 5px;
  background: #E9ECEF;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    color: #ADB5BD;
    font-size: 24px;
  }
`
