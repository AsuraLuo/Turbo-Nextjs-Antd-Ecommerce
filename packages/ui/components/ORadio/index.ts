import { Radio, RadioProps } from 'antd'

import InternalRadio from './radio'

const { Button, Group } = Radio

type InternalRadioType = typeof InternalRadio
type CompoundedComponent = React.ForwardRefExoticComponent<RadioProps> &
  InternalRadioType & {
    Button: typeof Button
    Group: typeof Group
  }

const ORadio = InternalRadio as CompoundedComponent
ORadio.Button = Radio.Button
ORadio.Group = Radio.Group

export default ORadio
