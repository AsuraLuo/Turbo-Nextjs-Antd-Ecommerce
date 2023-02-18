import { FC, ReactElement, ReactNode } from 'react'
import { Layout } from 'antd'

interface ContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactElement | ReactNode
}

const Content: FC<ContentProps> = ({ children, ...props }) => {
  return <Layout.Content {...props}>{children}</Layout.Content>
}

export default Content
