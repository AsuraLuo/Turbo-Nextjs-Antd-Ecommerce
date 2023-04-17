import { FC } from 'react'
import { Space, SpaceProps } from 'antd'

const OSpace: FC<SpaceProps> = ({ children, ...props }) => {
  return <Space {...props}>{children}</Space>
}

export default OSpace
