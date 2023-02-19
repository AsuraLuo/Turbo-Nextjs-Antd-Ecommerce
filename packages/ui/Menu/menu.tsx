import { FC } from 'react'
import { Menu as AntdMenu, MenuProps } from 'antd'

const Menu: FC<MenuProps> = ({ children, ...props }) => {
  return <AntdMenu {...props}>{children}</AntdMenu>
}

export default Menu
