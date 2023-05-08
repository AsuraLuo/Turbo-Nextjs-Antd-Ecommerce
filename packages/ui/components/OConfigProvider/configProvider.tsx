import { FC } from 'react'
import { ConfigProvider } from 'antd'
import type { ConfigProviderProps, ThemeConfig } from 'antd/es/config-provider'
import { locale } from 'dayjs'
import { merge } from 'lodash-es'
import 'dayjs/locale/zh-cn'

import { themeConfig } from './themeConfig'
import { StyledConfigProvider } from './styled'

locale('zh-cn')

type ExcludeType = 'iconPrefixCls' | 'form'

export interface OConfigProviderProps extends Omit<ConfigProviderProps, ExcludeType> {
  requiredMessage?: string
}

const OConfigProvider: FC<OConfigProviderProps> = ({
  children,
  prefixCls = 'ocloud',
  theme = {},
  requiredMessage = '内容输入错误，请重新输入',
  ...props
}) => {
  const globalTheme: ThemeConfig = merge(themeConfig, theme)
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
        theme={globalTheme}
        {...props}
      >
        {children}
      </ConfigProvider>
    </StyledConfigProvider>
  )
}

export default OConfigProvider
