import { FC } from 'react'
import { Input as AntdInput, InputProps } from 'antd'

const Input: FC<InputProps> = ({ children, ...props }) => {
  return <AntdInput {...props}>{children}</AntdInput>
}

export default Input
