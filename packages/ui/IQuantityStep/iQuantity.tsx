import { FC } from 'react'

import type { ButtonProps } from 'antd/es/button'
import type { InputProps } from 'antd/es/input'

import OButton from '../OButton'
import OInput from '../OInput'
import { StyledIQuantity } from './styled'

interface IQuantityProps {
  buttonProps?: ButtonProps
  inputProps?: InputProps
}

const IQuantity: FC<IQuantityProps> = ({ buttonProps, inputProps, ...props }) => {
  return (
    <StyledIQuantity>
      <OButton {...buttonProps}>-</OButton>
      <OInput {...inputProps} {...props} />
      <OButton {...buttonProps}>+</OButton>
    </StyledIQuantity>
  )
}

export default IQuantity
