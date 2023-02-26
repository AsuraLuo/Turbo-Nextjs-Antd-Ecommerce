import { FC } from 'react'
import { Badge as AntdBadge, BadgeProps } from 'antd'

const Badge: FC<BadgeProps> = ({ children, ...props }) => {
  return <AntdBadge {...props}>{children}</AntdBadge>
}

export default Badge
