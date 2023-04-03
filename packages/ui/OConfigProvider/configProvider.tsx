import { FC } from 'react'
import { ConfigProvider } from 'antd'
import { ConfigProviderProps } from 'antd/es/config-provider'

export interface OConfigProviderProps
  extends Omit<ConfigProviderProps, 'iconPrefixCls' | 'prefixCls' | 'form'> {
  prefixCls?: string
  requiredMessage?: string
}

const OConfigProvider: FC<OConfigProviderProps> = ({
  children,
  prefixCls = 'ocloud',
  requiredMessage = '这是必填字段',
  ...props
}) => {
  return (
    <ConfigProvider
      prefixCls={prefixCls}
      iconPrefixCls={`${prefixCls}-icon`}
      form={{
        validateMessages: {
          required: requiredMessage
        }
      }}
      {...props}
    >
      {children}
    </ConfigProvider>
  )
}

export default OConfigProvider
