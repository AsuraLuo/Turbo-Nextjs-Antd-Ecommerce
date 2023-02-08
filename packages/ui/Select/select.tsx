import { FC } from 'react'
import { Select as AntdSelect, SelectProps } from 'antd'

const Select: FC<SelectProps> = ({ children, ...props }) => {
  return <AntdSelect {...props}>{children}</AntdSelect>
}

export default Select
