import styled, { css } from 'styled-components'

export const BusinessMenuBasicContainer = styled.div`
  display: flex;
  flex-direction: column;
  > button {
    height: 40px;
    margin-top: 50px;
  }
`

export const FieldName = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: ${props => props.theme.colors.headingColor};
  padding: 30px 0 10px;
  margin: 0;
  ${({ isBorderBottom }) => isBorderBottom && css`
    border-bottom: 1px solid #E9ECEF;
  `}
`

export const OrderType = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #E9ECEF;

  svg {
    font-size: 20px;
    color: ${({ theme, active }) => active ? theme.colors.primary : theme.colors.lightGray};
  }

  span {
    color: ${props => props.theme.colors.headingColor};
    ${props => props.theme?.rtl ? css`
      margin-right: 10px;
    ` : css`
      margin-left: 10px;
    `}
  }
`
export const CategoryProductsContainer = styled.div`
  border-bottom: 1px solid #E9ECEF;
`

export const BusinessCategoryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  > svg {
    transition: transform 0.6s ease;
    color: #212121;
    cursor: pointer;
  }
  ${({ active }) => active && css`
    > svg {
      transform: rotate(180deg);
    }
  `}
`

export const CheckboxContainer = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;

  span {
    color: ${props => props.theme.colors.headingColor};
    ${props => props.theme?.rtl ? css`
      margin-right: 10px;
    ` : css`
      margin-left: 10px;
    `}
  }
  span.bold {
    font-weight: 600;
  }
`

export const ScheduleCheckboxContainer = styled.div`
  display: flex;
  width: 20%;
  margin-top: 10px;

  h4 {
    color: ${props => props.theme.colors.headingColor};
    font-size: 18px;
    font-weight: 600;
    ${props => props.theme?.rtl ? css`
      margin: 0 10px 0 0;
    ` : css`
      margin: 0 0 0 10px;
    `}
  }
`

export const CheckBoxWrapper = styled.span`
  cursor: pointer;
  
  svg {
    color: ${props => props.theme.colors.lightGray};
    ${({ active }) => active && css`
      color: ${props => props.theme.colors.primary};
    `}
    font-size: 20px;
  }
`

export const ProductContainer = styled.div`
  padding: 7px 0;
  ${props => props.theme?.rtl ? css`
    margin: 0 20px 0 0;
  ` : css`
    margin: 0 0 0 20px;
  `}
`

export const ScheduleContainer = styled.div`
`

export const ScheduleSection = styled.div`
  border-top: 1px solid #E9ECEF;
  margin-top: 30px;
`

export const ScheduleBlock = styled.div`
  display: flex;
  padding: 15px 0;
  border-bottom: 1px solid #E9ECEF;
`

export const TimeSectionContainer = styled.div`
  flex: 1;
  text-align: center;
  > p {
    margin-top: 10px;
    margin-bottom: 0px;
    color: ${props => props.theme.colors.lightGray};
  }
  > div:not(:last-child) {
    margin-bottom: 10px;
  }
`

export const TimeSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 5px;
  color: ${props => props.theme.colors.lightGray};
`

export const TimeSelect = styled.select`
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  -moz-appearance: none;
  -webkit-appearance: none;
  -ms-progress-appearance: none;
  color: ${props => props.theme.colors.lightGray};
`

export const TimeSelectContainer = styled.div`
  border: 1px solid ${props => props.theme.colors.lightGray};
  border-radius: 7px;
  padding: 5px 15px;
`

export const DeleteButton = styled.div`
  ${({ disabled }) => disabled ? css`
    pointer-events: none;
    opacity: 0.6;
  ` : css`
    cursor: pointer;
  `}
  ${props => props.theme?.rtl ? css`
    margin-right: 15px;
  ` : css`
    margin-left: 15px;
  `}
  svg {
    color: ${props => props.theme.colors.headingColor};
  }
`

export const AddButton = styled.div`
  ${({ disabled }) => disabled ? css`
    pointer-events: none;
    opacity: 0.6;
  ` : css`
    cursor: pointer;
  `}
  ${props => props.theme?.rtl ? css`
    margin-right: 15px;
  ` : css`
    margin-left: 15px;
  `}
  svg {
    color: ${props => props.theme.colors.primary};
    font-size: 20px;
  }
`

export const ScheduleActionBlock = styled.div`
  display: flex;
  margin-top: 10px;
`

export const AddScheduleButton = styled.div`
  ${({ disabled }) => disabled ? css`
    pointer-events: none;
    opacity: 0.6;
  ` : css`
    cursor: pointer;
  `}
  ${props => props.theme?.rtl ? css`
    margin-left: 5px;
  ` : css`
    margin-right: 5px;
  `}

  svg {
    color: ${props => props.theme.colors.primary};
  }
`
