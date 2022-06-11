import { nav } from './utils/nav'
module.exports = {
  // 获取每个文件最后一次 git 提交的 UNIX 时间戳(ms)，同时它将以合适的日期格式显示在每一页的底部
  lastUpdated: true, // string | boolean
  // 启动页面丝滑滚动
  smoothScroll: true,
  title: '魔晶', // 网站标题
  description:
    '魔晶代表有一种魔力深深吸引着每个人，但原来到此网站的所有人都有收货.', //网站描述
  base: '/bat/', //  部署时的路径 默认 /  可以使用二级地址 /base/
  // lang: 'en-US', //语言
  // 打包目录
  dest: './dist',
  // 网页头部配置，引入需要图标，css，js
  head: [
    // 改变title的图标
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico', //图片放在public文件夹下
      },
    ],
  ],
  // 使用插件
  // plugins: [
  //   '@vuepress/active-header-links',
  //   '@vuepress/back-to-top',
  //   '@vuepress/medium-zoom',
  //   '@vuepress/nprogress',
  //   [
  //     '@vuepress/plugin-search',
  //     {
  //       locales: {
  //         '/': {
  //           placeholder: 'Search',
  //         },
  //         '/zh/': {
  //           placeholder: '搜索',
  //         },
  //       },
  //     },
  //   ],
  // ],
  // 主题配置
  themeConfig: {
    logo: '/favicon.ico',
    // 获取每个文件最后一次 git 提交的 UNIX 时间戳(ms)，同时它将以合适的日期格式显示在每一页的底部
    lastUpdated: 'Last Updated', // string | boolean
    // 启动页面丝滑滚动
    smoothScroll: true,
    // 导航栏配置
    nav,
    sidebar: {
      // '/guide': getSidebar(),
      '/front-end': getFrontEndSidebar(),
    },
  },
}

function getFrontEndSidebar() {
  return [
    {
      text: 'html',
      // collapsible: true,
      collapsible: true,
      items: [
        { text: '基础', link: '/front-end/html/' },
        { text: '进阶', link: '/front-end/html/advanced' },
      ],
      sidebarDepth: 3,
    },
    {
      text: 'css',
      collapsible: true,
      items: [
        { text: '基础', link: '/front-end/css/' },
        { text: '进阶', link: '/front-end/css/advanced' },
      ],
    },
  ]
}

function getSidebar() {
  return [
    {
      text: 'HTML',
      children: [
        { text: '基础', link: '/HTML/' },
        { text: '进阶', link: '/HTML/advanced' },
      ],
      sidebarDepth: 3,
    },
    {
      text: 'CSS',
      children: [
        { text: '基础', link: '/CSS/' },
        { text: '进阶', link: '/CSS/advanced' },
      ],
    },
    {
      text: 'Javascript',
      children: [
        { text: '基础', link: '/Javascript/' },
        { text: '进阶', link: '/Javascript/advanced' },
        { text: '进阶', link: '/Javascript/nightmare' },
      ],
    },
    {
      text: 'Vue',
      children: [
        { text: '基础', link: '/Vue/' },
        { text: '进阶', link: '/Vue/advanced' },
      ],
    },
    {
      text: '浏览器',
      children: [
        { text: '基础', link: '/Vue/' },
        { text: '进阶', link: '/Vue/advanced' },
      ],
    },
    {
      text: '网络',
      children: [
        { text: '基础', link: '/Network/' },
        { text: '进阶', link: '/Network/advanced' },
      ],
    },
    {
      text: '安全',
      children: [
        { text: '基础', link: '/Security/' },
        { text: '进阶', link: '/Security/advanced' },
      ],
    },
    {
      text: '面经',
      children: [
        { text: '基础', link: '/Experience/' },
        { text: '进阶', link: '/Experience/advanced' },
      ],
    },
  ]
}
