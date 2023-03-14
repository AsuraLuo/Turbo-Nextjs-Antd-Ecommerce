import { FC } from 'react'
import { Table, TableProps } from 'antd'

const OTable: FC<TableProps<any>> = ({ children, ...props }) => {
  return <Table {...props}>{children}</Table>
}

export default OTable
