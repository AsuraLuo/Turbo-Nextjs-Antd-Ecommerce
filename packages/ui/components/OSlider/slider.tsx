import { FC } from 'react'
import { Slider } from 'antd'
import type { SliderSingleProps } from 'antd/es/slider'

const OSlider: FC<SliderSingleProps> = ({ ...props }) => {
  return <Slider {...props} />
}

export default OSlider
