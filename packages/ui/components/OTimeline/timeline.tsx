import { FC } from 'react'
import { Timeline } from 'antd'
import type { TimelineProps } from 'antd/es/timeline'

const OTimeline: FC<TimelineProps> = ({ children, ...props }) => {
  return <Timeline {...props}>{children}</Timeline>
}

export default OTimeline
