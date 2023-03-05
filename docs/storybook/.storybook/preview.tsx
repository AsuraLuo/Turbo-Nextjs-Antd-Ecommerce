// import { ThemeProvider } from '@emotion/react'

// import { ConfigProvider } from '@ecloud/ui'

// import { ThemeConf } from '../config/theme'

// const withThemeProvider = (Story: any, context: any) => {
//   return (
//     <ThemeProvider theme={ThemeConf}>
//       <ConfigProvider theme={{}} prefixCls={ThemeConf.namespace}>
//         <Story {...context} />
//       </ConfigProvider>
//     </ThemeProvider>
//   )
// }

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
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
    }
  }
}

export default preview
