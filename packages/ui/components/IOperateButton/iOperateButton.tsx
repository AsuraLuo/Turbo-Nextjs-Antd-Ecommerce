import { FC } from 'react'
import { Button } from 'antd'
import type { ButtonProps } from 'antd/es/button'

import { IOperateButtonConfig, IOperateButtonBreakConfig } from './config'
import { IOperateButtonType, IOperateButtonValueType } from './type'

import { StyledIOperateButton } from './styled'

type ExcludeType = 'className' | 'style' | 'block' | 'danger' | 'ghost' | 'href' | 'type'

export interface IOperateButtonProps extends Omit<ButtonProps, ExcludeType> {
  type?: IOperateButtonType
}

const IOperateButton: FC<IOperateButtonProps> = ({ type = 'add', ...props }) => {
  const buttonValue: IOperateButtonValueType =
    IOperateButtonConfig?.[type] || IOperateButtonBreakConfig.badcode

  return (
    <StyledIOperateButton
      buttonColor={buttonValue.buttonColor}
      buttonFontSize={buttonValue.buttonFontSize}
      buttonBorderColor={buttonValue.buttonBorderColor}
      buttonBackground={buttonValue.buttonBackground}
    >
      <Button {...props} type="default">
        {buttonValue.buttonText}
      </Button>
    </StyledIOperateButton>
  )
}

export default IOperateButton
