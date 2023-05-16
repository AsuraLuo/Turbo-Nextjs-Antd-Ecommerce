import { FC } from 'react'
import { Space } from 'antd'
import type { SpaceProps } from 'antd/es/space'

const OSpace: FC<SpaceProps> = ({ children, ...props }) => {
  return <Space {...props}>{children}</Space>
}

export default OSpace
