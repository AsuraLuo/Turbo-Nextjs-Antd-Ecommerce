import { FC } from 'react'
import { Tree, TreeProps } from 'antd'

const OTree: FC<TreeProps<any>> = ({ children, ...props }) => {
  return <Tree {...props}>{children}</Tree>
}

export default OTree
