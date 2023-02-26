import { FC } from 'react'
import { Segmented as AntdSegmented, SegmentedProps } from 'antd'

const Segmented: FC<SegmentedProps> = ({ children, ...props }) => {
  return <AntdSegmented {...props}>{children}</AntdSegmented>
}

export default Segmented
