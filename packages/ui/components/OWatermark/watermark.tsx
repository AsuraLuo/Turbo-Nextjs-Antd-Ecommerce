import { FC } from 'react'
import { Watermark, WatermarkProps } from 'antd'

const OWatermark: FC<WatermarkProps> = ({ children, ...props }) => {
  return <Watermark {...props}>{children}</Watermark>
}

export default OWatermark
