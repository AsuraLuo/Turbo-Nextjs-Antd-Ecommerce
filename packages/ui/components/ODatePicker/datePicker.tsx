import { FC } from 'react'
import { DatePicker } from 'antd'
import type { DatePickerProps } from 'antd/es/date-picker'

const ODatePicker: FC<DatePickerProps> = ({ ...props }) => {
  return <DatePicker {...props} />
}

export default ODatePicker
