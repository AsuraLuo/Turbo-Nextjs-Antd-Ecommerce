import { FC } from 'react'
import { Select, SelectProps } from 'antd'

const OSelect: FC<SelectProps> = ({ children, ...props }) => {
  return <Select {...props}>{children}</Select>
}

export default OSelect
