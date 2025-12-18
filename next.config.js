module.exports = {
  // 重定向 浏览器地址会变化 服务器返回301/302 浏览器发起新请求 用户能看到URL变化 但看不到页面的变化
  async redirects() {
    return [
      {
        source: '/blog/yayu',
        destination: '/blog/yayu_redirects',
        permanent: true,
      },
    ]
  },
  // 内部重写 浏览器地址不变 服务器内部将请求转发到另一个路径 用户看不到路径变化 但可以看到新页面
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/blog/yayu',
          destination: '/blog/yayu_beforeFiles',
        },
      ],
      afterFiles: [
        {
          source: '/blog/yayu',
          destination: '/blog/yayu_afterFiles',
        },
      ],
      fallback: [
        {
          source: '/blog/yayu',
          destination: `/blog/yayu_fallback`,
        },
      ],
    }
  },
  // 跳过尾部斜杠重定向 当你设置 skipTrailingSlashRedirect为 true 后，假设再次访问 /about/，URL 依然会是 /about/
  skipTrailingSlashRedirect: true,
}

// 在你的配置中，如果访问 /blog/yayu：
// 先检查 redirects → 如果匹配，会重定向到 /blog/yayu_redirects（URL 会改变）
// 如果没有 redirects，检查 beforeFiles → 内部重写到 /blog/yayu_beforeFiles
// 如果 beforeFiles 没匹配，检查文件系统 → 看是否存在 /blog/yayu/page.js
// 如果文件不存在，检查 afterFiles → 内部重写到 /blog/yayu_afterFiles
// 如果 afterFiles 没匹配，检查动态路由 → 看是否有 /blog/[id]/page.js
// 如果都没匹配，执行 fallback → 内部重写到 /blog/yayu_fallback
