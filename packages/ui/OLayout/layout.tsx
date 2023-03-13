import { FC } from 'react'
import { Layout as AntdLayout, LayoutProps } from 'antd'

const Layout: FC<LayoutProps> = ({ children, ...props }) => {
  return <AntdLayout {...props}>{children}</AntdLayout>
}

export default Layout
