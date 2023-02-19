import { FC } from 'react'
import { Tabs as AntdTabs, TabsProps } from 'antd'

const Tabs: FC<TabsProps> = ({ children, ...props }) => {
  return <AntdTabs {...props}>{children}</AntdTabs>
}

export default Tabs
