import { FC } from 'react'
import { Tooltip } from 'antd'
import type { TooltipProps } from 'antd/es/tooltip'

const OTooltip: FC<TooltipProps> = ({ children, ...props }) => {
  return <Tooltip {...props}>{children}</Tooltip>
}

export default OTooltip
