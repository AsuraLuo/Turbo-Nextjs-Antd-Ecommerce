import { FC } from 'react'
import { Popover } from 'antd'
import type { PopoverProps } from 'antd/es/popover'

const OPopover: FC<PopoverProps> = ({ children, ...props }) => {
  return <Popover {...props}>{children}</Popover>
}

export default OPopover
