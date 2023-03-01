import { FC } from 'react'
import { Navigate } from 'react-router-dom'

import { useCookie } from '@ecloud/hooks'

const AuthRoute: FC<any> = ({ children }) => {
  const { cookie } = useCookie()
  const token: string = cookie.getItem('access_token')

  return token ? children : <Navigate to="/login" replace />
}

export default AuthRoute
