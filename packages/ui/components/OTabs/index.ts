import { Tabs } from 'antd'

import InternalTabs from './tabs'

const { TabPane } = Tabs

type InternalTabsType = typeof InternalTabs
type CompoundedComponent = InternalTabsType & {
  TabPane: typeof TabPane
}

const OTabs = InternalTabs as CompoundedComponent
OTabs.TabPane = TabPane

export default OTabs
