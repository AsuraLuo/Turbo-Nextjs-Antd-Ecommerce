import { FC } from 'react'
import { Collapse, CollapseProps } from 'antd'

const InternalCollapse: FC<CollapseProps> = ({ children, ...props }) => {
  return <Collapse {...props}>{children}</Collapse>
}

export default InternalCollapse
