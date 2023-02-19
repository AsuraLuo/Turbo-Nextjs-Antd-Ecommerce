import { FC } from 'react'
import { Layout, SiderProps } from 'antd'

const Sider: FC<SiderProps> = ({ children, ...props }) => {
  return <Layout.Sider {...props}>{children}</Layout.Sider>
}

export default Sider
