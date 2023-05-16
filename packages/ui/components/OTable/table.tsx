import { FC } from 'react'
import { Table } from 'antd'
import type { TableProps } from 'antd/es/table'

import { StyledOTable } from './styled'

interface OTableProps extends Omit<TableProps<any>, 'bordered'> {}

const OTable: FC<OTableProps> = ({ children, size = 'middle', ...props }) => {
  return (
    <StyledOTable>
      <Table bordered size={size} {...props}>
        {children}
      </Table>
    </StyledOTable>
  )
}

export default OTable
