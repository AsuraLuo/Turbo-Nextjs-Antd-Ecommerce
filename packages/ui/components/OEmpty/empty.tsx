import { FC } from 'react'
import { Empty } from 'antd'
import type { EmptyProps } from 'antd/es/empty'

const OEmpty: FC<EmptyProps> = ({ children, ...props }) => {
  return <Empty {...props}>{children}</Empty>
}

export default OEmpty
