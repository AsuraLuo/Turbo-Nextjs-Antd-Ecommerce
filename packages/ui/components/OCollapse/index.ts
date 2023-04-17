import { Collapse } from 'antd'

import InternalCollapse from './collapse'

const { Panel } = Collapse

type InternalType = typeof InternalCollapse
type CompoundedComponent = InternalType & {
  Panel: typeof Panel
}

const OCollapse = InternalCollapse as CompoundedComponent
OCollapse.Panel = Panel

export default OCollapse
