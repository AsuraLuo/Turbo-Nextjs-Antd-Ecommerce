import { Checkbox } from 'antd'

import InternalCheckbox from './checkbox'

const { Group } = Checkbox

type InternalCheckboxType = typeof InternalCheckbox
type CompoundedComponent = InternalCheckboxType & {
  Group: typeof Group
}

const OCheckbox = InternalCheckbox as CompoundedComponent
OCheckbox.Group = Checkbox.Group

export default OCheckbox
