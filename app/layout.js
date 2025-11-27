// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>
//         123
//         {children}
//       </body>
//     </html>
//   )
// }
// layout可以嵌套传递，此处的根组件的layout必须包含html和body标签，其他布局不能包含这些标签。
// 默认根组件是服务端组件，且不能设置为客户端组件。

import Link from 'next/link'
import './globals.css'

export default function RootLayout({ children, team, analytics }) {
  return (
    <html lang="en">
      <body className='p-6'>
        <div className='p-10 mb-6 bg-sky-600 text-while rounded-xl'>
          Parallel Routes Example
        </div>
        <nav className="flex items-center justify-center gap-10 text-blue-600 mb-6">
          <Link href="/">Home</Link>
          <Link href="/page-views">Page Views</Link>
          <Link href="/visitors">Visitors</Link>
        </nav>
        <div className='flex gap-6'>
          {team}
          {analytics}
        </div>
        {children}
      </body>
    </html>
  )
}