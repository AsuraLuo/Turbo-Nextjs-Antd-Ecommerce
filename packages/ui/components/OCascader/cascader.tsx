import { FC } from 'react'
import { Cascader } from 'antd'
import type { CascaderProps } from 'antd/es/cascader'

const OCascader: FC<CascaderProps> = ({ children, ...props }) => {
  return <Cascader {...props}>{children}</Cascader>
}

export default OCascader
