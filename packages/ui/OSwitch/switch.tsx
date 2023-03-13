import { FC } from 'react'
import { Switch as AntdSwitch, SwitchProps } from 'antd'

const Switch: FC<SwitchProps> = ({ ...props }) => {
  return <AntdSwitch {...props} />
}

export default Switch
