import { FC } from 'react'
import { Badge } from 'antd'
import type { BadgeProps } from 'antd/es/badge'

const OBadge: FC<BadgeProps> = ({ children, ...props }) => {
  return <Badge {...props}>{children}</Badge>
}

export default OBadge
