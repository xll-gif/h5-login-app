import React, { useState, useEffect } from 'react';
import { Button } from '../ui/Button';
import { InputField, InputType } from '../ui/InputField';
import {
  LoginErrorType,
  LoginErrorMessages,
  LoginRequest,
} from '../../api/types';
import { loginApi, validateEmail, validatePassword } from '../../api/mockApi';

/**
 * 登录页面组件
 *
 * 功能：
 * 1. 邮箱/密码登录
 * 2. 实时表单验证
 * 3. 错误提示
 * 4. 加载状态
 * 5. 登录成功后跳转
 *
 * @param onLoginSuccess 登录成功回调
 */
export const LoginPage: React.FC<{ onLoginSuccess?: () => void }> = ({
  onLoginSuccess,
}) => {
  // 表单状态
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // 验证状态
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // 加载状态
  const [isLoading, setIsLoading] = useState(false);

  // 邮箱实时验证
  useEffect(() => {
    if (email === '') {
      setEmailError(null);
      return;
    }
    if (!validateEmail(email)) {
      setEmailError(LoginErrorMessages[LoginErrorType.INVALID_EMAIL]);
    } else {
      setEmailError(null);
    }
  }, [email]);

  // 密码实时验证
  useEffect(() => {
    if (password === '') {
      setPasswordError(null);
      return;
    }
    const result = validatePassword(password);
    if (!result.valid) {
      setPasswordError(result.error);
    } else {
      setPasswordError(null);
    }
  }, [password]);

  // 判断表单是否有效
  const isFormValid = (): boolean => {
    return (
      email !== '' &&
      password !== '' &&
      emailError === null &&
      passwordError === null
    );
  };

  // 判断登录按钮是否禁用
  const isButtonDisabled = (): boolean => {
    return !isFormValid() || isLoading;
  };

  // 处理登录提交
  const handleLogin = async () => {
    // 清除之前的提交错误
    setSubmitError(null);

    // 表单验证
    if (!isFormValid()) {
      return;
    }

    // 开始加载
    setIsLoading(true);

    try {
      // 调用登录 API
      const response = await loginApi({ email, password });

      if (response.code === 200) {
        // 登录成功
        console.log('登录成功:', response.data);
        
        // 保存 Token 到 localStorage
        if (response.data?.token) {
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('userId', response.data.userId);
        }

        // 跳转到首页
        onLoginSuccess?.();
      } else {
        // 登录失败
        setSubmitError(response.message || '登录失败，请重试');
      }
    } catch (error) {
      // 网络错误
      console.error('登录失败:', error);
      setSubmitError(LoginErrorMessages[LoginErrorType.NETWORK_ERROR]);
    } finally {
      // 结束加载
      setIsLoading(false);
    }
  };

  // 处理回车键提交
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !isButtonDisabled()) {
      handleLogin();
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
        backgroundColor: '#FFFFFF',
        padding: '20px',
        gap: '24px',
      }}
    >
      {/* Logo */}
      <div
        style={{
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          background: 'linear-gradient(45deg, #007AFF, #5AC8FA)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          marginBottom: '24px',
        }}
      >
        <span
          style={{
            fontSize: '40px',
            fontWeight: 'bold',
            color: '#FFFFFF',
          }}
        >
          L
        </span>
      </div>

      {/* 标题 */}
      <h1
        style={{
          fontSize: '24px',
          fontWeight: 'bold',
          color: '#333333',
          margin: 0,
          marginBottom: '24px',
        }}
      >
        登录
      </h1>

      {/* 表单容器 */}
      <div
        style={{
          width: '100%',
          maxWidth: '400px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}
      >
        {/* 邮箱输入框 */}
        <InputField
          placeholder="请输入邮箱地址"
          value={email}
          onChange={setEmail}
          inputType={InputType.Email}
          isError={emailError !== null}
          errorMessage={emailError || undefined}
          fullWidth
          onKeyPress={handleKeyPress}
        />

        {/* 密码输入框 */}
        <InputField
          placeholder="请输入密码"
          value={password}
          onChange={setPassword}
          isPassword={!showPassword}
          isError={passwordError !== null}
          errorMessage={passwordError || undefined}
          fullWidth
          onKeyPress={handleKeyPress}
        />

        {/* 密码显示/隐藏切换 */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            style={{
              background: 'none',
              border: 'none',
              color: '#007AFF',
              fontSize: '14px',
              cursor: 'pointer',
              padding: 0,
            }}
          >
            {showPassword ? '隐藏密码' : '显示密码'}
          </button>
        </div>

        {/* 登录按钮 */}
        <Button
          onClick={handleLogin}
          disabled={isButtonDisabled()}
          fullWidth
        >
          {isLoading ? '登录中...' : '登录'}
        </Button>

        {/* 提交错误提示 */}
        {submitError && (
          <div
            style={{
              padding: '12px',
              backgroundColor: '#FFF5F5',
              border: '1px solid #FF3B30',
              borderRadius: '4px',
              color: '#FF3B30',
              fontSize: '14px',
              textAlign: 'center',
            }}
          >
            {submitError}
          </div>
        )}
      </div>

      {/* 辅助链接 */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '12px',
          marginTop: '16px',
        }}
      >
        <a
          href="#"
          style={{
            fontSize: '14px',
            color: '#007AFF',
            textDecoration: 'none',
          }}
        >
          忘记密码？
        </a>
        <div
          style={{
            display: 'flex',
            gap: '4px',
            fontSize: '14px',
            color: '#666666',
          }}
        >
          还没有账号？
          <a
            href="#"
            style={{
              color: '#007AFF',
              textDecoration: 'none',
            }}
          >
            立即注册
          </a>
        </div>
      </div>

      {/* 测试账号提示 */}
      <div
        style={{
          position: 'absolute',
          bottom: '20px',
          padding: '16px',
          backgroundColor: '#F5F5F5',
          borderRadius: '8px',
          maxWidth: '400px',
        }}
      >
        <p
          style={{
            fontSize: '12px',
            color: '#666666',
            margin: '0 0 8px 0',
            fontWeight: 'bold',
          }}
        >
          测试账号：
        </p>
        <p
          style={{
            fontSize: '12px',
            color: '#999999',
            margin: '4px 0',
          }}
        >
          邮箱: test@example.com / 密码: password123
        </p>
        <p
          style={{
            fontSize: '12px',
            color: '#999999',
            margin: '4px 0',
          }}
        >
          邮箱: admin@example.com / 密码: admin123
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
