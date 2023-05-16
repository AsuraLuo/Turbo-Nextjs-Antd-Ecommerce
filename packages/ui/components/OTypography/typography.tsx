import { FC, ReactNode } from 'react'
import { Typography } from 'antd'
import type { TypographyProps } from 'antd/es/typography'

interface OTypographyProps extends TypographyProps {
  children?: ReactNode
}

const OTypography: FC<OTypographyProps> = ({ children, ...props }) => {
  return <Typography {...props}>{children}</Typography>
}

export default OTypography
