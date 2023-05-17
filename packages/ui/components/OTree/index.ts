import { Tree } from 'antd'

import InternalTree from './tree'

type InternalTreeType = typeof InternalTree
type CompoundedComponent = InternalTreeType & {
  TreeNode: typeof Tree.TreeNode
  DirectoryTree: typeof Tree.DirectoryTree
}

const OTree = InternalTree as CompoundedComponent
OTree.TreeNode = Tree.TreeNode
OTree.DirectoryTree = Tree.DirectoryTree

export default OTree
