import { FC } from 'react'
import { Drawer, DrawerProps } from 'antd'

const ODrawer: FC<DrawerProps> = ({ children, ...props }) => {
  return <Drawer {...props}>{children}</Drawer>
}

export default ODrawer
