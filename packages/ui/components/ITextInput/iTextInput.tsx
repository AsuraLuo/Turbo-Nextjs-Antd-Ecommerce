import { FC } from 'react'
import type { InputProps } from 'antd/es/input'

import OInput from '../OInput'

type ExcludeType = 'className' | 'style' | 'type' | 'bordered' | 'size' | 'prefix' | 'suffix'

interface ITextInputProps extends Omit<InputProps, ExcludeType> {
  type?: 'text' | 'url' | 'email' | 'hidden'
}

const ITextInput: FC<ITextInputProps> = ({ type, ...props }) => {
  return <OInput {...props} type={type} />
}

export default ITextInput
