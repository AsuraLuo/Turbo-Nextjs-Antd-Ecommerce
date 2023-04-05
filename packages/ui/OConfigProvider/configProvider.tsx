import { FC } from 'react'
import { ConfigProvider } from 'antd'
import { ConfigProviderProps } from 'antd/es/config-provider'

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
  const theme: ConfigProviderProps['theme'] = {
    token: {
      colorPrimary: '#30B8BD',
      colorError: '#D11515',
      fontFamily: 'Microsoft YaHei, sans-serif'
    },
    components: {
      Button: {
        controlHeight: 34,
        colorPrimaryHover: '#00A9AF',
        colorBgContainerDisabled: '#EDEDED',
        colorTextDisabled: '#666666',
        borderRadius: 4,
        paddingContentHorizontal: 21
      },
      Input: {
        controlHeight: 34,
        colorText: '#221F1F',
        colorTextPlaceholder: '#BDBDBD',
        colorPrimaryHover: '#30B8BD',
        colorBgContainerDisabled: '#F8F8F8',
        borderRadius: 4,
        paddingSM: 13
      },
      Select: {
        controlHeight: 34,
        borderRadius: 4,
        paddingSM: 13
      }
    }
  }

  return (
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
  )
}

export default OConfigProvider
