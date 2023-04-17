import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { useCookie } from '@ocloud/hooks'
import { actions as userActions } from '@store/user'

import AccountShell from '@components/AccountShell'
import AppRoutes from '@components/AppRoutes'

const AppShell = () => {
  const dispatch = useDispatch()
  const { cookie } = useCookie()
  useEffect(() => {
    const token: string = cookie.getItem('access_token')
    dispatch(userActions.setUserToken(token))
  }, [])

  return (
    <AccountShell>
      <AppRoutes />
    </AccountShell>
  )
}

export default AppShell
