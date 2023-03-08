import { NextApiRequest, NextApiResponse } from 'next/types'
import { createProxyMiddleware } from 'http-proxy-middleware'

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const apiProxy: any = createProxyMiddleware({
    target: process.env.REACT_APP_API_URL,
    changeOrigin: true,
    secure: true,
    pathRewrite: {
      '^/api/rest': '/'
    }
  })

  apiProxy(req, res, (result: any) => {
    if (result instanceof Error) {
      throw result
    }

    throw new Error(`Request '${req.url}' is not proxied! We should never reach here!`)
  })
}

export const config = {
  api: {
    externalResolver: true,
    bodyParser: false
  }
}

export default handler
