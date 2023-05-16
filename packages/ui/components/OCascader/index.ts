import { Cascader } from 'antd'

import InternalCascader from './cascader'

const { SHOW_CHILD, SHOW_PARENT } = Cascader

type InternalCascaderType = typeof InternalCascader
type CompoundedComponent = InternalCascaderType & {
  SHOW_CHILD: typeof SHOW_CHILD
  SHOW_PARENT: typeof SHOW_PARENT
}

const OCascader = InternalCascader as CompoundedComponent
OCascader.SHOW_CHILD = SHOW_CHILD
OCascader.SHOW_CHILD = SHOW_CHILD

export default OCascader
