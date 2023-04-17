import { FC } from 'react'
import { TreeSelect } from 'antd'
import { TreeSelectProps } from 'antd/es/tree-select'

const OTreeSelect: FC<TreeSelectProps> = ({ ...props }) => {
  const getPopupContainer = (node: HTMLElement) => node

  return <TreeSelect getPopupContainer={getPopupContainer} {...props} />
}

export default OTreeSelect
