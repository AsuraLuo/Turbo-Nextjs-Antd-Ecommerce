import { FC } from 'react'
import { Dropdown } from 'antd'
import type { DropdownProps } from 'antd/es/dropdown'

const InternalDropDown: FC<DropdownProps> = ({ children, ...props }) => {
  return <Dropdown {...props}>{children}</Dropdown>
}

export default InternalDropDown
