import type { Theme } from '@emotion/react'

import { antdTheme } from './antdTheme'

export const ThemeConf: Theme = {
  antdTheme,
  breakPoint: {
    xxs: 320,
    xs: 480,
    s: 640,
    sm: 768,
    m: 992,
    l: 1024,
    lg: 1200,
    xl: 1440,
    xxl: 1600,
    xxxl: 1920
  },
  colors: {
    white: '#ffffff',
    black: '#000000',
    primary: '#00A9AF'
  },
  namespace: 'ocloud'
}
