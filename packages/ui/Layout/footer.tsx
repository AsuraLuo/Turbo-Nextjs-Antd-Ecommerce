import { FC, ReactElement, ReactNode } from 'react'
import { Layout } from 'antd'

interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactElement | ReactNode
}

const Footer: FC<FooterProps> = ({ children, ...props }) => {
  return <Layout.Footer {...props}>{children}</Layout.Footer>
}

export default Footer
