import { FC } from 'react'
import { Carousel as AntdCarousel, CarouselProps } from 'antd'
import { ChevronLeft, ChevronRight } from 'react-feather'

import Arrow from './arrow'

const Carousel: FC<CarouselProps> = ({ children, ...props }) => {
  const nextArrow = <Arrow icon={ChevronRight} />
  const prevArrow = <Arrow icon={ChevronLeft} />

  return (
    <AntdCarousel nextArrow={nextArrow} prevArrow={prevArrow} {...props}>
      {children}
    </AntdCarousel>
  )
}

export default Carousel
