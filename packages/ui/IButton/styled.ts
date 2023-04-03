import styled from '@emotion/styled'

import { IButtonValueType } from './type'

interface StyledIButtonProps extends Omit<IButtonValueType, 'buttonText'> {}

export const StyledIButton = styled.span<StyledIButtonProps>`
  button {
    font-size: ${({ buttonFontSize }) => `${buttonFontSize}px`};
    color: ${({ buttonColor }) => buttonColor};
    background-color: ${({ buttonBackground }) => buttonBackground};
    border-color: ${({ buttonBorderColor }) => buttonBorderColor};
    transition: all 0.3s ease-in;

    &:not(:disabled):hover {
      color: ${({ buttonColor }) => buttonColor};
      border-color: ${({ buttonBorderColor }) => buttonBorderColor};
      opacity: 0.85;
    }
  }
`
