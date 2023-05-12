import { forwardRef } from 'react'
import { Form } from 'antd'
import type { FormProps, FormInstance } from 'antd/es/form'

interface InternalFormProps extends Omit<FormProps, 'autoComplete'> {}

type FormRef = React.Ref<FormInstance<any>>

const InternalForm = forwardRef((props: InternalFormProps, ref: FormRef) => {
  const { children, ...rest } = props
  return (
    <Form autoComplete="off" ref={ref} {...rest}>
      <>{children}</>
    </Form>
  )
})

InternalForm.displayName = 'OForm'

export default InternalForm
