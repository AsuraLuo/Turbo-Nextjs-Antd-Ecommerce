import { FC } from 'react'
import { Descriptions, DescriptionsProps } from 'antd'

const ODescriptions: FC<DescriptionsProps> = ({ children, ...props }) => {
  return <Descriptions {...props}>{children}</Descriptions>
}

export default ODescriptions
