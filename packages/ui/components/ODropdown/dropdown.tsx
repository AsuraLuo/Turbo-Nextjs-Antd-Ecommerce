import { FC } from 'react'
import { Dropdown, DropdownProps } from 'antd'

const InternalDropDown: FC<DropdownProps> = ({ children, ...props }) => {
  return <Dropdown {...props}>{children}</Dropdown>
}

export default InternalDropDown
