import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useFetch } from 'use-http'

import { useCookie } from '@ocloud/hooks'
import { asyncActions as userAsyncActions } from '@store/user'

export const useAccountShell = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { cookie } = useCookie()
  const { get: fetchQuery } = useFetch()
  const menus = useSelector((state: any) => state.app.menus)
  const isLogin = useSelector((state: any) => state.user.isLogin)

  useEffect(() => {
    const fetchAccount = async () => {
      await dispatch(
        userAsyncActions.fetchAccountDetail({
          fetchQuery
        })
      ).then(({ payload }: any) => {
        if (!payload) {
          cookie.removeItem('access_token')
          navigate('/')
        }
      })
    }

    if (isLogin) fetchAccount()
  }, [isLogin])

  return {
    isLogin,
    menus
  }
}
