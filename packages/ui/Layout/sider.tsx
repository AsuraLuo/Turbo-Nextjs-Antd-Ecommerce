import { FC, ReactElement, ReactNode } from 'react'
import { Layout } from 'antd'

interface SiderProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactElement | ReactNode
}

const Sider: FC<SiderProps> = ({ children, ...props }) => {
  return <Layout.Sider {...props}>{children}</Layout.Sider>
}

export default Sider
