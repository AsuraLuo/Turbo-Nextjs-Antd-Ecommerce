import { FC } from 'react'
import { Cascader, CascaderProps } from 'antd'

const OCascader: FC<CascaderProps> = ({ children, ...props }) => {
  return <Cascader {...props}>{children}</Cascader>
}

export default OCascader
