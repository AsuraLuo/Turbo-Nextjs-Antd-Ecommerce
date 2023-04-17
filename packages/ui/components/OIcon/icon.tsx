import { FC } from 'react'

import { StyledOIcon } from './styled'

interface OIconProps {
  src: FC<any>
  size?: number
}

const OIcon: FC<OIconProps> = ({ size = 20, src, ...props }) => {
  const Component: any = src
  return (
    <StyledOIcon {...props}>
      <Component size={size} />
    </StyledOIcon>
  )
}

export default OIcon
