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

import { OConfigProvider, OCssBaseline, OForm, OButton, IQuantityStep } from '@ocloud/ui'

import AppShell from '@components/AppShell'
import HttpProvider from '@components/HttpProvider'
import LocaleProvider from '@components/LocaleProvider'

const App = () => {
  const onFinish = (values: any) => {
    console.info(values)
  }

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
                  <div style={{ width: '500px', margin: '10rem auto' }}>
                    <OForm onFinish={onFinish}>
                      <IQuantityStep />
                      <OButton htmlType="submit">Submit</OButton>
                    </OForm>
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
