import { Dropdown } from 'antd'

import InternalDropDown from './dropdown'

const { Button } = Dropdown

type InternalType = typeof InternalDropDown
type CompoundedComponent = InternalType & {
  Button: typeof Button
}

const ODropdown = InternalDropDown as CompoundedComponent
ODropdown.Button = Button

export default ODropdown
