import { FC } from 'react'
import { Empty as AntdEmpty, EmptyProps } from 'antd'

const Empty: FC<EmptyProps> = ({ children, ...props }) => {
  return <AntdEmpty {...props}>{children}</AntdEmpty>
}

export default Empty
