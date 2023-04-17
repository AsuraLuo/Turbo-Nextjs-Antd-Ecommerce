import { FC } from 'react'
import { Select, TreeSelect } from 'antd'
import type { SelectProps } from 'antd/es/select'
import type { TreeSelectProps } from 'antd/es/tree-select'

import { StyledISelect } from './styled'

type ExcludeType = 'className' | 'style' | 'placeholder' | 'getPopupContainer'

export interface ISelectPropsType extends Omit<SelectProps, ExcludeType | 'mode' | 'options'> {
  showSearch?: boolean
}

export interface ITreePropsType extends Omit<TreeSelectProps, ExcludeType | 'treeData'> {}

export interface ISelectProps {
  /** 选择器类型 */
  type?: 'select' | 'tree'
  /** 是否支持多选 */
  multiple?: boolean
  /** 默认文本 */
  placeholder?: string
  /** 数据参数 */
  values?: any[]
  /** 渲染父节点 */
  getPopupContainer?: (node: HTMLElement) => HTMLElement
  /** select配置属性 */
  selectProps?: ISelectPropsType
  /** treeSelect配置属性 */
  treeProps?: ITreePropsType
}

const ISelect: FC<ISelectProps> = ({
  type = 'select',
  multiple = false,
  placeholder = '请选择',
  values = [],
  getPopupContainer = (node: HTMLElement) => node,
  selectProps = {
    showSearch: true
  },
  treeProps = {
    treeDefaultExpandAll: true,
    showSearch: true
  }
}) => {
  const showSelect: boolean = type === 'select'
  const multipleProps: SelectProps = multiple
    ? {
        mode: 'multiple'
      }
    : {}

  return (
    <StyledISelect>
      {showSelect ? (
        <Select
          {...selectProps}
          {...multipleProps}
          getPopupContainer={getPopupContainer}
          placeholder={placeholder}
          options={values}
        />
      ) : (
        <TreeSelect
          {...treeProps}
          getPopupContainer={getPopupContainer}
          multiple={multiple}
          placeholder={placeholder}
          treeData={values}
        />
      )}
    </StyledISelect>
  )
}

export default ISelect
