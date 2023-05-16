import { FC } from 'react'
import { Button } from 'antd'
import type { ButtonProps } from 'antd/es/button'

import { IButtonConfig, IButtonBreakConfig } from './config'
import { IButtonType, IButtonValueType } from './type'

import { StyledIButton } from './styled'

type ExcludeType = 'className' | 'style' | 'block' | 'danger' | 'ghost' | 'href' | 'type'

export interface IButtonProps extends Omit<ButtonProps, ExcludeType> {
  type?: IButtonType
}

const IButton: FC<IButtonProps> = ({ type = 'query', ...props }) => {
  const buttonValue: IButtonValueType = IButtonConfig?.[type] || IButtonBreakConfig.badcode

  return (
    <StyledIButton {...buttonValue}>
      <Button {...props} type="default">
        {buttonValue.buttonText}
      </Button>
    </StyledIButton>
  )
}

export default IButton
