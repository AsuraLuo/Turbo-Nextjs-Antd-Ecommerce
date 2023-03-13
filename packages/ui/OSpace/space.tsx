import { FC } from 'react'
import { Space as AntdSpace, SpaceProps } from 'antd'

const Space: FC<SpaceProps> = ({ children, ...props }) => {
  return <AntdSpace {...props}>{children}</AntdSpace>
}

export default Space
