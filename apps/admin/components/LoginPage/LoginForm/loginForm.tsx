import { Button, Form, Input, Spin } from '@ecommerce/ui'
import { useLoginForm } from '@hooks/LoginPage'

import VerificationCode from '../VerificationCode'

const LoginForm = () => {
  const { loading, uuid, handleSubmitForm } = useLoginForm()

  return (
    <Spin spinning={loading}>
      <Form onFinish={handleSubmitForm}>
        <Form.Item name="username" rules={[{ required: true }]}>
          <Input placeholder="请输入用户名" />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true }]}>
          <Input type="password" placeholder="请输入用密码" />
        </Form.Item>
        <Form.Item name="validCode" rules={[{ required: true }]}>
          <VerificationCode uuid={uuid} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            登录
          </Button>
        </Form.Item>
      </Form>
    </Spin>
  )
}

export default LoginForm
