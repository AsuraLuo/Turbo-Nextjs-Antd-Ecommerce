import { FC, ReactNode } from 'react'
import { Typography, TypographyProps } from 'antd'

interface OTypographyProps extends TypographyProps {
  children?: ReactNode
}

const OTypography: FC<OTypographyProps> = ({ children, ...props }) => {
  return <Typography {...props}>{children}</Typography>
}

export default OTypography
