import { ThemeProvider } from '@emotion/react'

import { ConfigProvider } from '@ecloud/ui'

import { ThemeConf } from '../config/theme'

const withThemeProvider = (Story: any, context: any) => {
  return (
    <ThemeProvider theme={ThemeConf}>
      <ConfigProvider theme={{}} prefixCls={ThemeConf.namespace}>
        <Story {...context} />
      </ConfigProvider>
    </ThemeProvider>
  )
}

export const decorators = [withThemeProvider]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {}
}

export const argTypes = {}

export const args = {}
