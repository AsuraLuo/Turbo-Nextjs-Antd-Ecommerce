import { FC } from 'react'
import { Empty, EmptyProps } from 'antd'

const OEmpty: FC<EmptyProps> = ({ children, ...props }) => {
  return <Empty {...props}>{children}</Empty>
}

export default OEmpty
