import { NextResponse } from 'next/server'

// 中间件可以是async函数 
// export function middleware(request) {
//   return NextResponse.redirect(new URL('/home', request.url))
// }

// 设置匹配路径 作用是将/about /about/xxx  /about/xxx/xxx 都匹配到
// export const config = {
//   // 字符串形式
//   // matcher: '/about/:path*',
//   // 数组形式
//   matcher: ['/about/:path*', '/dashboard/:path*'],
// }

// 在下面不仅匹配了路由， 还要求header的Authorization必须是Bearer Token
// 查询参数的userId为123 且cookie里的session值不是active
// export const config = {
//   matcher: [
//     {
//       source: '/api/*',
//       has: [
//         {
//           type: 'header', key: 'Authorization', value: 'Bearer Token'
//         },
//         {
//           type: 'query', key: 'userId', value: '123'
//         }
//       ],
//       missing: [
//         {
//           type: 'cookie', key: 'session', value: 'active'
//         },
//       ]
//     }
//   ]
// }

// 第二种方法是使用条件语句
// export function middleware(request) {
//   if (request.nextUrl.pathname.startsWith('/about')) {
//     return NextResponse.rewrite(new URL('/about-2', request.url))
//   }
//   if (request.nextUrl.pathname.startsWith('/dashboard')) {
//     return NextResponse.rewrite(new URL('/dashboard/user', request.url))
//   }
// }

// 如何读取和设置cookies
// export function middleware(request) {
//   // 假设传入的请求 header 里 'Cookie:nextjs=fast'
//   let cookie = request.cookies.get('nextjs')
//   console.log(cookie) // { name: 'nextjs', value: 'fast', Path: '/' }
//   const allCookies = request.cookies.getAll()
//   console.log(allCookies) // [ { name: 'nextjs', value: 'fast' } ]

//   request.cookies.has('nextjs')    // true
//   request.cookies.delete('nextjs')
//   request.cookies.has('nextjs')  // false

//   // 设置 cookies
//   const response = NextResponse.next()
//   response.cookies.set('vercel', 'fast')
//   response.cookies.set({
//     name: 'vercel',
//     value: 'fast',
//     path: '/',
//   })
//   cookie = response.cookies.get('vercel')
//   console.log(cookie) // { name: 'vercel', value: 'fast', Path: '/' }

//   // 响应 header 为 'Set-Cookie:vercel=fast;path=/test'
//   return response
// }

// 如何读取和设置headers
// export function middleware(request) {
//   // clone请求头
//   const requestHeaders = new Headers(request.headers)
//   requestHeaders.set('x-hello-from-middleware1', 'hello')

//   // 你也可以在 NextResponse.rewrite 中设置请求标头 这个例子比较特殊的地方在于调用 NextResponse.next 的时候传入了一个对象用于转发 headers
//   const response = NextResponse.next({
//     request: {
//       headers: requestHeaders,
//     },
//   })

//   // 设置新响应标头 'x-hello-from-middleware2'
//   response.headers.set('x-hello-from-middleware2', 'hello')
//   return response
// }

// CORS
// const allowedOrigins = ['https://acme.com', 'https://my-app.org']
// const corsOptions = {
//   'Acess-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
//   'Acess-Control-Allow-Headers': 'Content-Type, Authorization',
// }
// export function middleware(request) {
//   const origin = request.headers.get('origin') ?? ''
//   const isAllowedOrigin = allowedOrigins.includes(origin)

//   const isPreflight = request.method === 'OPTIONS'

//   if (isPreflight) {
//     const preflightHeaders = {
//       ...(isAllowedOrigin && { 'Acess-Control-Allow-Origin': origin }),
//       ...corsOptions,
//     }
//     return NextResponse.json({}, { headers: preflightHeaders })
//   }

//   const response = NextResponse.next()

//   if (isAllowedOrigin) {
//     response.headers.set('Acess-Control-Allow-Origin', origin)
//   }

//   Object.entries(corsOptions).forEach(([key, value]) => {
//     response.headers.set(key, value)
//   })

//   return response
// }
// export const config = {
//   matcher: ['/api/:path*'],
// }


// 如何直接响应
// import { isAuthenticated } from '@lib/auth'
// export const config = {
//   matcher: ['/api/:function*']
// }
// export function middleware(request) {
//   // 鉴权判断
//   if (!isAuthenticated(request)) {
//     // 返回错误信息
//     return new NextResponse(
//       JSON.stringify({ success: false, message: 'authorized failed' }),
//       { status: 401, headers: { 'Content-Type': 'application/json' } }
//     )
//   }
// }

// export function middleware(request) {
//   return NextResponse.redirect(new URL('/blog/yayu_middleware', request.url))
// }
// export const config = {
//   matcher: '/blog/yayu',
// }

// 在下面的设置中，这里实现了除 / docs 和 / blog 作为前缀的路由之外，其他路由都自动添加上尾部斜杠
const legacyPrefixes = ['/docs', '/blog']
export default function middleware(req) {
  const { pathname } = req.nextUrl
  if (legacyPrefixes.some(prefix => pathname.startsWith(prefix))) {
    return NextResponse.next()
  }
  // 应用尾部斜杠
  if (!pathname.endsWith('/') &&
    !pathname.match(/((?!\.well-known(?:\/.*)?)(?:[^/]+\/)*[^/]+\.\w+)/)) {
    req.nextUrl.pathname += '/'
    return NextResponse.redirect(req.nextUrl)
  }
}
