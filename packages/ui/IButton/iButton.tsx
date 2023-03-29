import { Button, ButtonProps } from 'antd'
import { FC } from 'react'

import { IButtonConfig, IButtonType, IButtonValueType } from './declare'

import { StyledIButton } from './styled'

interface IButtonProps extends Omit<ButtonProps, 'type'> {
  type?: IButtonType
}

const IButton: FC<IButtonProps> = ({ type = 'query', ...props }) => {
  const buttonValue: IButtonValueType = IButtonConfig[type]

  return (
    <StyledIButton
      buttonColor={buttonValue.buttonColor}
      buttonFontSize={buttonValue.buttonFontSize}
      buttonBackground={buttonValue.buttonBackground}
    >
      <Button type="default" {...props}>
        {buttonValue.buttonText}
      </Button>
    </StyledIButton>
  )
}

export default IButton
