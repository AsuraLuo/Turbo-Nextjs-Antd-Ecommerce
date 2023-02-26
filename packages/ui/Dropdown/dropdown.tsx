import { FC } from 'react'
import { Dropdown as AntdDropdown, DropdownProps } from 'antd'

const InternalDropDown: FC<DropdownProps> = ({ children, ...props }) => {
  return <AntdDropdown {...props}>{children}</AntdDropdown>
}

export default InternalDropDown
