import { FC } from 'react'
import { Menu } from 'antd'
import type { MenuProps } from 'antd/es/menu'

const OMenu: FC<MenuProps> = ({ children, ...props }) => {
  return <Menu {...props}>{children}</Menu>
}

export default OMenu
