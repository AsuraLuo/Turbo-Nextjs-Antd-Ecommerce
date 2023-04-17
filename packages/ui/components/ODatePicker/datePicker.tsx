import { FC } from 'react'
import { DatePicker, DatePickerProps } from 'antd'

const ODatePicker: FC<DatePickerProps> = ({ ...props }) => {
  return <DatePicker {...props} />
}

export default ODatePicker
