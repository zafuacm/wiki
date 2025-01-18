import { DefaultTheme, defineConfig } from 'vitepress'
import mdFootnote from 'markdown-it-footnote'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "ZAFU ACM",
  description: "浙农林 ACM 集训队",

  lastUpdated: true,
  cleanUrls: true,
  markdown: {
    config: (md) => {
      md.use(mdFootnote)
    },
    math: true
  },
  sitemap: {
    hostname: 'https://zafuacm.cn/'
  },


  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],

    // 修正渲染
    ['style', {}, `mjx-container > svg { display: inline-block; }`],
    // Google Analytics
    ['script', { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-2ZJJQNKSP7' }],
    ['script', {}, `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-2ZJJQNKSP7');`],
    // Baidu Analytics
    ['meta', { name: 'baidu-site-verification', content: 'codeva-3xs6buZQq7' }],
    // 360 Analytics
    ['meta', { name: '360-site-verification', content: '5f6b7e089e84559f4236b519637a2d50' }],
    // Sougou Analytics
    ['meta', { name: 'sogou_site_verification', content: 'BCj2PJBWHq' }],
    // Bytedance Analytics
    ['meta', { name: 'bytedance-verification-code', content: 'TKlifQgLT+gHFABWwZMH' }],
    // Shenma Analytics
    ['meta', { name: 'shenma-site-verification', content: '087f881b8e2608d58766e411ceef89f0_1688214039' }],
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    logo: '/favicon.ico',

    nav: [
      { text: '首页', link: '/' },
      {
        text: '学习资源',
        items: [
          { text: '基础', link: '/basic/index', },
          { text: '字符串', link: '/string/index', },
          { text: '数学', link: '/math/index', },
          { text: '数据结构', link: '/struct/index', },
        ]
      },
      { text: '竞赛成绩', link: '/about/history' },
      {
        text: '关于集训队',
        items: [
          { text: '集训队简介', link: '/about/introduction' },
          { text: '集训队章程', link: '/about/constitution' }

        ]
      },
      { text: 'OJ', link: 'https://oj.zafuacm.cn/' }
    ],

    editLink: {
      pattern: 'https://github.com/zafuacm/wiki/edit/main/docs/:path',
      text: '在 GitHub 上编辑本页'
    },

    lastUpdated: {
      text: '最近更新于',
      formatOptions: { dateStyle: 'short', timeStyle: 'short' }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zafuacm/wiki/' }
    ],

    footer: {
      message: '<a href="https://beian.miit.gov.cn/" target="_blank">浙ICP备17046339号-2</a>',
      copyright: 'Copyright © 2025 ZAFU ACM Team'
    },

    search: { provider: 'local' },
    externalLinkIcon: true,
    outline: { level: 'deep', label: '目录' },


    sidebar: sidebarItems()
  }
})

function sidebarItems(): DefaultTheme.Sidebar {
  return {
    '/basic/': [
      {
        text: '序',
        items: [
          { text: '序', link: '/basic/' },
          { text: '简介', link: '/basic/intro' },
        ]
      },
      {
        text: '语法基础',
        items: [
          { text: '环境配置', link: '/basic/grammer/enviroment' },
          { text: '语法学习', link: '/basic/grammer/intro' },
          { text: 'Markdown', link: '/basic/grammer/markdown' }
        ]
      },
      {
        text: '算法基础',
        items: [
          { text: '序', link: '/basic/basic' },
          { text: '复杂度', link: '/basic/complexity' },
          { text: '递归', link: '/basic/divide' },
          { text: '二分', link: '/basic/binary' },
          { text: '贪心', link: '/basic/greedy' },
          { text: '递推初步', link: '/basic/recursion' },
          { text: '动态规划', link: '/basic/dp' },
          { text: '前缀和 & 差分', link: '/basic/prefix-sum' },
          { text: '快速幂', link: '/basic/quick-pow' },
          { text: '继续提升', link: '/basic/how-to-train' }
        ]
      }
    ],
    '/about/': [
      {
        text: '宣传窗',
        items: [
          { text: '集训队简介', link: '/about/introduction' },
          { text: '如何加入', link: '/about/join-us' },
          { text: '队员风采', link: '/about/honor' },
          { text: '公众号', link: '/about/wechat' }
        ]
      },
      {
        text: '集训队信息',
        items: [
          { text: '集训队章程', link: '/about/constitution' },
          { text: '往年竞赛成绩', link: '/about/history' },
          { text: '常见问题', link: '/about/faq' },
          { text: '参与文档建设', link: '/about/support' }
        ]
      }
    ],
    '/string/': [
      {
        text: '字符串',
        items: [
          { text: '简介', link: '/string/' },
          { text: '最小表示法', link: '/string/minimal-string' }
        ]
      }
    ],
    '/math/': [
      { text: '简介', link: '/math/' },
      { text: '筛法', link: '/math/sieve' },
      { text: '中国剩余定理', link: '/math/crt' },
      { text: '基础博弈', link: '/math/game-theory' },
      { text: 'Dirichlet 卷积', link: '/math/dirichlet' },
      {
        text: '多项式',
        items: [
          { text: '简介', link: '/math/poly/index' },
          { text: 'FFT', link: '/math/poly/fft' },
          { text: '卷积', link: '/math/poly/convolution' },
          { text: '牛顿迭代', link: '/math/poly/newton' }
        ]
      },
      {
        text: '积性函数',
        items: [
          { text: '简介', link: '/math/multiplicative-function/index' },
          { text: 'Min_25 筛法', link: '/math/multiplicative-function/min25' },
          { text: '州阁筛', link: '/math/multiplicative-function/zhouge' },
          { text: 'Powerful Number 筛', link: '/math/multiplicative-function/pn' }
        ]
      }
    ],
    '/struct/': [
      {
        text: '数据结构',
        items: [
          { text: '简介', link: '/struct/' },
          { text: '树状数组', link: '/struct/fenwick-tree' },
          { text: 'ST 表', link: '/struct/sparse-table' }
        ]
      }
    ],
  }
}
