import { FC } from 'react'
import { Popconfirm } from 'antd'
import type { PopconfirmProps } from 'antd/es/popconfirm'

const OPopconfirm: FC<PopconfirmProps> = ({ children, ...props }) => {
  return <Popconfirm {...props}>{children}</Popconfirm>
}

export default OPopconfirm
