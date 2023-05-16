import { FC } from 'react'
import { Segmented } from 'antd'
import type { SegmentedProps } from 'antd/es/segmented'

const OSegmented: FC<SegmentedProps> = ({ children, ...props }) => {
  const Component: any = Segmented
  return <Component {...props}>{children}</Component>
}

export default OSegmented
