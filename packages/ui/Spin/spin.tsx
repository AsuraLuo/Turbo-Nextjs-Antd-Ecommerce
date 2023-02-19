import { FC } from 'react'
import { Spin as AntdSpin, SpinProps } from 'antd'

const Spin: FC<SpinProps> = ({ children, ...props }) => {
  return <AntdSpin {...props}>{children}</AntdSpin>
}

export default Spin
