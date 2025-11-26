export default async function Page({ params }) {
  // 在Nextjs15+版本中，params现在是一个Promise，需要使用await或React.use()来解包，让我查看当前文件并修复它
  const { slug } = await params
  return (
    <div>
      <h1>Blog Post {slug}</h1>
    </div>
  )
}