import { FC } from 'react'
import { App as AntdApp } from 'antd'
import { AppProps } from 'antd/es/app'

const App: FC<AppProps> = ({ children, ...props }) => {
  return <AntdApp {...props}>{children}</AntdApp>
}

export default App
