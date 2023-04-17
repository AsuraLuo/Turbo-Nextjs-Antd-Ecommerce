import { FC } from 'react'
import { Slider, SliderSingleProps } from 'antd'

const OSlider: FC<SliderSingleProps> = ({ ...props }) => {
  return <Slider {...props} />
}

export default OSlider
