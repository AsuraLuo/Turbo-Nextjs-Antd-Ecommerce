import { Button, ButtonProps } from 'antd'
import { FC } from 'react'

import { IOperateButtonConfig, IOperateButtonBreakConfig } from './config'
import { IOperateButtonType, IOperateButtonValueType } from './type'

import { StyledIOperateButton } from './styled'

type ExcludeType = 'className' | 'style' | 'block' | 'danger' | 'ghost' | 'href' | 'type'

export interface IOperateButtonProps extends Omit<ButtonProps, ExcludeType> {
  type?: IOperateButtonType
}

const IOperateButton: FC<IOperateButtonProps> = ({ type = 'query', ...props }) => {
  const buttonValue: IOperateButtonValueType =
    IOperateButtonConfig?.[type] || IOperateButtonBreakConfig.badcode

  return (
    <StyledIOperateButton
      buttonColor={buttonValue.buttonColor}
      buttonFontSize={buttonValue.buttonFontSize}
      buttonBorderColor={buttonValue.buttonBorderColor}
      buttonBackground={buttonValue.buttonBackground}
    >
      <Button type="default" {...props}>
        {buttonValue.buttonText}
      </Button>
    </StyledIOperateButton>
  )
}

export default IOperateButton
