import Head from 'next/head'
import { AppProps } from 'next/app'
import { Provider as ReduxProvider } from 'react-redux'
import {
  StyleProvider,
  legacyLogicalPropertiesTransformer
} from '@ant-design/cssinjs'
import { isEmpty } from 'lodash'
import 'antd/dist/reset.css'

import { ConfigProvider } from '@ecommerce/ui'
import { withRedux, LocaleContextProvider } from '@provider/index'
import { fetchApp } from '@hooks/App'

import AppShell from '@components/AppShell'

interface InitialPage {
  Component: any
  ctx: any
}

interface HeadlessProps extends AppProps {
  reduxStore?: any
}

const App = ({ Component, pageProps, reduxStore }: HeadlessProps) => {
  // Fetch i18n required translate message
  const state = reduxStore.getState()
  const i18nLng = state.i18n.messages
  const requireMsg = i18nLng?.['validate.required'] ?? ''

  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="robots" content="INDEX,FOLLOW" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content="Ecommerce" />
        <meta name="format-detection" content="telephone=no, email=no" />
        <meta name="application-name" content="Ecommerce" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Ecommerce" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-tap-highlight" content="no" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="dns-prefetch" href={process.env.API_URL} />
        <link rel="preconnect" href={process.env.API_URL} />
      </Head>
      <ReduxProvider store={reduxStore}>
        <LocaleContextProvider>
          <StyleProvider
            ssrInline
            transformers={[legacyLogicalPropertiesTransformer]}
          >
            <ConfigProvider
              prefixCls="apax"
              form={{
                validateMessages: {
                  required: requireMsg
                }
              }}
              theme={{
                token: {
                  borderRadius: 3
                }
              }}
            >
              <AppShell>
                <Component {...pageProps} />
              </AppShell>
            </ConfigProvider>
          </StyleProvider>
        </LocaleContextProvider>
      </ReduxProvider>
    </>
  )
}

App.getInitialProps = async ({ Component, ctx }: InitialPage) => {
  const { reduxStore } = ctx
  const state = reduxStore.getState()

  if (isEmpty(state.i18n.languages)) await fetchApp(ctx)

  const pageProps = Component.getInitialProps
    ? await Component.getInitialProps({ ...ctx })
    : {}

  return { pageProps }
}

export default withRedux(App)
