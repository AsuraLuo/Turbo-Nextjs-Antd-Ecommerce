import { FC } from 'react'
import { Affix as AntdAffix, AffixProps } from 'antd'

const Affix: FC<AffixProps> = ({ children, ...props }) => {
  return <AntdAffix {...props}>{children}</AntdAffix>
}

export default Affix
