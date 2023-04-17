import { FC } from 'react'
import { Col, ColProps } from 'antd'

export const OCol: FC<ColProps> = ({ children, ...props }) => {
  return <Col {...props}>{children}</Col>
}
