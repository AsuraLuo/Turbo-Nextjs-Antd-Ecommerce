import { FC } from 'react'
import { Segmented as AntdSegmented, SegmentedProps } from 'antd'

const Segmented: FC<SegmentedProps> = ({ children, ...props }) => {
  const Component: any = AntdSegmented
  return <Component {...props}>{children}</Component>
}

export default Segmented
