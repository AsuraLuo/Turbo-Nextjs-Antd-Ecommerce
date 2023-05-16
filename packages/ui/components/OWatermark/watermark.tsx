import { FC } from 'react'
import { Watermark } from 'antd'
import type { WatermarkProps } from 'antd/es/watermark'

const OWatermark: FC<WatermarkProps> = ({ children, ...props }) => {
  return <Watermark {...props}>{children}</Watermark>
}

export default OWatermark
