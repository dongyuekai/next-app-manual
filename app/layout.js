export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        123
        {children}
      </body>
    </html>
  )
}
// layout可以嵌套传递，此处的根组件的layout必须包含html和body标签，其他布局不能包含这些标签。
// 默认根组件是服务端组件，且不能设置为客户端组件。