import { FC } from 'react'
import { Steps as AntdSteps, StepsProps } from 'antd'

const Steps: FC<StepsProps> = ({ children, ...props }) => {
  return <AntdSteps {...props}>{children}</AntdSteps>
}

export default Steps
