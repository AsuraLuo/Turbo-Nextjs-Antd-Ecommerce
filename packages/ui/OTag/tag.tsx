import { FC } from 'react'
import { Tag, TagProps } from 'antd'

const OTag: FC<TagProps> = ({ children, ...props }) => {
  return <Tag {...props}>{children}</Tag>
}

export default OTag
