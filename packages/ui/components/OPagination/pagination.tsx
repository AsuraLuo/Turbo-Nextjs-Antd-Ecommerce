import { FC } from 'react'
import { Pagination, PaginationProps } from 'antd'

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
