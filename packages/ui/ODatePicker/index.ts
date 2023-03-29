import { DatePicker } from 'antd'

import InternalDatePicker from './datePicker'

type InternalDatePickerType = typeof InternalDatePicker
type CompoundedComponent = InternalDatePickerType & {
  WeekPicker: typeof DatePicker.WeekPicker
  MonthPicker: typeof DatePicker.MonthPicker
  QuarterPicker: typeof DatePicker.QuarterPicker
  YearPicker: typeof DatePicker.YearPicker
  RangePicker: typeof DatePicker.RangePicker
  TimePicker: typeof DatePicker.TimePicker
}

const ODatePicker = InternalDatePicker as CompoundedComponent
ODatePicker.WeekPicker = DatePicker.WeekPicker
ODatePicker.MonthPicker = DatePicker.MonthPicker
ODatePicker.QuarterPicker = DatePicker.QuarterPicker
ODatePicker.YearPicker = DatePicker.YearPicker
ODatePicker.RangePicker = DatePicker.RangePicker
ODatePicker.TimePicker = DatePicker.TimePicker

export default ODatePicker
