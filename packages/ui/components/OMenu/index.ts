import { Menu as AntdMenu } from 'antd'

import InternalMenu from './menu'

const { Item, SubMenu, Divider } = AntdMenu

type InternalMenuType = typeof InternalMenu
type CompoundedComponent = InternalMenuType & {
  Item: typeof Item
  SubMenu: typeof SubMenu
  Divider: typeof Divider
  ItemGroup: typeof AntdMenu.ItemGroup
}

const Menu = InternalMenu as CompoundedComponent
Menu.Item = Item
Menu.SubMenu = SubMenu
Menu.Divider = Divider
Menu.ItemGroup = AntdMenu.ItemGroup

export default Menu
