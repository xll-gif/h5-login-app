# H5 登录应用

## 📖 项目简介

这是一个基于 React + TypeScript + Vite 的 H5 登录应用，实现了完整的登录功能，包括表单验证、错误处理、Mock API 联调等。

## 🚀 快速开始

### 1. 安装依赖

```bash
cd multi-platform-apps/h5-login-app
npm install
```

### 2. 启动开发服务器

```bash
npm run dev
```

应用将在 `http://localhost:3000` 启动。

### 3. 构建生产版本

```bash
npm run build
```

### 4. 预览生产版本

```bash
npm run preview
```

## 📁 项目结构

```
h5-login-app/
├── src/
│   ├── api/
│   │   ├── types.ts          # API 类型定义
│   │   └── mockApi.ts        # Mock API 服务
│   ├── components/
│   │   ├── pages/
│   │   │   ├── SplashPage.tsx    # 启动页
│   │   │   ├── LoginPage.tsx     # 登录页
│   │   │   └── HomePage.tsx      # 首页
│   │   └── ui/
│   │       ├── Button.tsx        # 按钮组件
│   │       └── InputField.tsx    # 输入框组件
│   ├── App.tsx                  # 主应用组件
│   ├── main.tsx                 # 入口文件
│   └── index.css                # 全局样式
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🎯 功能特性

### 已实现功能

- ✅ 启动页面（自动跳转）
- ✅ 登录表单（邮箱/密码）
- ✅ 实时表单验证
  - 邮箱格式验证
  - 密码长度验证
- ✅ 错误提示
- ✅ 加载状态
- ✅ 密码显示/隐藏切换
- ✅ Mock API 联调
- ✅ Token 存储（localStorage）
- ✅ 路由导航
- ✅ 登录状态管理
- ✅ 退出登录

### 待实现功能

- [ ] 记住密码
- [ ] 找回密码
- [ ] 注册入口
- [ ] 第三方登录
- [ ] 自动填充
- [ ] 真实 API 集成

## 🔧 技术栈

- **框架**: React 18
- **语言**: TypeScript
- **构建工具**: Vite 5
- **路由**: React Router DOM 6
- **HTTP 客户端**: Axios（已安装，暂未使用）
- **状态管理**: React Hooks（useState, useEffect）

## 🧪 测试账号

### 测试账号 1
- **邮箱**: test@example.com
- **密码**: password123

### 测试账号 2
- **邮箱**: admin@example.com
- **密码**: admin123

## 📝 开发说明

### Mock API 服务

Mock API 服务位于 `src/api/mockApi.ts`，包含：

- `loginApi()` - 登录接口
- `validateEmail()` - 邮箱验证
- `validatePassword()` - 密码验证

### 组件使用说明

#### Button 组件

```tsx
import { Button } from './components/ui/Button';

<Button
  onClick={handleClick}
  fullWidth
  disabled={isDisabled}
>
  点击按钮
</Button>
```

#### InputField 组件

```tsx
import { InputField, InputType } from './components/ui/InputField';

<InputField
  placeholder="请输入邮箱"
  value={email}
  onChange={setEmail}
  inputType={InputType.Email}
  isError={isError}
  errorMessage="邮箱格式错误"
  fullWidth
/>
```

## 🎨 设计规范

### 颜色规范

```css
--primary-color: #007AFF;
--secondary-color: #5AC8FA;
--background-color: #FFFFFF;
--text-color: #333333;
--border-color: #DDDDDD;
--error-color: #FF3B30;
--success-color: #34C759;
```

### 字体规范

```css
--font-size-h1: 28px;
--font-size-h2: 24px;
--font-size-body: 16px;
--font-size-caption: 14px;
--font-size-small: 12px;
```

### 间距规范

```css
--spacing-xs: 4px;
--spacing-sm: 8px;
--spacing-md: 16px;
--spacing-lg: 24px;
--spacing-xl: 32px;
```

## 📱 浏览器兼容性

- Chrome 90+
- Safari 14+
- Firefox 88+
- Edge 90+

## 🚨 注意事项

1. **Token 存储**: 当前使用 `localStorage` 存储 Token，生产环境建议使用更安全的存储方式（如 Cookie + HttpOnly）。
2. **Mock API**: 当前使用 Mock API 服务，生产环境需要替换为真实 API。
3. **路由守卫**: 当前使用简单的路由守卫，建议使用更完善的权限管理方案。
4. **错误处理**: 当前错误处理较简单，建议添加更详细的错误日志和上报机制。

## 🔗 相关链接

- **需求文档**: [REQ-001 登录页面](https://github.com/xll-gif/workflow-automation/issues/1)
- **工作流仓库**: [workflow-automation](https://github.com/xll-gif/workflow-automation)

## 📄 许可证

MIT License

---

**最后更新**: 2026-03-02
