import { FC } from 'react'
import { QRCode as AntdQRCode, QRCodeProps } from 'antd'

const QRCode: FC<QRCodeProps> = ({ ...props }) => {
  return <AntdQRCode {...props} />
}

export default QRCode
