import { FC } from 'react'
import { Tag } from 'antd'
import type { TagProps } from 'antd/es/tag'

const OTag: FC<TagProps> = ({ children, ...props }) => {
  return <Tag {...props}>{children}</Tag>
}

export default OTag
