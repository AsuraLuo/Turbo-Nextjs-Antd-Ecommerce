import { FC } from 'react'
import { Checkbox as AntdCheckbox, CheckboxProps } from 'antd'

const Checkbox: FC<CheckboxProps> = ({ children, ...props }) => {
  return <AntdCheckbox {...props}>{children}</AntdCheckbox>
}

export default Checkbox
