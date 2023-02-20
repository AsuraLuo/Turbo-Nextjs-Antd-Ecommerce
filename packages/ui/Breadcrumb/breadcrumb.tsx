import { FC } from 'react'
import { Breadcrumb as AntdBreadcrumb, BreadcrumbProps } from 'antd'

const Breadcrumb: FC<BreadcrumbProps> = ({ children, ...props }) => {
  return <AntdBreadcrumb {...props}>{children}</AntdBreadcrumb>
}

export default Breadcrumb
