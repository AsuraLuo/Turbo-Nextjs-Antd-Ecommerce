import { FC } from 'react'
import { Statistic, StatisticProps } from 'antd'

const OStatistic: FC<StatisticProps> = ({ ...props }) => {
  return <Statistic {...props} />
}

export default OStatistic
