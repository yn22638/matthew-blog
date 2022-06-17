# matthew-blog

### 介绍

### 目录

- 结构

  ```
  ├── docs
  │   ├── .vitepress (可选的)
  │   │   ├── theme (可选的)
  │   │   │   ├── custom.styl
  │   │   │   └── index.js
  │   │   ├── public (可选的)
  │   │   ├── config.js (可选的)
  │   ├── README.md
  │   ├── guide
  │   │   └── README.md
  │   └── config.md
  │
  └── package.json
  ```

- 介绍
  - docs/.vitepress: 用于存放全局的配置、组件、静态资源等。
  - docs/.vitepress/theme: 用于存放本地主题。
  - docs/.vitepress/theme/index.js: 将自定义 css 样式抛出。
  - docs/.vitepress/theme/custom.styl: 用于定义自定义 css 样式。
  - docs/.vitepress/public: 静态资源目录。
  - docs/.vitepress/config.js: 配置文件的入口文件，也可以是 YML 或 toml

- 问题记录
  - 打包发布以后页面都是404
  - base二级域名必须是./ 盲猜是githubPages的原因
