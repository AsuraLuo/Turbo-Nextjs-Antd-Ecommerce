import { FC } from 'react'
import { Divider as AntdDivider, DividerProps } from 'antd'

const Divider: FC<DividerProps> = ({ children, ...props }) => {
  return <AntdDivider {...props}>{children}</AntdDivider>
}

export default Divider
