import { useEffect, FC, ReactNode, memo } from 'react'
import { ThemeProvider } from '@emotion/react'

import { ThemeConf } from '@config/theme'
import { OLocale } from '@ocloud/ui'

import GlobalStyled from '@components/GlobalStyled'
import { StyledMain } from './styled'

interface AppShellProps {
  children: ReactNode
}

const AppShell: FC<AppShellProps> = ({ children }) => {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles: HTMLElement = document.getElementById('jss-server-side')
    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles)
    }
  }, [])

  return (
    <ThemeProvider theme={ThemeConf}>
      <OLocale />
      <GlobalStyled />
      <StyledMain>{children}</StyledMain>
    </ThemeProvider>
  )
}

export default memo(AppShell)
