import { FC } from 'react'
import { FloatButton } from 'antd'
import type { FloatButtonProps } from 'antd/es/float-button/interface'

const OFloatButton: FC<FloatButtonProps> = ({ ...props }) => {
  return <FloatButton {...props} />
}

export default OFloatButton
