import { FC } from 'react'
import { Popover, PopoverProps } from 'antd'

const OPopover: FC<PopoverProps> = ({ children, ...props }) => {
  return <Popover {...props}>{children}</Popover>
}

export default OPopover
