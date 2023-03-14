import { FC } from 'react'
import { Pagination, PaginationProps } from 'antd'

const OPagination: FC<PaginationProps> = ({ ...props }) => {
  return <Pagination {...props} />
}

export default OPagination
