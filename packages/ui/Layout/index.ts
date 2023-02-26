import { Layout as AntdLayout } from 'antd'

import InternalLayout from './layout'

const { Header, Footer, Content, Sider } = AntdLayout

type InternalLayoutType = typeof InternalLayout
type CompoundedComponent = InternalLayoutType & {
  Header: typeof Header
  Footer: typeof Footer
  Content: typeof Content
  Sider: typeof Sider
}

const Layout = InternalLayout as CompoundedComponent
Layout.Header = Header
Layout.Footer = Footer
Layout.Content = Content
Layout.Sider = Sider

export default Layout
