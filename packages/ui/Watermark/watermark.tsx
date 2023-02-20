import { FC } from 'react'
import { Watermark as AntdWatermark, WatermarkProps } from 'antd'

const Watermark: FC<WatermarkProps> = ({ children, ...props }) => {
  return <AntdWatermark {...props}>{children}</AntdWatermark>
}

export default Watermark
