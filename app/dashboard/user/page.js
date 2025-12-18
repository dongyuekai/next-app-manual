export default function DashboardUserPage() {
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">Dashboard User Page</h1>
      <p className="mt-4">
        这是通过 middleware rewrite 重写后的页面。
        访问 /dashboard 时会显示这个页面的内容，但 URL 仍然是 /dashboard
      </p>
    </div>
  )
}



