import { FC } from 'react'
import { Button } from 'antd'
import type { ButtonProps } from 'antd/es/button'

const OButton: FC<ButtonProps> = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>
}

export default OButton
