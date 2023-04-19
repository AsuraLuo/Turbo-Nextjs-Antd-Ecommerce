import { Plugin } from 'vite'
export declare const httpProxy: (configOptions: {
  [regexp: string]: {
    target: string | undefined
    rewrite?: ((url: string) => string) | undefined
    headers?: Record<string, string | number | string[] | undefined> | undefined
    changeOrigin?: boolean | undefined
    secure?: boolean | undefined
  }
}) => Plugin
