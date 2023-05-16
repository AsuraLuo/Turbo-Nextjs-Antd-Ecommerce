import { FC } from 'react'
import { Radio } from 'antd'
import type { RadioProps } from 'antd/es/radio'

const ORadio: FC<RadioProps> = ({ children, ...props }) => {
  return <Radio {...props}>{children}</Radio>
}

export default ORadio
