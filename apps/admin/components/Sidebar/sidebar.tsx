import { Menu, Layout } from '@ocloud/ui'

import { useSideBar } from '@hooks/SideBar'

import Logo from '@components/Logo'
import { StyledSidebar } from './styled'

const SideBar = () => {
  const {
    collapsed,
    openKeys,
    sideList,
    selectedKeys,
    setCollapsed,
    handleClickItem,
    handleToggleItem
  } = useSideBar()

  return (
    <Layout.Sider
      width={230}
      collapsible
      collapsed={collapsed}
      trigger={null}
      onCollapse={(value: boolean) => setCollapsed(value)}
    >
      <Logo />
      <StyledSidebar>
        <Menu
          theme="dark"
          mode="inline"
          items={sideList}
          openKeys={openKeys}
          selectedKeys={selectedKeys}
          onClick={handleClickItem}
          onOpenChange={handleToggleItem}
        />
      </StyledSidebar>
    </Layout.Sider>
  )
}

export default SideBar
