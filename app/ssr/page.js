// 在 App Router 中，页面组件默认是服务端组件
// 要实现 SSR，只需要将组件改为 async 函数，直接在其中获取数据
// 每次请求时，这个函数会在服务端执行
// getServerSideProps 只在 Pages Router（pages/ 目录）中可用。在 App Router（app/ 目录）中不支持
export default async function Page() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
    // 禁用缓存，确保每次请求都重新获取数据（类似 getServerSideProps）
    cache: 'no-store'
  })
  const data = await res.json()

  return (
    <p>{JSON.stringify(data)}</p>
  )
}