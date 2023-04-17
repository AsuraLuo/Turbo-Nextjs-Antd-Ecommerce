import { FC } from 'react'
import { Rate, RateProps } from 'antd'

const ORate: FC<RateProps> = ({ ...props }) => {
  return <Rate {...props} />
}

export default ORate
