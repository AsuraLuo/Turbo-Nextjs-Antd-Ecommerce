import { FC } from 'react'
import { Tag as AntdTag, TagProps } from 'antd'

const Tag: FC<TagProps> = ({ children, ...props }) => {
  return <AntdTag {...props}>{children}</AntdTag>
}

export default Tag
