import { FC } from 'react'
import { ConfigProvider as AntdConfigProvider } from 'antd'
import { ConfigProviderProps } from 'antd/es/config-provider'

const ConfigProvider: FC<ConfigProviderProps> = ({ children, ...props }) => {
  return <AntdConfigProvider {...props}>{children}</AntdConfigProvider>
}

export default ConfigProvider
