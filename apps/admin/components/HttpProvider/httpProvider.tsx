import { FC } from 'react'
import { useSelector } from 'react-redux'
import { Provider, FetchProviderProps } from 'use-http'

import { useCookie } from '@ocloud/hooks'
import { website } from '@config/website'

const HttpProvider: FC<FetchProviderProps> = ({ children }) => {
  const { cookie } = useCookie()
  const accountDetail = useSelector((state: any) => state.user.accountDetail)
  const isDev: boolean = import.meta.env.DEV
  const baseURL: string = isDev
    ? `${import.meta.env.REACT_APP_HOST_URL}/api`
    : import.meta.env.REACT_APP_API_URL

  const apiOptions: any = {
    cachePolicy: 'network-only',
    timeout: 60 * 1000,
    responseType: 'json',
    interceptors: {
      request: async ({ options }: any) => {
        const token: string = cookie.getItem('access_token')
        const locale: string = cookie.getItem('locale_code') || website.locale

        const username: string = accountDetail?.username ?? ''
        const realName: string = accountDetail?.realName ?? ''
        const proxyHeaders: any = accountDetail
          ? {
              'x-jobnumber-header': encodeURIComponent(username),
              'x-user-header': encodeURIComponent(realName)
            }
          : {}

        return {
          ...options,
          headers: {
            Accept: 'application/json',
            Authorization: token ? `Bearer ${token}` : 'Basic b2xpZ2h0X2FkbWluOm9saWdodF9hZG1pbg==',
            'Accept-Language': locale,
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            ...proxyHeaders,
            ...options.headers
          }
        }
      },
      response: async ({ response }: any) => {
        return response
      }
    },
    onError: (error: any) => {
      const Console = console
      Console.log(error)
    }
  }

  return (
    <Provider url={baseURL} options={apiOptions}>
      {children}
    </Provider>
  )
}

export default HttpProvider
