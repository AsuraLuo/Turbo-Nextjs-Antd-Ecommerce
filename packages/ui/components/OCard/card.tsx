import { FC } from 'react'
import { Card, CardProps } from 'antd'

const OCard: FC<CardProps> = ({ children, ...props }) => {
  return <Card {...props}>{children}</Card>
}

export default OCard
