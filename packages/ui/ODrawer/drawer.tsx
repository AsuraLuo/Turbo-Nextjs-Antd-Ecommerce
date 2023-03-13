import { FC } from 'react'
import { Drawer as AntdDrawer, DrawerProps } from 'antd'

const Drawer: FC<DrawerProps> = ({ children, ...props }) => {
  return <AntdDrawer {...props}>{children}</AntdDrawer>
}

export default Drawer
