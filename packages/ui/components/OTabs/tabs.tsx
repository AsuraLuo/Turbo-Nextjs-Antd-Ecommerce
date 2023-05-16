import { FC } from 'react'
import { Tabs } from 'antd'
import type { TabsProps } from 'antd/es/tabs'

const OTabs: FC<TabsProps> = ({ children, ...props }) => {
  return <Tabs {...props}>{children}</Tabs>
}

export default OTabs
