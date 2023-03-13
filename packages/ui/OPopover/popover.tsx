import { FC } from 'react'
import { Popover as AntdPopover, PopoverProps } from 'antd'

const Popover: FC<PopoverProps> = ({ children, ...props }) => {
  return <AntdPopover {...props}>{children}</AntdPopover>
}

export default Popover
