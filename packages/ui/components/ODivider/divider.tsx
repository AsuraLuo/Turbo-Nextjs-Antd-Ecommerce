import { FC } from 'react'
import { Divider, DividerProps } from 'antd'

const ODivider: FC<DividerProps> = ({ children, ...props }) => {
  return <Divider {...props}>{children}</Divider>
}

export default ODivider
