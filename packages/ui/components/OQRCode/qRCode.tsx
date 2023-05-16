import { FC } from 'react'
import { QRCode } from 'antd'
import type { QRCodeProps } from 'antd/es/qrcode/interface'

const OQRCode: FC<QRCodeProps> = ({ ...props }) => {
  return <QRCode {...props} />
}

export default OQRCode
