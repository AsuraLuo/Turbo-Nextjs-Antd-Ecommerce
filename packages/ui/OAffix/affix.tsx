import { FC } from 'react'
import { Affix, AffixProps } from 'antd'

const OAffix: FC<AffixProps> = ({ children, ...props }) => {
  return <Affix {...props}>{children}</Affix>
}

export default OAffix
