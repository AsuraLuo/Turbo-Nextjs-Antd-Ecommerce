import { FC } from 'react'
import { ConfigProvider } from 'antd'
import { ConfigProviderProps } from 'antd/es/config-provider'
import zhCN from 'antd/locale/zh_CN'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'

import { theme } from './theme'
import { StyledConfigProvider } from './styled'

dayjs.locale('zh-cn')

type ExcludeType = 'iconPrefixCls' | 'prefixCls' | 'form' | 'theme' | 'locale'

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
        locale={zhCN}
        {...props}
      >
        {children}
      </ConfigProvider>
    </StyledConfigProvider>
  )
}

export default OConfigProvider
