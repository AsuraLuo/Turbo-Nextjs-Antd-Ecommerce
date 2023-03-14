import React from 'react'
import { ThemeProvider } from '@emotion/react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

import { OConfigProvider } from '@ocloud/ui'
import { ThemeConf } from '../config/theme'

const withThemeProvider = (Story: any, context: any) => {
  return (
    <ThemeProvider theme={ThemeConf}>
      <OConfigProvider theme={{}} prefixCls={ThemeConf.namespace}>
        <Story {...context} />
      </OConfigProvider>
    </ThemeProvider>
  )
}

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  decorators: [withThemeProvider],
  globalTypes: {
    locale: {
      name: 'Locale',
      description: 'Internationalization locale',
      defaultValue: 'en',
      toolbar: {
        icon: 'globe',
        items: [
          { value: 'en', right: '🇺🇸', title: 'English' },
          { value: 'fr', right: '🇫🇷', title: 'Français' },
          { value: 'es', right: '🇪🇸', title: 'Español' },
          { value: 'zh', right: '🇨🇳', title: '中文' },
          { value: 'kr', right: '🇰🇷', title: '한국어' }
        ]
      }
    }
  },
  parameters: {
    backgrounds: {
      default: 'light'
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    viewport: {
      viewports: {
        ...INITIAL_VIEWPORTS,
        kindleFire2: {
          name: 'Kindle Fire 2',
          styles: {
            width: '600px',
            height: '963px'
          }
        }
      },
      defaultViewport: ''
    }
  }
}

export default preview
