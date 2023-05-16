import { FC } from 'react'
import { Spin } from 'antd'
import type { SpinProps } from 'antd/es/spin'

const OSpin: FC<SpinProps> = ({ children, ...props }) => {
  return <Spin {...props}>{children}</Spin>
}

export default OSpin
