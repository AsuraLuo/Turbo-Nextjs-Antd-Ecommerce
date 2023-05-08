import { TimePicker } from 'antd'

import InternalTimePicker from './timePicker'

type InternalTimePickerType = typeof InternalTimePicker
type CompoundedComponent = InternalTimePickerType & {
  RangePicker: typeof TimePicker.RangePicker
}

const OTimePicker = InternalTimePicker as CompoundedComponent
OTimePicker.RangePicker = TimePicker.RangePicker

export default OTimePicker
