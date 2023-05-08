import { FC } from 'react'
import { TimePicker, TimePickerProps } from 'antd'

const OTimePicker: FC<TimePickerProps> = ({ ...props }) => {
  return <TimePicker {...props} />
}

export default OTimePicker
