import { Search } from 'react-feather'

import { Avatar, Dropdown, Divider, Icon, Input, Layout } from '@ecloud/ui'

import Locale from './Locale'
import Menus from './Menus'
import Navigation from './Navigation'
import { StyledFlex } from './styled'

const Header = () => {
  const items = [
    { label: '菜单项一', key: 'item-1' },
    { label: '菜单项二', key: 'item-2' }
  ]

  return (
    <Layout.Header>
      <StyledFlex>
        <Menus />
        <div className="header__actions">
          <Input placeholder="请输入搜索关键词" prefix={<Icon src={Search} />} />
          <Locale />
          <Divider type="vertical" />
          <Dropdown placement="bottomRight" trigger={['click']} menu={{ items }}>
            <p className="header__account">
              <Avatar size={38} />
              <span>Admin</span>
            </p>
          </Dropdown>
        </div>
      </StyledFlex>
      <Navigation />
    </Layout.Header>
  )
}

export default Header
