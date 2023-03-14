import { FC } from 'react'
import { App, AppProps } from 'antd'

const OApp: FC<AppProps> = ({ children, ...props }) => {
  return <App {...props}>{children}</App>
}

export default OApp
