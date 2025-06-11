import { createI18nMiddleware } from "next-intl/middleware"

const i18nMiddleware = createI18nMiddleware({
  locales: ["en", "fa", "ar", "zh"],
  defaultLocale: "en",
  localePrefix: "as-needed",
})

export function middleware(request) {
  // Security headers
  const response = i18nMiddleware(request)

  // Rate limiting headers
  response.headers.set("X-RateLimit-Limit", "100")
  response.headers.set("X-RateLimit-Remaining", "99")

  // Security headers
  response.headers.set("X-Robots-Tag", "noindex, nofollow")

  return response
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next|api|favicon.ico|robots.txt|sitemap.xml).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
}
