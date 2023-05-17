import { Steps } from 'antd'

import InternalSteps from './steps'

type InternalStepsType = typeof InternalSteps
type CompoundedComponent = InternalStepsType & {
  Step: typeof Steps.Step
}

const OSteps = InternalSteps as CompoundedComponent
OSteps.Step = Steps.Step

export default OSteps
