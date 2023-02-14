// import fs from 'fs'
import next from 'next'
import express from 'express'
import { parse } from 'url'
// import { createServer } from 'spdy'

const port = parseInt(process.env.PORT || '3000', 10)
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

// const options: any = {
//   key: fs.readFileSync('keys/nextjs-key.pem'),
//   cert: fs.readFileSync('keys/nextjs-cert.pem')
// }

app.prepare().then(() => {
  const server = express()

  server.all('*', async (req: any, res: any) => {
    const parsedUrl = parse(req.url, true)
    await handle(req, res, parsedUrl)
  })

  // start the HTTP/2 server with koa
  // const httpServer: any = createServer(options, server.callback())

  server.listen(port, () => {
    // if (error) {
    //   console.error(error)
    //   return process.exit(1)
    // }

    return console.warn(
      `> Server listening at http://localhost:${port} as ${
        dev ? 'development' : process.env.NODE_ENV
      }`
    )
  })
})
