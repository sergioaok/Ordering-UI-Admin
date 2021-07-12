import styled, { css } from 'styled-components'

export const SingleCategoryContainer = styled.form`
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 7.5px;
  margin-bottom: 15px;
  transition: all 0.3s;
  cursor: pointer;
  height: 70px;

  &:hover {
    background: #E9F2FE;

    input {
      border: 1px solid ${props => props.theme.colors.lightGray};
    }
  }

  ${({ active }) => active && css`
  border: 1px solid #2C7BE5;
  box-sizing: border-box;
  `}

  ${({ addMode }) => addMode && css`
  border: 1px dashed ${props => props.theme.colors.lightGray};
  `}

  .img-section {
    min-width: 41px !important;
    min-height: 41px !important;
  }
`

export const CategoryContent = styled.div`
  flex-grow: 1;
  color: ${props => props.theme.colors.headingColor};
  ${props => props.theme?.rtl ? css`
      padding-right: 13px;
    ` : css`
      padding-left: 13px;
    `}
  input {
    width: 100%;
    outline: none;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 12px;
    border-radius: 3px;
    transition: all 0.3s;
    border: 1px solid transparent;
    padding: 5px;
  }
`

export const CategoryActionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`

export const CategoryEnableWrapper = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;

  span {
    font-size: 14px;
    color: ${props => props.theme.colors.headingColor};
    font-size: 12px;
    margin: 0px;
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
