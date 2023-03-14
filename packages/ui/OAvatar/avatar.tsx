import { FC } from 'react'
import { Avatar, AvatarProps } from 'antd'

const OAvatar: FC<AvatarProps> = ({ children, ...props }) => {
  return <Avatar {...props}>{children}</Avatar>
}

export default OAvatar
