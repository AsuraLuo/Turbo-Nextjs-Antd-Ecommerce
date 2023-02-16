import { Provider as ReduxProvider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react'
// import 'antd/dist/reset.css'

import { ConfigProvider, Button } from '@ecommerce/ui'
import { store } from '@/store'

const App = () => {
  return (
    <ReduxProvider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={{}}>
          <ConfigProvider prefixCls="ecommerce">
            <div>
              <Button type="primary">Antd</Button>
            </div>
          </ConfigProvider>
        </ThemeProvider>
      </BrowserRouter>
    </ReduxProvider>
  )
}

export default App
