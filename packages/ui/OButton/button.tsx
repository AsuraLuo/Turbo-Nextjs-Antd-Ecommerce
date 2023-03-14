import { FC } from 'react'
import { Button, ButtonProps } from 'antd'

const OButton: FC<ButtonProps> = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>
}

export default OButton
