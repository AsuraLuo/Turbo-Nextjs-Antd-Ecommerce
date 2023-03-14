import { FC } from 'react'
import { Segmented, SegmentedProps } from 'antd'

const OSegmented: FC<SegmentedProps> = ({ children, ...props }) => {
  const Component: any = Segmented
  return <Component {...props}>{children}</Component>
}

export default OSegmented
