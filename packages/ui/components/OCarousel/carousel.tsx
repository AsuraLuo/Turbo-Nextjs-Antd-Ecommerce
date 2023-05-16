import { FC } from 'react'
import { Carousel } from 'antd'
import type { CarouselProps } from 'antd/es/carousel'

const OCarousel: FC<CarouselProps> = ({ children, ...props }) => {
  return <Carousel {...props}>{children}</Carousel>
}

export default OCarousel
