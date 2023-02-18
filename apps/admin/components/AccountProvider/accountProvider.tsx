import {
  FC,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo
} from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { useFetch } from 'use-http'
import { isEmpty } from 'lodash'

import { actions as appActions } from '@store/app'

const AccountContext = createContext({})

const AccountProvider: FC<any> = ({ children }) => {
  const dispatch = useDispatch()
  const location = useLocation()
  const { pathname } = location
  const { get, response } = useFetch()

  const contextValue = useMemo(() => [], [])

  const handleRoute = useCallback(
    (params: any[]) => {
      const values: any[] = []

      const generateRouter = (array: any[]) => {
        // eslint-disable-next-line array-callback-return, consistent-return
        const result: any = array.find((item: any) => {
          const { url } = item

          if (isEmpty(url)) {
            if (item.children.length > 0) return generateRouter(item.children)
          } else {
            const path: string = `/${url}`
            if (path === pathname) {
              return item
            }
          }
        })
        values.push(result)
        return result
      }

      generateRouter(params)
      return values
    },
    [pathname]
  )

  useEffect(() => {
    const fetchAuthMenu = async () => {
      try {
        const date: Date = new Date()
        const time: number = date.getTime()
        const { data } = await get(`/sys/resource/nav?_t=${time}`)

        if (response.ok) {
          const values: any[] = handleRoute(data)
          dispatch(
            appActions.setMenus({
              menus: data,
              activeMenus: values.reverse()
            })
          )
        }
      } catch (error) {
        console.error(error)
      }
    }

    fetchAuthMenu()
  }, [])

  return (
    <AccountContext.Provider value={contextValue}>
      {children}
    </AccountContext.Provider>
  )
}

export default AccountProvider

export const useUserContext = () => useContext(AccountContext)
