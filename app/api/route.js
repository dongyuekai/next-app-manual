// export async function GET(request) {
//   const headersList = new Headers(request.headers)
//   const referer = headersList.get('referer')
//   const ua = headersList.get('user-agent')
//   return Response.json({ referer, ua })
// }

// import { headers } from 'next/headers'

// export async function GET() {
//   const headerList = await headers()
//   const referer = headerList.get('referer')

//   return new Response('Hello, World!', {
//     status: 200,
//     headers: {
//       referer
//     }
//   })
// }

// 重定向
// import { redirect } from 'next/navigation'

// export async function GET() {
//   redirect('https://nextjs.org/')
// }

// 如何获取请求体内容 请求体为raw类型
// import { NextResponse } from 'next/server'
// export async function POST(request) {
//   const res = await request.json()
//   return NextResponse.json({ res })
// }

// 请求体是FormData类型
// import { NextResponse } from 'next/server'
// export async function POST(request) {
//   const formData = await request.formData()
//   const name = formData.get('name')
//   const age = formData.get('age')
//   return NextResponse.json({ name, age })
// }

// 跨域请求 如何设置CORS
// export async function GET(request) {
//   return new Response('Hello, Next.js!', {
//     status: 200,
//     headers: {
//       'Access-Control-Allow-Origin': '*',
//       'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
//       'Access-Control-Allow-Headers': 'Content-Type, Authorization',
//     },
//   })
// }

