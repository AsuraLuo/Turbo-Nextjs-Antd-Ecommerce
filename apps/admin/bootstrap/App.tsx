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

import {
  OConfigProvider,
  OCssBaseline,
  OForm,
  OButton,
  OInput,
  IButton,
  IDynamicInput,
  IOperateButton
} from '@ocloud/ui'

import AppShell from '@components/AppShell'
import HttpProvider from '@components/HttpProvider'
import LocaleProvider from '@components/LocaleProvider'

const App = () => {
  const onFinish = (values: any) => {
    console.info('Received values of form:', values)
  }

  return (
    <ReduxProvider store={store}>
      <HttpProvider>
        <BrowserRouter>
          <LocaleProvider>
            <StyleProvider transformers={[legacyLogicalPropertiesTransformer]}>
              <ThemeProvider theme={ThemeConf}>
                <OConfigProvider prefixCls={ThemeConf.namespace}>
                  <OCssBaseline />
                  <AppShell />
                  <div style={{ width: '500px', margin: '10rem auto' }}>
                    <OForm onFinish={onFinish}>
                      <IDynamicInput
                        name="users"
                        label="工作&仓库"
                        dataSource={[
                          { key: 'first', value: undefined },
                          { key: 'last', value: undefined }
                        ]}
                      />
                      <OForm.Item>
                        <IOperateButton type="cancel" />
                      </OForm.Item>
                      <OForm.Item>
                        <IButton type="refresh" />
                      </OForm.Item>
                      <OForm.Item>
                        <IButton type="delete" />
                      </OForm.Item>
                      <OForm.Item name="input">
                        <OInput placeholder="请输入内容" disabled />
                      </OForm.Item>
                      <OForm.Item>
                        <OButton type="primary" htmlType="submit">
                          OButton
                        </OButton>
                      </OForm.Item>
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
