import { FC } from 'react'
import { Steps, StepsProps } from 'antd'

const OSteps: FC<StepsProps> = ({ children, ...props }) => {
  return <Steps {...props}>{children}</Steps>
}

export default OSteps
