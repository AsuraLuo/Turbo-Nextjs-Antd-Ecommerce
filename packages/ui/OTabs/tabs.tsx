import { FC } from 'react'
import { Tabs, TabsProps } from 'antd'

const OTabs: FC<TabsProps> = ({ children, ...props }) => {
  return <Tabs {...props}>{children}</Tabs>
}

export default OTabs
