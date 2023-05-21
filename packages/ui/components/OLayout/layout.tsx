import { FC } from 'react'
import { Layout } from 'antd'
import type { LayoutProps } from 'antd/es/layout'

const OLayout: FC<LayoutProps> = ({ children, ...props }) => {
  return <Layout {...props}>{children}</Layout>
}

export default OLayout
