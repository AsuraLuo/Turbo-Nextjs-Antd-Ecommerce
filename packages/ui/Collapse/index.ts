import { Collapse as AntdCollapse } from 'antd'

import InternalCollapse from './collapse'

const { Panel } = AntdCollapse

type InternalType = typeof InternalCollapse
type CompoundedComponent = InternalType & {
  Panel: typeof Panel
}

const Collapse = InternalCollapse as CompoundedComponent
Collapse.Panel = Panel

export default Collapse
