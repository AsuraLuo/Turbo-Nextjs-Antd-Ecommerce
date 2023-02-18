import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { useCookie } from '@ecommerce/hooks'
import { CurrentLocale } from '@ecommerce/ui'
import { actions as userActions } from '@store/user'

import AccountShell from '@components/AccountShell'
import AppRoutes from '@components/AppRoutes'
import GlobalStyled from '@components/GlobalStyled'

const AppShell = () => {
  const dispatch = useDispatch()
  const { cookie } = useCookie()

  useEffect(() => {
    const token: string = cookie.getItem('access_token')
    dispatch(userActions.setUserToken(token))
  }, [])

  return (
    <>
      <CurrentLocale />
      <GlobalStyled />
      <AccountShell>
        <AppRoutes />
      </AccountShell>
    </>
  )
}

export default AppShell
