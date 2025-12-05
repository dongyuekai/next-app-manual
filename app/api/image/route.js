export async function GET() {
  // Next.js拓展了原生的fetch方法 会自动缓存fetch的结果
  const res = await fetch('https://api.thecatapi.com/v1/images/search')
  // next: { revalidate: 5 } 表示每 5 秒重新验证 会清除缓存 重新刷新
  // const res = await fetch('https://api.thecatapi.com/v1/images/search', {
  //   next: { revalidate: 5 }, //  每 5 秒重新验证
  // })
  const data = await res.json()
  console.log(data)
  return Response.json(data)
}