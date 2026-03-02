import React from 'react';
import { Button } from '../ui/Button';

/**
 * 首页组件
 *
 * 登录成功后的首页
 */
export const HomePage: React.FC<{ onLogout?: () => void }> = ({ onLogout }) => {
  const userId = localStorage.getItem('userId') || '未知用户';

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
        }}
      >
        <span
          style={{
            fontSize: '40px',
            fontWeight: 'bold',
            color: '#FFFFFF',
          }}
        >
          H
        </span>
      </div>

      {/* 标题 */}
      <h1
        style={{
          fontSize: '24px',
          fontWeight: 'bold',
          color: '#333333',
          margin: 0,
        }}
      >
        首页
      </h1>

      {/* 欢迎信息 */}
      <p
        style={{
          fontSize: '16px',
          color: '#666666',
          margin: 0,
          textAlign: 'center',
        }}
      >
        欢迎回来，{userId}
      </p>

      {/* 登出按钮 */}
      <Button
        onClick={onLogout}
        fullWidth
        style={{ maxWidth: '300px' }}
      >
        退出登录
      </Button>

      {/* 功能列表 */}
      <div
        style={{
          marginTop: '32px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          width: '100%',
          maxWidth: '400px',
        }}
      >
        <p
          style={{
            fontSize: '14px',
            color: '#999999',
            margin: 0,
            textAlign: 'center',
          }}
        >
          更多功能开发中...
        </p>
      </div>
    </div>
  );
};

export default HomePage;
