import { FC } from 'react'
import { Form, FormProps } from 'antd'

interface InternalFormProps extends Omit<FormProps, 'autoComplete'> {}

const InternalForm: FC<InternalFormProps> = ({ children, ...props }) => {
  return (
    <Form autoComplete="off" {...props}>
      <>{children}</>
    </Form>
  )
}

export default InternalForm
