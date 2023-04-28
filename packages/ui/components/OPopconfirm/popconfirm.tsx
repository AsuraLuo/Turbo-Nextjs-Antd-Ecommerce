import { FC } from 'react'
import { Popconfirm, PopconfirmProps } from 'antd'

const OPopconfirm: FC<PopconfirmProps> = ({ children, ...props }) => {
  return <Popconfirm {...props}>{children}</Popconfirm>
}

export default OPopconfirm
