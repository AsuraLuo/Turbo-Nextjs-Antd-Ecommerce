import { FC } from 'react'
import { Table as AntdTable, TableProps } from 'antd'

const Table: FC<TableProps<any>> = ({ children, ...props }) => {
  return <AntdTable {...props}>{children}</AntdTable>
}

export default Table
