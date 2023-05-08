import { Card } from 'antd'

import InternalCard from './card'

const { Grid, Meta } = Card

type InternalCardType = typeof InternalCard
type CompoundedComponent = InternalCardType & {
  Grid: typeof Grid
  Meta: typeof Meta
}

const OCard = InternalCard as CompoundedComponent
OCard.Grid = Grid
OCard.Meta = Meta

export default OCard
