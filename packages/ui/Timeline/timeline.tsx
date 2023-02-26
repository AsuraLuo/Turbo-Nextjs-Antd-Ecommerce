import { FC } from 'react'
import { Timeline as AntdTimeline, TimelineProps } from 'antd'

const Timeline: FC<TimelineProps> = ({ children, ...props }) => {
  return <AntdTimeline {...props}>{children}</AntdTimeline>
}

export default Timeline
