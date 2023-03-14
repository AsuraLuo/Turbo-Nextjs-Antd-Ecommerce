import { FC } from 'react'
import { Transfer, TransferProps } from 'antd'

const OTransfer: FC<TransferProps<any>> = ({ children, ...props }) => {
  return <Transfer {...props}>{children}</Transfer>
}

export default OTransfer
