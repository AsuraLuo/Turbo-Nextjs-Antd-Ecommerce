import { FC } from 'react'
import { Avatar } from 'antd'
import type { AvatarProps } from 'antd/es/avatar'

const OAvatar: FC<AvatarProps> = ({ children, ...props }) => {
  return <Avatar {...props}>{children}</Avatar>
}

export default OAvatar
