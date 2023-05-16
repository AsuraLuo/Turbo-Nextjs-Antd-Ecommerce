import { FC } from 'react'
import { Drawer } from 'antd'
import type { DrawerProps } from 'antd/es/drawer'

const ODrawer: FC<DrawerProps> = ({ children, ...props }) => {
  return <Drawer {...props}>{children}</Drawer>
}

export default ODrawer
