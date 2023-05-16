import { FC } from 'react'
import { Pagination } from 'antd'
import type { PaginationProps } from 'antd/es/pagination'

import { StyledPagination } from './styled'

const OPagination: FC<PaginationProps> = ({ ...props }) => {
  const showTotal = (total: number) => {
    return `共 ${total} 条`
  }

  return (
    <StyledPagination>
      <Pagination showTotal={showTotal} {...props} />
    </StyledPagination>
  )
}

export default OPagination
