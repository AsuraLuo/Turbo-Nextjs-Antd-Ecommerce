import { FC } from 'react'
import { Tree } from 'antd'
import type { TreeProps } from 'antd/es/tree'

const OTree: FC<TreeProps<any>> = ({ children, ...props }) => {
  return <Tree {...props}>{children}</Tree>
}

export default OTree
