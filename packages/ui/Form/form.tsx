import { FC } from 'react'
import { Form as AntdForm, FormProps } from 'antd'

const InternalForm: FC<FormProps> = ({ children, ...props }) => {
  return (
    <AntdForm {...props}>
      <>{children}</>
    </AntdForm>
  )
}

export default InternalForm
