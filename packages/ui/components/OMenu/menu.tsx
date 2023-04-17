import { FC } from 'react'
import { Menu, MenuProps } from 'antd'

const OMenu: FC<MenuProps> = ({ children, ...props }) => {
  return <Menu {...props}>{children}</Menu>
}

export default OMenu
