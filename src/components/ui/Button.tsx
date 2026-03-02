import React, { ButtonHTMLAttributes } from 'react';

/**
 * 按钮样式变体
 */
export enum ButtonVariant {
  /** 主要按钮（蓝色背景，白色文字） */
  Primary = 'primary',
  
  /** 次要按钮（白色背景，蓝色文字，蓝色边框） */
  Secondary = 'secondary',
  
  /** 危险按钮（红色背景，白色文字） */
  Danger = 'danger',
}

/**
 * Button 组件属性
 */
export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'variant'> {
  /** 按钮文字 */
  children: React.ReactNode;
  
  /** 按钮样式变体（默认：Primary） */
  variant?: ButtonVariant;
  
  /** 按钮宽度（默认：null，宽度自适应） */
  width?: string | number;
  
  /** 是否全宽（默认：false） */
  fullWidth?: boolean;
  
  /** 是否禁用（默认：false） */
  disabled?: boolean;
  
  /** 点击事件 */
  onClick?: () => void;
}

/**
 * 通用登录按钮组件
 *
 * 基于设计稿样式：
 * - 背景色: #007AFF
 * - 文字颜色: #FFFFFF
 * - 圆角: 4px
 * - 高度: 44px
 *
 * 使用规则：
 * 1. 主要操作按钮使用 variant={ButtonVariant.Primary}（默认）
 * 2. 次要操作按钮使用 variant={ButtonVariant.Secondary}
 * 3. 危险操作按钮使用 variant={ButtonVariant.Danger}
 * 4. 禁用状态设置 disabled={true}
 * 5. 按钮宽度建议使用固定宽度（如 300px）或 fullWidth
 * 6. 按钮高度固定为 44px
 *
 * @param props 按钮属性
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  variant = ButtonVariant.Primary,
  width,
  fullWidth = false,
  disabled = false,
  onClick,
  className = '',
  ...props
}) => {
  // 获取按钮样式类名
  const getButtonClasses = (): string => {
    const baseClasses = 'button';
    const variantClasses = `button--${variant}`;
    const disabledClasses = disabled ? 'button--disabled' : '';
    const widthClasses = fullWidth ? 'button--full-width' : '';
    
    return [baseClasses, variantClasses, disabledClasses, widthClasses, className]
      .filter(Boolean)
      .join(' ');
  };

  // 获取按钮样式
  const getButtonStyles = () => {
    const styles: React.CSSProperties = {
      height: '44px',
      padding: '0 20px',
      borderRadius: '4px',
      fontSize: '16px',
      fontWeight: '500',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'all 0.2s ease',
      border: 'none',
      outline: 'none',
    };

    if (width) {
      styles.width = typeof width === 'number' ? `${width}px` : width;
    }

    if (!disabled) {
      styles.opacity = '1';
      switch (variant) {
        case ButtonVariant.Primary:
          styles.backgroundColor = '#007AFF';
          styles.color = '#FFFFFF';
          break;
        case ButtonVariant.Secondary:
          styles.backgroundColor = '#FFFFFF';
          styles.color = '#007AFF';
          styles.border = '1px solid #007AFF';
          break;
        case ButtonVariant.Danger:
          styles.backgroundColor = '#FF3B30';
          styles.color = '#FFFFFF';
          break;
      }
    } else {
      styles.opacity = '0.5';
      styles.backgroundColor = '#E5E5E5';
      styles.color = '#999999';
      if (variant === ButtonVariant.Secondary) {
        styles.border = '1px solid #DDDDDD';
      }
    }

    return styles;
  };

  return (
    <button
      className={getButtonClasses()}
      style={getButtonStyles()}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
