import { FC } from 'react'
import { Affix } from 'antd'
import type { AffixProps } from 'antd/es/affix'

const OAffix: FC<AffixProps> = ({ children, ...props }) => {
  return <Affix {...props}>{children}</Affix>
}

export default OAffix
