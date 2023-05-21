import { FC } from 'react'
import { Input } from 'antd'
import type { InputProps } from 'antd/es/input'

const OInput: FC<InputProps> = ({ children, ...props }) => {
  return <Input {...props}>{children}</Input>
}

export default OInput
