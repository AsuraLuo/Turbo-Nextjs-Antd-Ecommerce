import { FC } from 'react'
import { Row } from 'antd'
import type { RowProps } from 'antd/es/row'

export const ORow: FC<RowProps> = ({ children, ...props }) => {
  return <Row {...props}>{children}</Row>
}
