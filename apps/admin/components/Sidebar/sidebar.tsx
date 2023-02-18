import { Menu, Layout } from 'antd'

import { useSideBar } from '@hooks/SideBar'

import Logo from '@components/Logo'
import { StyledSidebar } from './styled'

const { Sider } = Layout

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
    <Sider
      width={230}
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
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
    </Sider>
  )
}

export default SideBar
