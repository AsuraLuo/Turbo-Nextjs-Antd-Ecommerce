import { FC } from 'react'
import { TreeSelectProps } from 'antd/es/tree-select'

import OTreeSelect from '../OTreeSelect'
import { StyledITreeSelect } from './styled'

type ExcludeType =
  | 'className'
  | 'style'
  | 'bordered'
  | 'allowClear'
  | 'getPopupContainer'
  | 'showSearch'
  | 'treeCheckable'

export interface ITreeSelectProps extends Omit<TreeSelectProps, ExcludeType> {
  clear?: boolean
  checkable?: boolean
}

const ITreeSelect: FC<ITreeSelectProps> = ({ clear = true, checkable = true, ...props }) => {
  const getPopupContainer = (node: HTMLElement) => node

  return (
    <StyledITreeSelect>
      <OTreeSelect
        {...props}
        allowClear={clear}
        treeCheckable={checkable}
        showCheckedStrategy={OTreeSelect.SHOW_PARENT}
        getPopupContainer={getPopupContainer}
        showSearch={false}
      />
    </StyledITreeSelect>
  )
}

export default ITreeSelect
