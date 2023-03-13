import { FC } from 'react'
import { DatePicker as AntdDatePicker, DatePickerProps } from 'antd'

const DatePicker: FC<DatePickerProps> = ({ ...props }) => {
  return <AntdDatePicker {...props} />
}

export default DatePicker
