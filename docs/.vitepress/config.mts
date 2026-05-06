import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/blog/',
  title: 'Peng 的学习博客',
  description: '记录前端与工程化学习过程',
  lang: 'zh-CN',
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
