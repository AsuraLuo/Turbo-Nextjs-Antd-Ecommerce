import { FC } from 'react'
import { TimePicker } from 'antd'
import type { TimePickerProps } from 'antd/es/time-picker'

const OTimePicker: FC<TimePickerProps> = ({ ...props }) => {
  return <TimePicker {...props} />
}

export default OTimePicker
