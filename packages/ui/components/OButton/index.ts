import { Button } from 'antd'

import InternalButton from './button'

const { Group } = Button

type InternalButtonType = typeof InternalButton
type CompoundedComponent = InternalButtonType & {
  Group: typeof Group
}

const OButton = InternalButton as CompoundedComponent
OButton.Group = Group

export default OButton
