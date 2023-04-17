import { FC } from 'react'
import { Image, ImageProps } from 'antd'

const OImage: FC<ImageProps> = ({ children, ...props }) => {
  return <Image {...props}>{children}</Image>
}

export default OImage
