import { FC, ReactElement, ReactNode } from 'react'
import { Layout } from 'antd'

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactElement | ReactNode
}

const Header: FC<HeaderProps> = ({ children, ...props }) => {
  return <Layout.Header {...props}>{children}</Layout.Header>
}

export default Header
