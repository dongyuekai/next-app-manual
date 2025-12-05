import { NextResponse } from 'next/server'
// export async function GET(request) {
//   const token = request.cookies.get('token')
//   return NextResponse.json({ data: new Date().toLocaleTimeString() })
// }

export const dynamic = 'force-dynamic'
export async function GET() {
  return NextResponse.json({ data: new Date().toLocaleTimeString() })
}

