import { OMenu, OLayout } from '@ocloud/ui'

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
    <OLayout.Sider
      width={230}
      collapsible
      collapsed={collapsed}
      trigger={null}
      onCollapse={(value: boolean) => setCollapsed(value)}
    >
      <Logo />
      <StyledSidebar>
        <OMenu
          theme="dark"
          mode="inline"
          items={sideList}
          openKeys={openKeys}
          selectedKeys={selectedKeys}
          onClick={handleClickItem}
          onOpenChange={handleToggleItem}
        />
      </StyledSidebar>
    </OLayout.Sider>
  )
}

export default SideBar
