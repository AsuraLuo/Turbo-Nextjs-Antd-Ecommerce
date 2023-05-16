import { FC } from 'react'
import { Checkbox } from 'antd'
import type { CheckboxProps } from 'antd/es/checkbox'

const OCheckbox: FC<CheckboxProps> = ({ children, ...props }) => {
  return <Checkbox {...props}>{children}</Checkbox>
}

export default OCheckbox
