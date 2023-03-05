import { Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import ErrorBoundary from '@components/ErrorBoundary'
import { useRoutes } from '../../routes'

const rotuerViews = (routerItems: any[]) => {
  return routerItems && routerItems.length > 0 ? (
    <>
      {routerItems.map(({ path, component: Component, children, redirect }) => {
        return children && children.length ? (
          <Route path={path} key={path} element={<Component />}>
            {rotuerViews(children)}
            <Route path={path} element={<Navigate to={redirect || children[0].path} />} />
          </Route>
        ) : (
          <Route key={path} path={path} element={<Component />} />
        )
      })}
    </>
  ) : null
}

const AppRoutes = () => {
  const { appRoutes, menus, isLogin } = useRoutes()

  return (
    <Suspense>
      <ErrorBoundary>
        {isLogin && menus.length > 0 ? (
          <Routes>{rotuerViews(appRoutes)}</Routes>
        ) : (
          <Routes>{rotuerViews(appRoutes)}</Routes>
        )}
      </ErrorBoundary>
    </Suspense>
  )
}

export default AppRoutes
