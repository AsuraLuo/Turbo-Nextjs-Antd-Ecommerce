import { Table } from 'antd'

import InternalTable from './table'

type InternalTableType = typeof InternalTable
type CompoundedComponent = InternalTableType & {
  Column: typeof Table.Column
  ColumnGroup: typeof Table.ColumnGroup
  Summary: typeof Table.Summary
  SELECTION_COLUMN: typeof Table.SELECTION_COLUMN
  EXPAND_COLUMN: typeof Table.EXPAND_COLUMN
  SELECTION_ALL: typeof Table.SELECTION_ALL
  SELECTION_INVERT: typeof Table.SELECTION_INVERT
  SELECTION_NONE: typeof Table.SELECTION_NONE
}

const OTable = InternalTable as CompoundedComponent
OTable.Column = Table.Column
OTable.ColumnGroup = Table.ColumnGroup
OTable.Summary = Table.Summary
OTable.SELECTION_COLUMN = Table.SELECTION_COLUMN
OTable.EXPAND_COLUMN = Table.EXPAND_COLUMN
OTable.SELECTION_ALL = Table.SELECTION_ALL
OTable.SELECTION_INVERT = Table.SELECTION_INVERT
OTable.SELECTION_NONE = Table.SELECTION_NONE

export default OTable
