import { FC } from 'react'
import { Dropdown as AntdDropdown, DropdownProps } from 'antd'

const Dropdown: FC<DropdownProps> = ({ children, ...props }) => {
  return <AntdDropdown {...props}>{children}</AntdDropdown>
}

export default Dropdown
