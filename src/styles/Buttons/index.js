import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const Button = styled.button`
  background: #CCC;
  color: #151824;

  border: 1px solid #1C202E;
  border-radius: ${({ borderRadius }) => borderRadius || '40px'};
  line-height: 30px;
  padding: 5px 15px;
  font-size: 15px;
  cursor: pointer;
  outline: none;

  &:active {
    background: ${() => darken(0.07, '#CCC')};
  }

  ${({ withIcon }) => withIcon && css`
    display: flex;
    align-items: center;
    column-gap: 5px;
  `}

  ${({ color }) => color === 'primary' && css`
    background: ${props => props.theme.colors.btnPrimary};
    color: ${props => props.theme.colors.btnPrimaryContrast};
    border-color: ${props => props.theme.colors.btnPrimary};

    &:active {
      background: ${props => darken(0.07, props.theme.colors.btnPrimary)};
    }
  `}

  ${({ color }) => color === 'secondary' && css`
    background: ${props => props.theme.colors.btnSecondary};
    color: ${props => props.theme.colors.btnSecondaryContrast};
    border-color: ${props => props.theme.colors.btnSecondary};

    &:active {
      background: ${props => darken(0.07, props.theme.colors.btnSecondary)};
    }
  `}

  ${({ color }) => color === 'darkBlue' && css`
    background: ${props => props.theme.colors.btnDarkBlue};
    color: ${props => props.theme.colors.btnDarkBlueContrast};
    border-color: ${props => props.theme.colors.btnDarkBlue};

    &:active {
      background: ${props => darken(0.07, props.theme.colors.btnDarkBlue)};
    }
  `}

  ${({ color }) => color === 'offline' && css`
    background: ${props => props.theme.colors.offline};
    color: #fff;
    border-color: ${props => props.theme.colors.offline};

    &:active {
      background: ${props => darken(0.07, props.theme.colors.offline)};
    }
  `}

  ${({ color }) => color === 'modalAccept' && css`
    background: #182964;
    color: #FFFFFF;
    font-size: 16px;
    padding: 15px 0;
    margin-top: 30px;
    
    &:active {
      background: ${props => darken(0.07, '#182964')};
    }
  `}


  ${({ outline }) => outline && css`
    background: #FFF;
    color: #151824;
    border-color: #CCC;

    &:active {
      background: ${darken(0.07, '#FFF')};
    }
  `}

  ${({ circle }) => circle && css`
  background: #CCC;
  color: #FFF;
  border-color: #CCC;
  padding: 0;
  width: 34px;
  height: 34px;
  line-height: 34px;
  text-align: center;
  border-radius: 50%;

  &:active {
    color: #FFF;
    background: ${darken(0.07, '#CCC')};
  }
`}

${({ circle, outline }) => circle && outline && css`
  background: #FFF;
  color: #CCC;
  border-color: #CCC;
  padding: 0;
  width: 34px;
  height: 34px;
  line-height: 34px;
  text-align: center;
  border-radius: 50%;

  ${({ active }) => active && css`
    background-color: #000;
  `}

  &:active {
    color: #FFF;
    background: ${darken(0.07, '#CCC')};
  }
`}
`

export const RectButton = styled(Button)`
  border-radius: 5px;

  ${({ outline }) => outline && css`
  background: #FFF;
  color: ${props => props.theme.colors.btnDarkBlue};
  border-color: ${props => props.theme.colors.btnDarkBlue};

  &:active {
    background: ${darken(0.07, '#FFF')};
  }
`}
`
