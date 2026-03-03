import React from 'react';

interface InputProps {
  type?: 'text' | 'password' | 'email';
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  error?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Input: React.FC<InputProps> = ({ type = 'text', value, onChange, placeholder, error, className = '', style = {} }) => (
  <div className="w-full">
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={`w-full px-3 border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 ${error ? 'border-red-500' : ''} ${className}`}
      style={style}
    />
    {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
  </div>
);

export default Input;