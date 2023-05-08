import { FC } from 'react'
import { InputNumber, InputNumberProps } from 'antd'

const OInputNumber: FC<InputNumberProps> = ({ children, ...props }) => {
  return <InputNumber {...props}>{children}</InputNumber>
}

export default OInputNumber
