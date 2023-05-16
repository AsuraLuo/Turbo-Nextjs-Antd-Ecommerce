import { FC } from 'react'
import { Divider } from 'antd'
import type { DividerProps } from 'antd/es/divider'

const ODivider: FC<DividerProps> = ({ children, ...props }) => {
  return <Divider {...props}>{children}</Divider>
}

export default ODivider
