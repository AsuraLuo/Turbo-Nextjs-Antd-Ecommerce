import { FC } from 'react'
import { Descriptions as AntdDescriptions, DescriptionsProps } from 'antd'

const Descriptions: FC<DescriptionsProps> = ({ children, ...props }) => {
  return <AntdDescriptions {...props}>{children}</AntdDescriptions>
}

export default Descriptions
