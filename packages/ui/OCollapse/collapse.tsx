import { FC } from 'react'
import { Collapse as AntdCollapse, CollapseProps } from 'antd'

const InternalCollapse: FC<CollapseProps> = ({ children, ...props }) => {
  return <AntdCollapse {...props}>{children}</AntdCollapse>
}

export default InternalCollapse
