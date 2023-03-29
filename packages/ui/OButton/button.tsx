import { Button, ButtonProps } from 'antd'
import { FC } from 'react'

const OButton: FC<ButtonProps> = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>
}

export default OButton
