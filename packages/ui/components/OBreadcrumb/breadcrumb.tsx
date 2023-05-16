import { FC } from 'react'
import { Breadcrumb } from 'antd'
import type { BreadcrumbProps } from 'antd/es/breadcrumb'

const OBreadcrumb: FC<BreadcrumbProps> = ({ children, ...props }) => {
  return <Breadcrumb {...props}>{children}</Breadcrumb>
}

export default OBreadcrumb
