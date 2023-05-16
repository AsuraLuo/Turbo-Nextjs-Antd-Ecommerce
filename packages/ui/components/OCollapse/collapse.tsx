import { FC } from 'react'
import { Collapse } from 'antd'
import type { CollapseProps } from 'antd/es/collapse'

const InternalCollapse: FC<CollapseProps> = ({ children, ...props }) => {
  return <Collapse {...props}>{children}</Collapse>
}

export default InternalCollapse
