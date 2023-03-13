import { FC } from 'react'
import { Image as AntdImage, ImageProps } from 'antd'

const Image: FC<ImageProps> = ({ children, ...props }) => {
  return <AntdImage {...props}>{children}</AntdImage>
}

export default Image
