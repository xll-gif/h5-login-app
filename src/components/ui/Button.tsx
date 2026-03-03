import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, disabled = false, className = '', style = {} }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`font-medium transition-all duration-200 hover:opacity-90 active:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center ${className}`}
    style={style}
  >
    {children}
  </button>
);

export default Button;