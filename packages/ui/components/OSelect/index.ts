import { Select } from 'antd'

import InternalSelect from './select'

type InternalSelectType = typeof InternalSelect
type CompoundedComponent = InternalSelectType & {
  Option: typeof Select.Option
  OptGroup: typeof Select.OptGroup
}

const OSelect = InternalSelect as CompoundedComponent
OSelect.Option = Select.Option
OSelect.OptGroup = Select.OptGroup

export default OSelect
