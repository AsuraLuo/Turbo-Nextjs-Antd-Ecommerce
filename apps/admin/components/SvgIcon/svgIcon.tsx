import { FC } from 'react'

interface SvgIcon {
  name: string
  width?: number
  height?: number
}

const SvgIcon: FC<SvgIcon> = ({ name, width = 24, height = 24, ...props }) => {
  return (
    <svg width={width} height={height} strokeWidth={2} {...props}>
      <use xlinkHref={`#${name}`} />
    </svg>
  )
}

export default SvgIcon
