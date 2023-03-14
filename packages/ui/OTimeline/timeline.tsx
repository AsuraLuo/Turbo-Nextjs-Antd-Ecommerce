import { FC } from 'react'
import { Timeline, TimelineProps } from 'antd'

const OTimeline: FC<TimelineProps> = ({ children, ...props }) => {
  return <Timeline {...props}>{children}</Timeline>
}

export default OTimeline
