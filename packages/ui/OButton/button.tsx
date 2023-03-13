import { FC } from 'react'
import { Button as AntdButton, ButtonProps } from 'antd'

const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return <AntdButton {...props}>{children}</AntdButton>
}

export default Button
