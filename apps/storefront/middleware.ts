import { NextResponse, userAgent } from 'next/server'
import type { NextRequest, NextMiddleware } from 'next/server'

export const middleware: NextMiddleware = (request: NextRequest) => {
  const { isBot, device } = userAgent(request)
  const requestHeaders: Headers = new Headers(request.headers)
  const viewport = device.type === 'mobile' ? 'mobile' : 'desktop'
  const locale: any = request.cookies.get('locale')

  requestHeaders.set('x-ocloud-viewport', viewport)
  requestHeaders.set('x-ocloud-bolt', `${isBot}`)

  // You can also set request headers in NextResponse.rewrite
  const response: NextResponse = NextResponse.next({
    request: {
      // New request headers
      headers: requestHeaders
    }
  })

  // Set a new response header
  response.headers.set('x-ocloud-currency', 'USD')
  response.headers.set('x-ocloud-locale', locale?.value ?? '')

  return response
}

export const config = {
  matcher: ['/:path*']
}
