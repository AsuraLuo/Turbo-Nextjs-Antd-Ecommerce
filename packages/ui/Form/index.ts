import { Form as AntdForm } from 'antd'

import InternalForm from './form'

const { Item, List, ErrorList, Provider, useForm, useFormInstance } = AntdForm

type InternalFormType = typeof InternalForm
type CompoundedComponent = InternalFormType & {
  useForm: typeof useForm
  useFormInstance: typeof useFormInstance
  Item: typeof Item
  List: typeof List
  ErrorList: typeof ErrorList
  Provider: typeof Provider
}

const Form = InternalForm as CompoundedComponent
Form.Item = Item
Form.List = List
Form.ErrorList = ErrorList
Form.Provider = Provider
Form.useForm = useForm
Form.useFormInstance = useFormInstance

export default Form
