import { FC } from 'react'
import { Layout, LayoutProps } from 'antd'

const OLayout: FC<LayoutProps> = ({ children, ...props }) => {
  return <Layout {...props}>{children}</Layout>
}

export default OLayout
