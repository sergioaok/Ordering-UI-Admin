import styled, { css } from 'styled-components'

export const AddUserContainer = styled.div``

export const Title = styled.h2`
  font-size: 22px;
  margin-top: 0px;
`

export const InputForm = styled.form`
  display: flex;
  flex-direction: column;
  @media (min-width: 769px){
    flex-direction: row;
  }
`

export const UserImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;

  @media (min-width: 769px){
    width: 30%;
    align-items: flex-end;
  }
`

export const Image = styled.div`
  width: 150px;
  height: 150px;
  border: 2px solid #e8f0fe;
  border-radius: 20px;
  overflow: hidden;
  padding: 20px;
  background: ${({ isImage, theme }) => isImage ? '#FFF' : `${theme.colors.backgroundPage}`};
  cursor: -webkit-grab;
  cursor: grab;

  img,
  div {
    width: 100%;
    border-radius: 20px;
    height: 100%;
    border: none;
    overflow: hidden;
  };

  img{
    object-fit: cover;
  }

  @media (min-width: 480px){
    width: 200px;
    height: 200px;
  }

  @media (min-width: 768px){
    width: 150px;
    height: 150px;
  }
`

export const SideForm = styled.div`
  width: 100%;

  @media (min-width: 769px) {
    width: 70%;
    display: flex;
    align-items: center;
    margin: 30px 0px 0px 30px;
    ${props => props.theme?.rtl && css`
      margin: auto 30px auto 0px;
    `}
  }
`

export const Camera = styled.div`
  display: flex;
  justify-content: center;
  width:212px;
  > * {
    margin-top: 10px;
    width: 30px;
    height: 30px;
  }

  @media (min-width: 480px){
    width:242px;
  }

  @media (min-width: 768px){
    width:212px;
  }
`
export const UploadImageIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  span {
    margin: 0;
    text-align: center;
  }

  svg {
    width: 45px;
    height: 45px;
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

export const FormContainer = styled.div`
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
