import { FC } from 'react'
import { Slider as AntdSlider, SliderSingleProps } from 'antd'

const Slider: FC<SliderSingleProps> = ({ ...props }) => {
  return <AntdSlider {...props} />
}

export default Slider
