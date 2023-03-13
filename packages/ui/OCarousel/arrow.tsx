import { FC } from 'react'

import Icon from '../OIcon'
import { StyledArrow } from './styled'

interface ArrowProps {
  className?: string
  icon?: any
  width?: number
  height?: number
  style?: any
  onClick?: () => void
}

const Arrow: FC<ArrowProps> = ({
  className,
  icon,
  width = '40px',
  height = '40px',
  style,
  onClick
}) => {
  const mergeStyle = { ...style, width, height }

  return (
    <StyledArrow className={className} style={mergeStyle}>
      <div className="arrow" aria-hidden="true" role="button" onClick={onClick}>
        <Icon src={icon} />
      </div>
    </StyledArrow>
  )
}

export default Arrow
