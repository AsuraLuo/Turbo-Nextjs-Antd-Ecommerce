import { FC } from 'react'
import { Radio, RadioProps } from 'antd'

const ORadio: FC<RadioProps> = ({ children, ...props }) => {
  return <Radio {...props}>{children}</Radio>
}

export default ORadio
