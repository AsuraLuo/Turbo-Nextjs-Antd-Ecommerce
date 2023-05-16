import { FC } from 'react'
import { Rate } from 'antd'
import type { RateProps } from 'antd/es/rate'

const ORate: FC<RateProps> = ({ ...props }) => {
  return <Rate {...props} />
}

export default ORate
