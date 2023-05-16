import { FC } from 'react'
import { App } from 'antd'
import type { AppProps } from 'antd/es/app'

const OApp: FC<AppProps> = ({ children, ...props }) => {
  return <App {...props}>{children}</App>
}

export default OApp
