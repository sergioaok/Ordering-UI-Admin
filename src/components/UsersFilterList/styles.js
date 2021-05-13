import styled from 'styled-components'

export const UserFilterListContainer = styled.div``

export const InputForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  flex-wrap: wrap;
  @media (min-width: 769px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

export const Title = styled.h2`
  font-size: 22px;
  margin-top: 0px;
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;

  @media (min-width: 768px) {
    width: 49%;
  }

  input {
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 20px;
  }

  .rectangle-select > div:first-child {
    padding: 7px 15px;
    font-size: 13px;
    height: 26px;
  }
`

export const Label = styled.label`
  text-transform: capitalize;
  font-weight: bold;
`

export const ActionButtons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  button:first-child {
    margin: 0px 20px;
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
