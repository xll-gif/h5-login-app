# H5 登录应用

## 项目概述
基于 React 18 + TypeScript + Vite 实现的企业级登录应用，支持多端联调。

## 技术栈
- **语言**: TypeScript 5.0+
- **UI 框架**: React 18
- **构建工具**: Vite 5.0+
- **路由**: React Router v6
- **HTTP 客户端**: Axios
- **状态管理**: React Hooks (useState, useEffect)
- **Mock 服务**: MSW (Mock Service Worker)
- **表单验证**: 自定义 Hook
- **样式**: TailwindCSS + CSS Modules

## 功能特性
- 用户登录（用户名/密码）
- 表单验证
- 加载状态提示
- 错误处理
- Mock 数据联调支持
- SPA 单页应用

## 项目结构
```
h5-login-app/
├── public/
│   └── assets/                        # 静态资源
├── src/
│   ├── App.tsx                        # 应用根组件
│   ├── main.tsx                       # 应用入口
│   ├── vite-env.d.ts                  # Vite 类型声明
│   ├── components/
│   │   ├── pages/
│   │   │   ├── LoginPage.tsx          # 登录页面
│   │   │   └── HomePage.tsx           # 首页
│   │   ├── ui/
│   │   │   ├── Button.tsx             # 按钮组件
│   │   │   ├── Input.tsx              # 输入框组件
│   │   │   └── Loading.tsx            # 加载提示组件
│   │   └── layout/
│   │       └── Layout.tsx             # 布局组件
│   ├── hooks/
│   │   └── useForm.ts                 # 表单验证 Hook
│   ├── services/
│   │   ├── api.ts                     # API 服务
│   │   └── mock.ts                    # Mock 数据
│   ├── types/
│   │   └── index.ts                   # 类型定义
│   ├── utils/
│   │   └── validator.ts               # 验证工具
│   └── styles/
│       └── global.css                 # 全局样式
├── index.html                         # HTML 模板
├── package.json                       # 依赖配置
├── tsconfig.json                      # TypeScript 配置
├── vite.config.ts                     # Vite 配置
├── tailwind.config.js                 # TailwindCSS 配置
└── mockServiceWorker.js               # MSW 配置
```

## 开发说明
- 安装依赖：`npm install`
- 启动开发服务器：`npm run dev`
- 构建生产版本：`npm run build`
- 运行测试：`npm run test`

## 组件映射
- 通用按钮 -> `<Button />`
- 通用输入框 -> `<Input />`
- 通用图片 -> `<img />` 或 Next.js `<Image />`

## 生成说明
本项目由自动化工作流生成，基于以下输入：
- 需求文档：GitHub Issue
- 设计稿：MasterGo（通过 Magic MCP 集成）
- API 定义：Postman Collection
