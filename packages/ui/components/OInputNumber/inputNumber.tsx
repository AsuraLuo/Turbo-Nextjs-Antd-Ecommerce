import { FC } from 'react'
import { InputNumber } from 'antd'
import type { InputNumberProps } from 'antd/es/input-number'

const OInputNumber: FC<InputNumberProps> = ({ children, ...props }) => {
  return <InputNumber {...props}>{children}</InputNumber>
}

export default OInputNumber
