import { FC } from 'react'
import { ConfigProvider } from 'antd'
import { ConfigProviderProps } from 'antd/es/config-provider'

const OConfigProvider: FC<ConfigProviderProps> = ({ children, ...props }) => {
  return <ConfigProvider {...props}>{children}</ConfigProvider>
}

export default OConfigProvider
