import { TreeSelect } from 'antd'

import InternalTreeSelect from './oTreeSelect'

const { SHOW_ALL, SHOW_PARENT, SHOW_CHILD } = TreeSelect

type InternalTreeSelectType = typeof InternalTreeSelect
type CompoundedComponent = InternalTreeSelectType & {
  TreeNode: typeof TreeSelect.TreeNode
  SHOW_ALL: typeof SHOW_ALL
  SHOW_PARENT: typeof SHOW_PARENT
  SHOW_CHILD: typeof SHOW_CHILD
}

const OTreeSelect = InternalTreeSelect as CompoundedComponent
OTreeSelect.TreeNode = TreeSelect.TreeNode
OTreeSelect.SHOW_ALL = SHOW_ALL
OTreeSelect.SHOW_PARENT = SHOW_PARENT
OTreeSelect.SHOW_CHILD = SHOW_CHILD

export default OTreeSelect
