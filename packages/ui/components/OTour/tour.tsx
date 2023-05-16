import { FC } from 'react'
import { Tour } from 'antd'
import type { TourProps } from 'antd/es/tour/interface'

const OTour: FC<TourProps> = ({ ...props }) => {
  return <Tour {...props} />
}

export default OTour
