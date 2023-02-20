import { FC } from 'react'
import { FloatButton as AntdFloatButton, FloatButtonProps } from 'antd'

const FloatButton: FC<FloatButtonProps> = ({ ...props }) => {
  return <AntdFloatButton {...props} />
}

export default FloatButton
