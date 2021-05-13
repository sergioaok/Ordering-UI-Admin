import styled, { css } from 'styled-components'

export const FormInput = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  div.phone_number {
    margin-bottom: 20px;
    width: 100%;
  }
  input.form {
    color: black;
    padding: 10px 15px;
    width: 100%;
    margin-bottom: 20px;
    box-sizing: border-box;
    &:disabled {
      background-color: rgba(239, 239, 239, 0.3);
      cursor: not-allowed;
    }
  }
  button {
    width: 100%;
    padding: 7px 0;
  }
  @media (min-width: 769px) {
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    input.form {
      width: 49%;
    }
    ${({ isCheckout }) => isCheckout && css`
      div.phone_number  {
        width: 49%;
      }
    `}
  }
`

export const ActionsForm = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  button {
    padding: 7px 0px;
    width: 40%;
    box-sizing: border-box;

    &:disabled {
      cursor: not-allowed;
    }
    margin-left: 10px;
  }

  ${props => props.theme?.rtl && css`
    button {
      &:nth-child(1) {
        margin-right: 0px;
      }
      &:last-child {
        margin-right: 5px;
      }
    }
  `}
`

export const SkeletonForm = styled.div`
  width: 100%;
  justify-content: center;
  height: auto;
  display: inline-flex;
  flex-wrap: wrap;
  padding: 0;
  margin-top: 0px;
  > * {
    width: 100%;
    margin: 10px 0;
    display: inline;
    height: 50px;
    span{
      border-radius: 16px;
      width: 100%;
      height: 100%;
    }
  }
  @media (min-width: 768px){
    justify-content: flex-start;
    > * {
      width: calc(50% - 10px);
      margin: 5px;
    }
  }
`
export const Label = styled.label`
  text-transform: capitalize;
  font-weight: bold;
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  input {
    border-radius: 5px !important;
  }

  .PhoneInputCountry {
    border: 1px solid #707070;
    border-radius: 5px;
    padding: 5px 15px;
  }

  input[type=tel] {
    border: 1px solid #707070 !important;
  }
  @media (min-width: 769px) {
    width: 49%;
    input {
      width: 100% !important;
    }
  }
`

export const Option = styled.div`
    display: flex;
    align-items: center;
    column-gap: 10px;
    font-size: 13px;
    line-height: 2;
    font-weight: 500;
`
