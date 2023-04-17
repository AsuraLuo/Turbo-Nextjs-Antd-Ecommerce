import { FC } from 'react'
import { Input, InputProps } from 'antd'

const OInput: FC<InputProps> = ({ children, ...props }) => {
  return <Input {...props}>{children}</Input>
}

export default OInput
