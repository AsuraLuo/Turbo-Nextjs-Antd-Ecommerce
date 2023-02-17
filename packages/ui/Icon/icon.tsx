import { FC } from 'react'

import { StyledIcon } from './styled'

interface IconProps {
  src: FC<any>
  size?: number
}

const Icon: FC<IconProps> = ({ size = 20, src, ...props }) => {
  const Component: any = src
  return (
    <StyledIcon {...props}>
      <Component size={size} />
    </StyledIcon>
  )
}

export default Icon
