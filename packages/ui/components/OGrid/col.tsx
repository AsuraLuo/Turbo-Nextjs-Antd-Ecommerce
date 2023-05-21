import { FC } from 'react'
import { Col } from 'antd'
import type { ColProps } from 'antd/es/col'

export const OCol: FC<ColProps> = ({ children, ...props }) => {
  return <Col {...props}>{children}</Col>
}
