import { FC } from 'react'
import { Select } from 'antd'
import type { SelectProps } from 'antd/es/select'

interface OSelectProps extends Omit<SelectProps, 'allowClear' | 'getPopupContainer'> {
  clear?: boolean
}

const OSelect: FC<OSelectProps> = ({ children, clear = true, ...props }) => {
  const getPopupContainer = (node: HTMLElement) => node

  return (
    <Select allowClear={clear} getPopupContainer={getPopupContainer} {...props}>
      {children}
    </Select>
  )
}

export default OSelect
