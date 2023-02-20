import { FC } from 'react'
import { Pagination as AntdPagination, PaginationProps } from 'antd'

const Pagination: FC<PaginationProps> = ({ ...props }) => {
  return <AntdPagination {...props} />
}

export default Pagination
