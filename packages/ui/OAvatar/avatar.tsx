import { FC } from 'react'
import { Avatar as AntdAvatar, AvatarProps } from 'antd'

const Avatar: FC<AvatarProps> = ({ children, ...props }) => {
  return <AntdAvatar {...props}>{children}</AntdAvatar>
}

export default Avatar
