import { FC } from 'react'
import { Tree as AntdTree, TreeProps } from 'antd'

const Tree: FC<TreeProps<any>> = ({ children, ...props }) => {
  return <AntdTree {...props}>{children}</AntdTree>
}

export default Tree
