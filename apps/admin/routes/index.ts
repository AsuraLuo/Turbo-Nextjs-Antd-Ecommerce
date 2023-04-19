import { lazy, LazyExoticComponent, useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { isEmpty } from 'lodash-es'

import { useCookie } from '@ocloud/hooks'

interface Router {
  path: string
  component: LazyExoticComponent<any>
  redirect?: string
  children: any[]
}

export const useRoutes = () => {
  const { cookie } = useCookie()
  const menus: any = useSelector((state: any) => state.app.menus)
  const isLogin: any = useSelector((state: any) => state.user.isLogin)
  const [appRoutes, setAppRoutes] = useState<Array<Router>>([
    {
      path: '/',
      component: lazy(() => import('@pages/home')),
      redirect: '',
      children: []
    },
    {
      path: 'login',
      component: lazy(() => import('@pages/login')),
      children: []
    },
    {
      path: '*',
      component: lazy(() => import('@pages/not-found')),
      children: []
    }
  ])

  const handleGenerateRoute = useCallback((params: any[]) => {
    const routes: Array<Router> = [
      {
        path: '',
        component: lazy(() => import('@pages/admin')),
        children: []
      }
    ]
    const modules: any = import.meta.glob('../pages/**/**')
    const getRoute = (values: any[]) => {
      values.forEach((menu: any) => {
        const { url, children } = menu

        if (url) {
          // React lazy load promise status
          // Uninitialized: -1 Pending: 0 Resolved: 1 Rejected: 2
          const component: any = lazy(modules[`../pages/${url}.tsx`] as any)
          // eslint-disable-next-line no-underscore-dangle
          const result: any = component._payload._result

          if (result) {
            routes.push({
              path: url,
              component,
              children: []
            })
          }
        }
        if (children.length > 0) getRoute(children)
      })
    }

    getRoute(params)

    return routes
  }, [])

  useEffect(() => {
    const token: string = cookie.getItem('access_token')
    const systemRoutes: any[] = isEmpty(token) ? [] : handleGenerateRoute(menus)

    setAppRoutes((prev: any[]) => {
      prev[0].children = systemRoutes

      return [...prev]
    })
  }, [menus])

  return {
    appRoutes,
    menus,
    isLogin
  }
}
