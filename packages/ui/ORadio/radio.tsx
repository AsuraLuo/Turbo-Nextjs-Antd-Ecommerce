import { FC } from 'react'
import { Radio as AntdRadio, RadioProps } from 'antd'

const Radio: FC<RadioProps> = ({ children, ...props }) => {
  return <AntdRadio {...props}>{children}</AntdRadio>
}

export default Radio
