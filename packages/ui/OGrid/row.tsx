import { FC } from 'react'
import { Row, RowProps } from 'antd'

export const ORow: FC<RowProps> = ({ children, ...props }) => {
  return <Row {...props}>{children}</Row>
}
