import { FC } from 'react'
import { Checkbox, CheckboxProps } from 'antd'

const OCheckbox: FC<CheckboxProps> = ({ children, ...props }) => {
  return <Checkbox {...props}>{children}</Checkbox>
}

export default OCheckbox
