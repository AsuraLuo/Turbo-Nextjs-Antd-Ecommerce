import { FC } from 'react'
import { Tooltip as AntdTooltip, TooltipProps } from 'antd'

const Tooltip: FC<TooltipProps> = ({ children, ...props }) => {
  return <AntdTooltip {...props}>{children}</AntdTooltip>
}

export default Tooltip
