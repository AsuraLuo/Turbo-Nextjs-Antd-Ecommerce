import { Input } from 'antd'

import InternalInput from './input'

const { Group, Search, TextArea, Password } = Input

type InternalInputType = typeof InternalInput
type CompoundedComponent = InternalInputType & {
  Group: typeof Group
  Search: typeof Search
  TextArea: typeof TextArea
  Password: typeof Password
}

const OInput = InternalInput as CompoundedComponent
OInput.Group = Input.Group
OInput.Search = Input.Search
OInput.TextArea = Input.TextArea
OInput.Password = Input.Password

export default OInput
