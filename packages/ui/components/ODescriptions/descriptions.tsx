import { FC } from 'react'
import { Descriptions } from 'antd'
import type { DescriptionsProps } from 'antd/es/descriptions'

const ODescriptions: FC<DescriptionsProps> = ({ children, ...props }) => {
  return <Descriptions {...props}>{children}</Descriptions>
}

export default ODescriptions
