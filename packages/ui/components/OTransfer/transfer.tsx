import { FC } from 'react'
import { Transfer } from 'antd'
import type { TransferProps } from 'antd/es/transfer'

const OTransfer: FC<TransferProps<any>> = ({ children, ...props }) => {
  return <Transfer {...props}>{children}</Transfer>
}

export default OTransfer
