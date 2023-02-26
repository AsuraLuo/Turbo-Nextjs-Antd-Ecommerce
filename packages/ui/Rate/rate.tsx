import { FC } from 'react'
import { Rate as AntdRate, RateProps } from 'antd'

const Rate: FC<RateProps> = ({ ...props }) => {
  return <AntdRate {...props} />
}

export default Rate
