import { FC } from 'react'
import { Form, FormProps } from 'antd'

const InternalForm: FC<FormProps> = ({ children, ...props }) => {
  return (
    <Form {...props}>
      <>{children}</>
    </Form>
  )
}

export default InternalForm
