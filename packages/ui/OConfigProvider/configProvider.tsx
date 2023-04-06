import { FC } from 'react'
import { ConfigProvider } from 'antd'
import { ConfigProviderProps } from 'antd/es/config-provider'

import { theme } from './theme'
import { StyledConfigProvider } from './styled'

type ExcludeType = 'iconPrefixCls' | 'prefixCls' | 'form' | 'theme'

export interface OConfigProviderProps extends Omit<ConfigProviderProps, ExcludeType> {
  prefixCls?: string
  requiredMessage?: string
}

const OConfigProvider: FC<OConfigProviderProps> = ({
  children,
  prefixCls = 'ocloud',
  requiredMessage = '内容输入错误，请重新输入',
  ...props
}) => {
  return (
    <StyledConfigProvider>
      <ConfigProvider
        prefixCls={prefixCls}
        iconPrefixCls={`${prefixCls}-icon`}
        form={{
          validateMessages: {
            required: requiredMessage
          }
        }}
        theme={theme}
        {...props}
      >
        {children}
      </ConfigProvider>
    </StyledConfigProvider>
  )
}

export default OConfigProvider
