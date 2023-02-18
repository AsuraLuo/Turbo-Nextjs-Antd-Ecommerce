import { Tabs } from 'antd'

import { useLoginPage } from '@hooks/LoginPage'

import LoginForm from './LoginForm'
import { StyledLoginPage } from './styled'

const LoginPage = () => {
  const { isRender } = useLoginPage()

  const items = [
    { label: '账号密码登录', key: 'login-password', children: <LoginForm /> },
    { label: '企业微信登录', key: 'login-weichat', children: '内容 1' }
  ]

  return (
    <StyledLoginPage>
      {isRender ? <Tabs items={items} /> : null}
    </StyledLoginPage>
  )
}

export default LoginPage
