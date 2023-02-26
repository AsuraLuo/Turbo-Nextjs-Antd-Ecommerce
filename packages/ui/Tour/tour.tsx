import { FC } from 'react'
import { Tour as AntdTour, TourProps } from 'antd'

const Tour: FC<TourProps> = ({ ...props }) => {
  return <AntdTour {...props} />
}

export default Tour
