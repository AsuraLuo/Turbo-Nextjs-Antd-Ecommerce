import {
  StyleProvider,
  legacyLogicalPropertiesTransformer
  // px2remTransformer
} from '@ant-design/cssinjs'
import { ThemeConf } from '@config/theme'
import { ThemeProvider } from '@emotion/react'
import { store } from '@store/index'
import { Provider as ReduxProvider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { OConfigProvider, OCssBaseline } from '@ocloud/ui'

import AppShell from '@components/AppShell'
import HttpProvider from '@components/HttpProvider'
import LocaleProvider from '@components/LocaleProvider'

const App = () => {
  return (
    <ReduxProvider store={store}>
      <HttpProvider>
        <BrowserRouter>
          <LocaleProvider>
            <StyleProvider transformers={[legacyLogicalPropertiesTransformer]}>
              <ThemeProvider theme={ThemeConf}>
                <OConfigProvider theme={{}} prefixCls={ThemeConf.namespace}>
                  <OCssBaseline />
                  <AppShell />
                  <div style={{ width: '500px', margin: '10rem auto' }} />
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
