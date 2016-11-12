### 目录

```
.
├── configs ( 一些配置文件的保存 )
├── markdown ( 一个基于Web的简单Markdown编辑器 )
|   ├── css
|   ├── images
|   ├── js
|   ├── lib
|   |    └── styles ( highlight主题 )
|   └──  index.html
├── GreasyFork (猴油脚本)
├── page-blog ( 仿羡辙的纸张效果blog )
├── spider ( node爬虫 )
├── tools
|   └──  utils.js ( 通用方法整理 )
|   └──  server.js ( node代理 )
├── package.json
├── test ( TDD/BDD 浏览器测试 by mocha测试框架 + chai断言库 )
|   ├── spec
|   |    └── text.js
|   └──  index.html
└── test.js ( TDD单元测试 by ava )
```
[猴油脚本](https://greasyfork.org/zh-CN/users/54454-%E8%A9%B9%E9%9F%AC)

### Test

```bach
ava test.js
```