import { FC } from 'react'
import { ConfigProvider } from 'antd'
import type { ConfigProviderProps, ThemeConfig } from 'antd/es/config-provider'
import { merge } from 'lodash'
import dayjs from 'dayjs'
import zhCN from 'antd/locale/zh_CN'
import 'dayjs/locale/zh-cn'

import { themeConfig } from './themeConfig'
import { StyledConfigProvider } from './styled'

dayjs.locale('zh-cn')

type ExcludeType = 'iconPrefixCls' | 'form' | 'locale'

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
        locale={zhCN}
        {...props}
      >
        {children}
      </ConfigProvider>
    </StyledConfigProvider>
  )
}

export default OConfigProvider
