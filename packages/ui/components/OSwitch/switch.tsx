import { FC } from 'react'
import { Switch } from 'antd'
import type { SwitchProps } from 'antd/es/switch'

const OSwitch: FC<SwitchProps> = ({ ...props }) => {
  return <Switch {...props} />
}

export default OSwitch
