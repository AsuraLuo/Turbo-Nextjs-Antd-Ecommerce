import { Provider as ReduxProvider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react'

import { ConfigProvider, CssBaseline } from '@ecommerce/ui'
import { ThemeConf } from '@config/theme'
import { store } from '@store/index'

import AppShell from '@components/AppShell'
import LocaleProvider from '@components/LocaleProvider'
import HttpProvider from '@components/HttpProvider'

const App = () => {
  return (
    <ReduxProvider store={store}>
      <HttpProvider>
        <BrowserRouter>
          <LocaleProvider>
            <ThemeProvider theme={ThemeConf}>
              <ConfigProvider theme={{}} prefixCls={ThemeConf.namespace}>
                <CssBaseline />
                <AppShell />
              </ConfigProvider>
            </ThemeProvider>
          </LocaleProvider>
        </BrowserRouter>
      </HttpProvider>
    </ReduxProvider>
  )
}

export default App
