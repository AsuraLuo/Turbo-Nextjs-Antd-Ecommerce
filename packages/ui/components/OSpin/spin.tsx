import { FC } from 'react'
import { Spin, SpinProps } from 'antd'

const OSpin: FC<SpinProps> = ({ children, ...props }) => {
  return <Spin {...props}>{children}</Spin>
}

export default OSpin
