import { OButton, OForm, OInput, OSpin } from '@ocloud/ui'
import { useLoginForm } from '@hooks/LoginPage'

import VerificationCode from '../VerificationCode'

const LoginForm = () => {
  const { loading, uuid, handleSubmitForm } = useLoginForm()

  return (
    <OSpin spinning={loading}>
      <OForm onFinish={handleSubmitForm}>
        <OForm.Item name="username" rules={[{ required: true }]}>
          <OInput placeholder="请输入用户名" />
        </OForm.Item>
        <OForm.Item name="password" rules={[{ required: true }]}>
          <OInput type="password" placeholder="请输入用密码" />
        </OForm.Item>
        <OForm.Item name="validCode" rules={[{ required: true }]}>
          <VerificationCode uuid={uuid} />
        </OForm.Item>
        <OForm.Item>
          <OButton type="primary" htmlType="submit">
            登录
          </OButton>
        </OForm.Item>
      </OForm>
    </OSpin>
  )
}

export default LoginForm
