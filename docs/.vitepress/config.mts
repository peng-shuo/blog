import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/blog/',
  title: '积跬步',
  description: '个人博客，记录技术探索、学习心得、工作笔记及生活感悟。',
  lang: 'zh-CN',
  head: [
    ['link', { rel: 'icon', href: '/blog/favicon.ico' }]
  ],
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '归档', link: '/archive' },
      { text: '标签', link: '/tags' }
    ],
    sidebar: [
      {
        text: '学习笔记',
        items: [
          { text: '开始记录', link: '/posts/getting-started' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/peng-shuo/blog' }
    ]
  }
})
