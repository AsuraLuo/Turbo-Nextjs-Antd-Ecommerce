import { FC } from 'react'
import type { InputProps } from 'antd/es/input'

import OInput from '../OInput'

interface IPassWordInputProps
  extends Omit<InputProps, 'type' | 'bordered' | 'size' | 'prefix' | 'suffix'> {}

const IPassWordInput: FC<IPassWordInputProps> = ({ ...props }) => {
  return <OInput.Password {...props} />
}

export default IPassWordInput
