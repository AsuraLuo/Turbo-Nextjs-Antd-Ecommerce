import { FC } from 'react'
import { Col as AntdCol, ColProps } from 'antd'

export const Col: FC<ColProps> = ({ children, ...props }) => {
  return <AntdCol {...props}>{children}</AntdCol>
}
