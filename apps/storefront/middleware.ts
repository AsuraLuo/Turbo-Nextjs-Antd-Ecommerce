import { NextResponse } from 'next/server'
import type { NextRequest, NextMiddleware } from 'next/server'

export const middleware: NextMiddleware = (request: NextRequest) => {
  const locale: any = request.cookies.get('locale')
  // Clone the request headers and set a new header `x-hello-from-middleware1`
  const requestHeaders: Headers = new Headers(request.headers)
  requestHeaders.set('x-ecloud-locale', locale)

  // You can also set request headers in NextResponse.rewrite
  const response: NextResponse = NextResponse.next({
    request: {
      // New request headers
      headers: requestHeaders
    }
  })

  // Set a new response header
  response.headers.set('x-ecloud-currency', 'USD')

  return response
}

export const config = {
  matcher: ['/:path*']
}
