import React, { InputHTMLAttributes, useState, ChangeEvent } from 'react';

/**
 * 键盘类型枚举
 */
export enum InputType {
  /** 默认键盘 */
  Text = 'text',
  /** 数字键盘 */
  Number = 'number',
  /** 邮箱键盘 */
  Email = 'email',
  /** 电话键盘 */
  Tel = 'tel',
  /** 密码键盘 */
  Password = 'password',
}

/**
 * InputField 组件属性
 */
export interface InputFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange'> {
  /** 输入框标题 */
  title?: string;
  
  /** 占位符（必填） */
  placeholder: string;
  
  /** 输入值绑定（必填） */
  value: string;
  
  /** 值变更回调（必填） */
  onChange: (value: string) => void;
  
  /** 键盘类型（默认：InputType.Text） */
  inputType?: InputType;
  
  /** 是否密码输入（默认：false） */
  isPassword?: boolean;
  
  /** 是否禁用（默认：false） */
  disabled?: boolean;
  
  /** 是否有错误（默认：false） */
  isError?: boolean;
  
  /** 错误提示 */
  errorMessage?: string;
  
  /** 输入框宽度（默认：null，宽度自适应） */
  width?: string | number;
  
  /** 是否全宽（默认：false） */
  fullWidth?: boolean;
  
  /** 输入框高度（默认：40px） */
  height?: string;
}

/**
 * 通用输入框组件
 *
 * 基于设计稿样式：
 * - 边框: #DDDDDD
 * - 边框宽度: 1px
 * - 圆角: 4px
 * - 高度: 40px
 * - 内边距: 12px
 *
 * 使用规则：
 * 1. 默认使用单行文本输入
 * 2. 密码输入设置 isPassword={true}
 * 3. 邮箱输入设置 inputType={InputType.Email}
 * 4. 输入框宽度建议使用固定宽度（如 300px）或 fullWidth
 * 5. 输入框高度固定为 40px
 * 6. 错误状态设置 isError={true}
 *
 * @param props 输入框属性
 */
export const InputField: React.FC<InputFieldProps> = ({
  title,
  placeholder,
  value,
  onChange,
  inputType = InputType.Text,
  isPassword = false,
  disabled = false,
  isError = false,
  errorMessage,
  width,
  fullWidth = false,
  height = '40px',
  className = '',
  ...props
}) => {
  // 处理值变更
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  // 获取输入框类型
  const getInputType = (): string => {
    if (isPassword) return 'password';
    return inputType;
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
      {/* 标题 */}
      {title && (
        <label
          style={{
            fontSize: '14px',
            color: '#333333',
            fontWeight: isError ? '600' : '400',
          }}
        >
          {title}
        </label>
      )}

      {/* 输入框容器 */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        {/* 错误图标 */}
        {title && isError && (
          <span
            style={{
              display: 'inline-flex',
              width: '16px',
              height: '16px',
              color: '#FF3B30',
              fontSize: '16px',
            }}
          >
            ⚠
          </span>
        )}

        {/* 输入框 */}
        <input
          type={getInputType()}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          disabled={disabled}
          className={`input-field ${isError ? 'input-field--error' : ''} ${className}`}
          style={{
            height,
            padding: '0 12px',
            borderRadius: '4px',
            fontSize: '16px',
            color: '#333333',
            backgroundColor: '#FFFFFF',
            border: `1px solid ${isError ? '#FF3B30' : '#DDDDDD'}`,
            outline: 'none',
            transition: 'all 0.2s ease',
            cursor: disabled ? 'not-allowed' : 'text',
            width: width ? (typeof width === 'number' ? `${width}px` : width) : '100%',
            opacity: disabled ? '0.5' : '1',
          }}
          {...props}
        />
      </div>

      {/* 错误提示 */}
      {isError && errorMessage && (
        <span
          style={{
            fontSize: '12px',
            color: '#FF3B30',
            paddingLeft: '16px',
          }}
        >
          {errorMessage}
        </span>
      )}
    </div>
  );
};

export default InputField;
