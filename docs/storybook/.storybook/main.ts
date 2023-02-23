import { StorybookViteConfig } from '@storybook/builder-vite'
import { dirname } from 'path'
import { InlineConfig } from 'vite'

const config: StorybookViteConfig = {
  framework: '@storybook/react',
  stories: ['../stories/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-a11y', '@storybook/addon-essentials'],
  core: {
    builder: '@storybook/builder-vite',
    disableTelemetry: true
  },
  features: {
    storyStoreV7: true
  },
  async viteFinal(config: InlineConfig) {
    config.root = dirname(require.resolve('@storybook/builder-vite'))
    return config
  }
}

export default config
