import {
  StyleProvider,
  createCache,
  legacyLogicalPropertiesTransformer,
  px2remTransformer
} from '@ant-design/cssinjs'
import { ThemeConf } from '@config/theme'
import { ThemeProvider } from '@emotion/react'
import { store } from '@store/index'
import { Provider as ReduxProvider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { OConfigProvider, OCssBaseline, IButton } from '@ocloud/ui'

// import AppShell from '@components/AppShell'
import HttpProvider from '@components/HttpProvider'
import LocaleProvider from '@components/LocaleProvider'

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
                  {/* <AppShell /> */}
                  <div style={{ width: '500px', margin: '10rem auto' }}>
                    <IButton />
                  </div>
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
