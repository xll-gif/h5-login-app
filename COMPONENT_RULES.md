# Button 组件使用规则

## 组件说明

通用登录按钮组件，基于设计稿样式实现，使用 React + TypeScript 构建。

## 设计稿样式规范

- **背景色**: `#007AFF`（蓝色）
- **文字颜色**: `#FFFFFF`（白色）
- **圆角**: `4px`
- **宽度**: `300px`（可根据容器调整）
- **高度**: `44px`（固定）
- **文字大小**: `16px`
- **文字粗细**: `500 (Medium)`

## API 文档

### Props 类型

```typescript
export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'variant'> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  width?: string | number;
  fullWidth?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}
```

### 参数说明

| 参数 | 类型 | 默认值 | 说明 |
|-----|------|--------|------|
| `children` | `React.ReactNode` | - | 按钮文字（必填） |
| `variant` | `ButtonVariant` | `ButtonVariant.Primary` | 按钮样式变体 |
| `width` | `string \| number` | `undefined` | 按钮宽度，undefined 表示宽度自适应 |
| `fullWidth` | `boolean` | `false` | 是否全宽填充父容器 |
| `disabled` | `boolean` | `false` | 是否可用 |
| `onClick` | `() => void` | - | 点击事件回调 |

### ButtonVariant 枚举

| 值 | 说明 | 背景色 | 文字颜色 | 边框 |
|---|---|---|---|---|
| `ButtonVariant.Primary` | 主要按钮（默认） | `#007AFF` | `#FFFFFF` | 无 |
| `ButtonVariant.Secondary` | 次要按钮 | `#FFFFFF` | `#007AFF` | `#007AFF` (1px) |
| `ButtonVariant.Danger` | 危险按钮 | `#FF3B30` | `#FFFFFF` | 无 |

## 使用规则

### 1. 导入组件

```typescript
import { Button, ButtonVariant } from '@/components/ui/Button';
```

### 2. 主要操作按钮

用于主要操作，如登录、提交、确认等。

```typescript
<Button
  width={300}
  onClick={() => {
    // 处理登录逻辑
  }}
>
  登录
</Button>
```

### 3. 次要操作按钮

用于次要操作，如取消、返回等。

```typescript
<Button
  variant={ButtonVariant.Secondary}
  width={300}
  onClick={() => {
    // 处理取消逻辑
  }}
>
  取消
</Button>
```

### 4. 危险操作按钮

用于危险操作，如退出登录、删除等。

```typescript
<Button
  variant={ButtonVariant.Danger}
  width={300}
  onClick={() => {
    // 处理退出逻辑
  }}
>
  退出登录
</Button>
```

### 5. 禁用状态

当按钮处于禁用状态时，自动应用禁用样式。

```typescript
<Button
  disabled
  width={300}
  onClick={() => {
    // 不会触发
  }}
>
  登录
</Button>
```

### 6. 宽度设置

- **固定宽度**: 使用 `width={300}` 设置固定宽度
- **自适应宽度**: 不设置 `width` 参数，按钮宽度自适应
- **全宽填充**: 使用 `fullWidth={true}` 填充父容器宽度
- **建议**: 登录页面的操作按钮建议使用固定宽度 `300px`

### 7. 高度设置

- 按钮高度固定为 `44px`，符合 Web 设计规范
- 除非有特殊需求，否则不建议修改高度

### 8. 其他原生属性

组件支持所有原生 `button` 元素的属性（`Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'variant'>`）。

```typescript
<Button
  type="submit"
  width={300}
  onClick={handleLogin}
>
  登录
</Button>
```

## 禁止事项

1. ❌ 不要使用非设计稿规范的颜色
2. ❌ 不要修改按钮高度（除非有特殊需求）
3. ❌ 不要在按钮文字中使用特殊符号（如图标）
4. ❌ 不要嵌套按钮
5. ❌ 不要同时使用 `ButtonVariant.Secondary` 和 `ButtonVariant.Danger`
6. ❌ 不要使用 `variant` 属性（已被 Omit 移除，使用 `ButtonVariant` 枚举替代）

## 布局建议

### 垂直布局（Flex Column）

```tsx
<div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '16px' }}>
  <Button width={300} onClick={handleLogin}>
    登录
  </Button>
  
  <Button variant={ButtonVariant.Secondary} width={300} onClick={handleRegister}>
    注册
  </Button>
</div>
```

### 水平布局（Flex Row）

```tsx
<div style={{ display: 'flex', flexDirection: 'row', gap: '16px', padding: '16px' }}>
  <Button
    variant={ButtonVariant.Secondary}
    style={{ flex: 1 }}
    onClick={handleCancel}
  >
    取消
  </Button>
  
  <Button
    style={{ flex: 1 }}
    onClick={handleConfirm}
  >
    确认
  </Button>
</div>
```

## 样式自定义

组件使用内联样式实现，如需自定义样式，可以通过 `className` 或 `style` 属性覆盖。

```typescript
<Button
  className="custom-button"
  style={{ width: 300 }}
  onClick={handleLogin}
>
  登录
</Button>
```

## 可访问性

- 按钮文字应简洁明了，不超过 6 个汉字
- 避免使用纯符号或表情符号作为按钮文字
- 禁用状态应有明确的视觉反馈（半透明 + 灰色）
- 支持键盘焦点（Tab 键导航）

## 浏览器兼容性

- Chrome 90+
- Safari 14+
- Firefox 88+
- Edge 90+
- iOS Safari 14+
- Android Chrome 90+

## 版本历史

- v1.0.0 (2026-02-27): 初始版本，基于设计稿创建
