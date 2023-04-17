import { FC } from 'react'
import { Tour, TourProps } from 'antd'

const OTour: FC<TourProps> = ({ ...props }) => {
  return <Tour {...props} />
}

export default OTour
