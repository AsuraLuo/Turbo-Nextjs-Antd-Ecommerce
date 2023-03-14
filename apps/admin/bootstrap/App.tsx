import { Provider as ReduxProvider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react'
import {
  StyleProvider,
  createCache,
  legacyLogicalPropertiesTransformer,
  px2remTransformer
} from '@ant-design/cssinjs'

import { OConfigProvider, OCssBaseline } from '@ocloud/ui'
import { ThemeConf } from '@config/theme'
import { store } from '@store/index'

import AppShell from '@components/AppShell'
import LocaleProvider from '@components/LocaleProvider'
import HttpProvider from '@components/HttpProvider'

const App = () => {
  const cache = createCache()

  return (
    <ReduxProvider store={store}>
      <HttpProvider>
        <BrowserRouter>
          <LocaleProvider>
            <StyleProvider
              cache={cache}
              transformers={[legacyLogicalPropertiesTransformer, px2remTransformer()]}
            >
              <ThemeProvider theme={ThemeConf}>
                <OConfigProvider theme={{}} prefixCls={ThemeConf.namespace}>
                  <OCssBaseline />
                  <AppShell />
                </OConfigProvider>
              </ThemeProvider>
            </StyleProvider>
          </LocaleProvider>
        </BrowserRouter>
      </HttpProvider>
    </ReduxProvider>
  )
}

export default App
