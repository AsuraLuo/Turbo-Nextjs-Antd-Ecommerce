import { FC } from 'react'
import { Steps } from 'antd'
import type { StepsProps } from 'antd/es/steps'

const OSteps: FC<StepsProps> = ({ children, ...props }) => {
  return <Steps {...props}>{children}</Steps>
}

export default OSteps
