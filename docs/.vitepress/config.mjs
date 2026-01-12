import { defineConfig } from 'vitepress'
const categories = ['java','python','go','frontend','database','scripts','media','ai','ios','android','macos','ubuntu','devtools','insight','life','tips']
const names = {java:'Java',python:'Python',go:'Go',frontend:'前端',database:'数据库',scripts:'脚本工具',media:'媒体处理',ai:'人工智能',ios:'iOS 开发',android:'Android 开发',macos:'macOS',ubuntu:'Ubuntu',devtools:'开发工具',insight:'深度洞察',life:'生活笔记',tips:'实用技巧'}
const sidebar = {}
for (const c of categories) sidebar[`/${c}/`] = [{ text: names[c], items: [{ text: '首页', link: `/${c}/` }] }]
export default defineConfig({
  title: 'SoloVault',
  description: 'AstralWave 的个人知识宝库',
  base: '/',
  locales: { root: { label: '简体中文', lang: 'zh-CN' } },
  head: [
    ['link', { rel: 'icon', href: '/favicon.svg' }],
    ['link', { rel: 'stylesheet', href: '/custom.css' }]
  ],
  themeConfig: {
    nav: [{ text: '首页', link: '/' }, ...categories.map(c => ({ text: names[c], link: `/${c}/` }))],
    sidebar,
    search: { provider: 'local' },
    footer: { message: 'MIT Licensed.', copyright: '© 2026 AstralWave' },
    editLink: {
      pattern: 'https://github.com/astralwaveorg/solovault/edit/main/docs/:path',
      text: '📝 在 GitHub 上改进此页'
    },    
    lastUpdated: { text: '最后更新于' },
    darkModeSwitchLabel: '主题',
    returnToTopLabel: '顶部',
    docFooter: { prev: '上一篇', next: '下一篇' }
  },
  markdown: { lineNumbers: true }
})
