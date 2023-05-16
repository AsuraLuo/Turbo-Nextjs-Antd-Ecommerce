import { FC } from 'react'
import { Statistic } from 'antd'
import type { StatisticProps } from 'antd/es/statistic'

const OStatistic: FC<StatisticProps> = ({ ...props }) => {
  return <Statistic {...props} />
}

export default OStatistic
