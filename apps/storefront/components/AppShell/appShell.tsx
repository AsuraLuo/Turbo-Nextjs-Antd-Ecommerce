import { useEffect, FC, ReactNode, memo } from 'react'

import { CurrentLocale } from '@ecommerce/ui'

import GlobalStyled from '@components/GlobalStyled'

interface AppShellProps {
  children: ReactNode
}

const AppShell: FC<AppShellProps> = ({ children }) => {
  useEffect(() => {
    // Remove the server-side injected CSS.
    // const jssStyles = document.getElementById('jss-server-side')
    // if (jssStyles) {
    //   jssStyles?.parentElement?.removeChild(jssStyles)
    // }
  }, [])

  return (
    <>
      <CurrentLocale />
      <GlobalStyled />
      <main>{children}</main>
    </>
  )
}

export default memo(AppShell)
