import { FC } from 'react'
import type { InputProps } from 'antd/es/input'

import OInput from '../OInput'

interface ITextInputProps
  extends Omit<InputProps, 'type' | 'bordered' | 'size' | 'prefix' | 'suffix'> {
  type?: 'text' | 'url' | 'email' | 'hidden'
}

const ITextInput: FC<ITextInputProps> = ({ type, ...props }) => {
  return <OInput type={type} {...props} />
}

export default ITextInput
