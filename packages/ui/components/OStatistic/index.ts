import { Statistic } from 'antd'

import InternalStatistic from './statistic'

const { Countdown } = Statistic

type InternalStatisticType = typeof InternalStatistic
type CompoundedComponent = InternalStatisticType & {
  Countdown: typeof Countdown
}

const OStatistic = InternalStatistic as CompoundedComponent
OStatistic.Countdown = Statistic.Countdown

export default OStatistic
