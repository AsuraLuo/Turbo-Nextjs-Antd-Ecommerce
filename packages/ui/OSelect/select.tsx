import { FC } from 'react'
import { Select, SelectProps } from 'antd'

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
