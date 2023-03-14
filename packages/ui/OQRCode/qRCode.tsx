import { FC } from 'react'
import { QRCode, QRCodeProps } from 'antd'

const OQRCode: FC<QRCodeProps> = ({ ...props }) => {
  return <QRCode {...props} />
}

export default OQRCode
