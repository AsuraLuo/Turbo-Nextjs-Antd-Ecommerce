import { Connect, Plugin } from 'vite'
import * as proxy from 'http2-proxy'

const error = (message: string): never => {
  throw new Error(message)
}

export const httpProxy = (configOptions: {
  [regexp: string]: {
    target: string | undefined
    rewrite?: (url: string) => string
    headers?: Record<string, number | string | string[] | undefined>
    changeOrigin?: boolean
    secure?: boolean
  }
}): Plugin => {
  const configure = ({ middlewares }: { middlewares: Connect.Server }) => {
    const result: any = Object.entries(configOptions)
    for (const [regexp, { target, rewrite, headers, secure = true }] of result) {
      const re = new RegExp(regexp)
      const tu = new URL(target)

      if (!tu.pathname.endsWith('/')) {
        tu.pathname += '/'
      }

      const protocol = /^https?:$/.test(tu.protocol)
        ? (tu.protocol.slice(0, -1) as 'https' | 'http')
        : error(`Invalid protocol: ${tu.href}`)

      const port =
        // eslint-disable-next-line no-nested-ternary
        tu.port === ''
          ? { https: 443, http: 80 }[protocol]
          : /^\d+$/.test(tu.port)
          ? Number(tu.port)
          : error(`Invalid port: ${tu.href}`)

      middlewares.use((req, res, next) => {
        if (req.url && re.test(req.url)) {
          const url = (rewrite?.(req.url) ?? req.url).replace(/^\/+/, '')
          const { pathname, search } = new URL(url, tu)
          proxy.web(
            req,
            res,
            {
              protocol,
              port,
              hostname: tu.hostname,
              path: pathname + search,
              onReq: async (_, options: any) => {
                options.headers = {
                  ...options.headers,
                  ...headers
                }
              },
              ['rejectUnauthorized' as never]: secure
            },
            (err) => err && next(err)
          )
        } else {
          next()
        }
      })
    }
  }

  return {
    name: 'http2-proxy',
    configureServer: configure,
    configurePreviewServer: configure
  }
}
