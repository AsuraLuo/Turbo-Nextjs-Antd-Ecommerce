import { FC } from 'react'
import { Statistic as AntdStatistic, StatisticProps } from 'antd'

const Statistic: FC<StatisticProps> = ({ ...props }) => {
  return <AntdStatistic {...props} />
}

export default Statistic
