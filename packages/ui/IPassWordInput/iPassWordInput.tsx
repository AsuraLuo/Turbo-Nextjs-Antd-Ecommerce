import { FC } from 'react'
import type { InputProps } from 'antd/es/input'

import OInput from '../OInput'

type ExcludeType =
  | 'className'
  | 'style'
  | 'type'
  | 'bordered'
  | 'size'
  | 'prefix'
  | 'suffix'
  | 'visibilityToggle'

interface IPassWordInputProps extends Omit<InputProps, ExcludeType> {
  showEye?: boolean
}

const IPassWordInput: FC<IPassWordInputProps> = ({ showEye = true, ...props }) => {
  return <OInput.Password visibilityToggle={showEye} {...props} />
}

export default IPassWordInput
