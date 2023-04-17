import { FC } from 'react'
import { Badge, BadgeProps } from 'antd'

const OBadge: FC<BadgeProps> = ({ children, ...props }) => {
  return <Badge {...props}>{children}</Badge>
}

export default OBadge
