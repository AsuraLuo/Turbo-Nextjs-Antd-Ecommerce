import styled from '@emotion/styled'

import { IOperateButtonValueType } from './type'

interface StyledIOperateButtonProps extends Omit<IOperateButtonValueType, 'buttonText'> {}

export const StyledIOperateButton = styled.span<StyledIOperateButtonProps>`
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
