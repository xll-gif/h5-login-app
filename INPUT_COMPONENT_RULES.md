# InputField 组件使用规则

## 组件说明

通用输入框组件，基于设计稿样式实现，使用 React + TypeScript 构建。

## 设计稿样式规范

- **边框颜色**: `#DDDDDD`（浅灰色）
- **边框宽度**: `1px`
- **圆角**: `4px`
- **宽度**: `300px`（可根据容器调整）
- **高度**: `40px`（固定）
- **文字大小**: `16px`
- **文字颜色**: `#333333`
- **占位符颜色**: `#999999`
- **内边距**: `12px`

## API 文档

### Props 类型

```typescript
export interface InputFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange'> {
  title?: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  inputType?: InputType;
  isPassword?: boolean;
  disabled?: boolean;
  isError?: boolean;
  errorMessage?: string;
  width?: string | number;
  fullWidth?: boolean;
  height?: string;
}
```

### 参数说明

| 参数 | 类型 | 默认值 | 说明 |
|-----|------|--------|------|
| `title` | `string \| undefined` | `undefined` | 输入框标题 |
| `placeholder` | `string` | - | 占位符（必填） |
| `value` | `string` | - | 输入值（必填） |
| `onChange` | `(value: string) => void` | - | 值变更回调（必填） |
| `inputType` | `InputType` | `InputType.Text` | 键盘类型 |
| `isPassword` | `boolean` | `false` | 是否密码输入 |
| `disabled` | `boolean` | `false` | 是否禁用 |
| `isError` | `boolean` | `false` | 是否有错误 |
| `errorMessage` | `string \| undefined` | `undefined` | 错误提示 |
| `width` | `string \| number \| undefined` | `undefined` | 输入框宽度，undefined 表示宽度自适应 |
| `fullWidth` | `boolean` | `false` | 是否全宽填充父容器 |
| `height` | `string` | `'40px'` | 输入框高度（建议保持默认） |

### InputType 枚举

| 值 | 说明 |
|---|------|
| `InputType.Text` | 默认键盘 |
| `InputType.Number` | 数字键盘 |
| `InputType.Email` | 邮箱键盘 |
| `InputType.Tel` | 电话键盘 |
| `InputType.Password` | 密码键盘 |

## 使用规则

### 1. 导入组件

```typescript
import { InputField, InputType } from '@/components/ui/InputField';
```

### 2. 基础输入框

```typescript
const [email, setEmail] = useState('');

<InputField
  placeholder="请输入邮箱"
  value={email}
  onChange={setEmail}
  inputType={InputType.Email}
  width={300}
/>
```

### 3. 带标题的输入框

```typescript
const [password, setPassword] = useState('');

<InputField
  title="密码"
  placeholder="请输入密码"
  value={password}
  onChange={setPassword}
  isPassword
  width={300}
/>
```

### 4. 错误状态

```typescript
const [email, setEmail] = useState('');
const [isError, setIsError] = useState(false);

<InputField
  title="邮箱"
  placeholder="请输入邮箱"
  value={email}
  onChange={setEmail}
  isError={isError}
  errorMessage="邮箱格式不正确"
  width={300}
/>
```

### 5. 禁用状态

```typescript
const [disabledText, setDisabledText] = useState('已禁用');

<InputField
  placeholder="禁用状态"
  value={disabledText}
  onChange={setDisabledText}
  disabled
  width={300}
/>
```

### 6. 手机号输入

```typescript
const [phone, setPhone] = useState('');

<InputField
  title="手机号"
  placeholder="请输入手机号"
  value={phone}
  onChange={setPhone}
  inputType={InputType.Tel}
  width={300}
/>
```

### 7. 数字输入

```typescript
const [amount, setAmount] = useState('');

<InputField
  title="金额"
  placeholder="请输入金额"
  value={amount}
  onChange={setAmount}
  inputType={InputType.Number}
  width={300}
/>
```

### 8. 使用 useState 管理状态

```typescript
import { useState } from 'react';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <InputField
        title="邮箱"
        placeholder="请输入邮箱"
        value={email}
        onChange={setEmail}
        inputType={InputType.Email}
        width={300}
      />

      <InputField
        title="密码"
        placeholder="请输入密码"
        value={password}
        onChange={setPassword}
        isPassword
        width={300}
      />
    </div>
  );
}
```

## 布局建议

### 垂直表单布局

```tsx
<div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '16px' }}>
  <InputField
    title="邮箱"
    placeholder="请输入邮箱"
    value={email}
    onChange={setEmail}
    inputType={InputType.Email}
    width={300}
  />

  <InputField
    title="密码"
    placeholder="请输入密码"
    value={password}
    onChange={setPassword}
    isPassword
    width={300}
  />
</div>
```

### 错误验证流程

```typescript
function validateEmail(email: string): boolean {
  const emailRegex = /^[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,64}$/;
  return emailRegex.test(email);
}

function handleSubmit() {
  if (!validateEmail(email)) {
    setIsError(true);
    // 可以设置错误提示
  } else {
    // 提交逻辑
  }
}
```

## 禁止事项

1. ❌ 不要使用非设计稿规范的颜色
2. ❌ 不要修改输入框高度（除非有特殊需求）
3. ❌ 不要在占位符中使用特殊符号
4. ❌ 不要嵌套输入框
5. ❌ 不要使用 `type` 属性（已被 Omit 移除，使用 `inputType` 或 `isPassword` 替代）
6. ❌ 不要使用 `onChange` 属性的原生用法（使用自定义回调）

## 样式自定义

组件使用内联样式实现，如需自定义样式，可以通过 `className` 或 `style` 属性覆盖。

```typescript
<InputField
  className="custom-input"
  style={{ width: 300 }}
  value={email}
  onChange={setEmail}
  placeholder="请输入邮箱"
/>
```

## 可访问性

- 输入框标题应简洁明了，不超过 4 个汉字
- 占位符应清晰说明输入内容
- 错误提示应准确描述问题
- 支持键盘焦点（Tab 键导航）
- 支持屏幕阅读器

## 浏览器兼容性

- Chrome 90+
- Safari 14+
- Firefox 88+
- Edge 90+
- iOS Safari 14+
- Android Chrome 90+

## 版本历史

- v1.0.0 (2026-02-27): 初始版本，基于设计稿创建
