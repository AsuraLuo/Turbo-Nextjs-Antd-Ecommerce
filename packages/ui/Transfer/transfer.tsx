import { FC } from 'react'
import { Transfer as AntdTransfer, TransferProps } from 'antd'

const Transfer: FC<TransferProps<any>> = ({ children, ...props }) => {
  return <AntdTransfer {...props}>{children}</AntdTransfer>
}

export default Transfer
