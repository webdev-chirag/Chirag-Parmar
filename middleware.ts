import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Get location details from Vercel headers
  const country = (request as any).geo?.country || request.headers.get('x-vercel-ip-country') || 'Unknown'
  const city = (request as any).geo?.city || request.headers.get('x-vercel-ip-city') || 'Unknown'
  const region = (request as any).geo?.region || request.headers.get('x-vercel-ip-region') || 'Unknown'

  // Log the location in a formatted way
  console.log(`[Middleware] Access Attempt - Location: ${city}, ${region}, ${country}`)

  // Allow access to the coming soon page and static assets to avoid redirect loops
  if (
    request.nextUrl.pathname.startsWith('/coming-soon') ||
    request.nextUrl.pathname.startsWith('/_next') ||
    request.nextUrl.pathname.startsWith('/static') ||
    request.nextUrl.pathname.startsWith('/api') ||
    request.nextUrl.pathname.includes('.') // file extensions like .ico, .png, etc
  ) {
    return NextResponse.next()
  }

  // Check if the user is in Canada
  // For local development, we might want to allow access or simulate a country
  const isDev = process.env.NODE_ENV === 'development'
  
  // BYPASS for local dev if needed, or you can force test the redirect by commenting this out
  // if (isDev) return NextResponse.next() 

  if (country !== 'CA') {
      // Create the URL for the coming soon page
      const url = request.nextUrl.clone()
      url.pathname = '/coming-soon'
      return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

// Configure which paths the middleware runs on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
