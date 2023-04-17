import { Form } from 'antd'

import InternalForm from './form'

const { Item, List, ErrorList, Provider, useForm, useFormInstance } = Form

type InternalFormType = typeof InternalForm
type CompoundedComponent = InternalFormType & {
  useForm: typeof useForm
  useFormInstance: typeof useFormInstance
  useWatch: typeof Form.useWatch
  Item: typeof Item
  List: typeof List
  ErrorList: typeof ErrorList
  Provider: typeof Provider
}

const OForm = InternalForm as CompoundedComponent
OForm.Item = Item
OForm.List = List
OForm.ErrorList = ErrorList
OForm.Provider = Provider
OForm.useForm = useForm
OForm.useWatch = Form.useWatch
OForm.useFormInstance = useFormInstance

export default OForm
