import { FC } from 'react'
import { Image } from 'antd'
import type { ImageProps } from 'antd/es/image'

const OImage: FC<ImageProps> = ({ children, ...props }) => {
  return <Image {...props}>{children}</Image>
}

export default OImage
