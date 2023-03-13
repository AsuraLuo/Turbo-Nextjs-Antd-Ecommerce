import { FC } from 'react'
import { Row as AntdRow, RowProps } from 'antd'

export const Row: FC<RowProps> = ({ children, ...props }) => {
  return <AntdRow {...props}>{children}</AntdRow>
}
