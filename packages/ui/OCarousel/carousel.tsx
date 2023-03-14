import { FC } from 'react'
import { Carousel, CarouselProps } from 'antd'
import { ChevronLeft, ChevronRight } from 'react-feather'

import Arrow from './arrow'

const OCarousel: FC<CarouselProps> = ({ children, ...props }) => {
  const nextArrow = <Arrow icon={ChevronRight} />
  const prevArrow = <Arrow icon={ChevronLeft} />

  return (
    <Carousel nextArrow={nextArrow} prevArrow={prevArrow} {...props}>
      {children}
    </Carousel>
  )
}

export default OCarousel
