import { Search } from 'react-feather'

import { OAvatar, OButton, ODropdown, ODivider, OIcon, OInput, OLayout } from '@ocloud/ui'

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
    <OLayout.Header>
      <StyledFlex>
        <Menus />
        <OButton type="primary">查询</OButton>
        <div className="header__actions">
          <OInput placeholder="请输入搜索关键词" prefix={<OIcon src={Search} />} />
          <Locale />
          <ODivider type="vertical" />
          <ODropdown placement="bottomRight" trigger={['click']} menu={{ items }}>
            <p className="header__account">
              <OAvatar size={38} />
              <span>Admin</span>
            </p>
          </ODropdown>
        </div>
      </StyledFlex>
      <Navigation />
    </OLayout.Header>
  )
}

export default Header
