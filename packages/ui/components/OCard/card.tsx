import { FC } from 'react'
import { Card } from 'antd'
import type { CardProps } from 'antd/es/card'

const OCard: FC<CardProps> = ({ children, ...props }) => {
  return <Card {...props}>{children}</Card>
}

export default OCard
