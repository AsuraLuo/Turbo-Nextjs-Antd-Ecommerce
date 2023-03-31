import { FC } from 'react'
import type { TableProps } from 'antd/es/table'

import OTable from '../OTable'

type ExcludeType =
  | 'className'
  | 'style'
  | 'bordered'
  | 'getPopupContainer'
  | 'pagination'
  | 'size'
  | 'tableLayout'

export interface RecordType extends Record<string, any> {
  [k: string]: any
}

export interface ITableProps<T = RecordType> extends Omit<TableProps<T>, ExcludeType> {
  showPagination?: boolean
  paginationProps?: TableProps<RecordType>['pagination']
}

const ITable: FC<ITableProps> = ({ showPagination = false, paginationProps = {}, ...props }) => {
  const getPopupContainer = (node: HTMLElement) => node
  const pagination: TableProps<RecordType>['pagination'] = showPagination
    ? { ...paginationProps }
    : false

  return (
    <OTable
      tableLayout="fixed"
      bordered
      getPopupContainer={getPopupContainer}
      pagination={pagination}
      {...props}
    />
  )
}

export default ITable
