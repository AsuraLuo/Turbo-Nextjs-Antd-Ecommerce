import { FC } from 'react'
import { Breadcrumb, BreadcrumbProps } from 'antd'

const OBreadcrumb: FC<BreadcrumbProps> = ({ children, ...props }) => {
  return <Breadcrumb {...props}>{children}</Breadcrumb>
}

export default OBreadcrumb
