import styled from '@emotion/styled'

import { IButtonValueType } from './declare'

interface StyledIButtonProps extends Omit<IButtonValueType, 'buttonText'> {}

export const StyledIButton = styled.span<StyledIButtonProps>`
  button {
    font-size: ${({ buttonFontSize }) => `${buttonFontSize}px`};
    color: ${({ buttonColor }) => buttonColor};
    background-color: ${({ buttonBackground }) => buttonBackground};
  }
`
