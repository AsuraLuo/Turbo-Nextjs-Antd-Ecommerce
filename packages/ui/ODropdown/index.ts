import { Dropdown as AntdDropdown } from 'antd'

import InternalDropDown from './dropdown'

const { Button } = AntdDropdown

type InternalType = typeof InternalDropDown
type CompoundedComponent = InternalType & {
  Button: typeof Button
}

const Dropdown = InternalDropDown as CompoundedComponent
Dropdown.Button = Button

export default Dropdown
