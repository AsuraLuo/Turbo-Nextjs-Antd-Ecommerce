import { FC } from 'react'
import { Tooltip, TooltipProps } from 'antd'

const OTooltip: FC<TooltipProps> = ({ children, ...props }) => {
  return <Tooltip {...props}>{children}</Tooltip>
}

export default OTooltip
