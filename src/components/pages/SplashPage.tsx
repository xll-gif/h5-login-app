import React, { useState, useEffect } from 'react';

/**
 * 启动页面组件
 *
 * 功能：
 * 1. 展示品牌 Logo 和加载动画
 * 2. 自动跳转到登录页面（延迟 2 秒）
 *
 * @param onLoadingComplete 加载完成回调
 */
export const SplashPage: React.FC<{ onLoadingComplete?: () => void }> = ({
  onLoadingComplete,
}) => {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 1) {
          return Math.min(prev + 0.05, 1);
        } else {
          clearInterval(interval);
          setIsLoaded(true);
          
          // 延迟 0.5 秒后跳转
          setTimeout(() => {
            onLoadingComplete?.();
          }, 500);
          
          return 1;
        }
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

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
        gap: '24px',
      }}
    >
      {/* Logo */}
      <div
        style={{
          width: '100px',
          height: '100px',
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
            fontSize: '48px',
            fontWeight: 'bold',
            color: '#FFFFFF',
          }}
        >
          L
        </span>
      </div>

      {/* 品牌名称 */}
      <h1
        style={{
          fontSize: '28px',
          fontWeight: 'bold',
          color: '#333333',
          margin: 0,
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.5s ease-in-out',
        }}
      >
        LoginApp
      </h1>

      {/* 加载动画 */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '12px',
        }}
      >
        {/* 进度条 */}
        <div
          style={{
            width: '200px',
            height: '4px',
            backgroundColor: '#E5E5E5',
            borderRadius: '2px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              width: `${progress * 100}%`,
              height: '100%',
              background: 'linear-gradient(90deg, #007AFF, #5AC8FA)',
              borderRadius: '2px',
              transition: 'width 0.1s ease-in-out',
            }}
          />
        </div>

        {/* 加载文字 */}
        <p
          style={{
            fontSize: '14px',
            color: '#999999',
            margin: 0,
          }}
        >
          正在加载...
        </p>
      </div>

      {/* 版本信息 */}
      <div
        style={{
          position: 'absolute',
          bottom: '40px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '4px',
        }}
      >
        <p
          style={{
            fontSize: '12px',
            color: '#999999',
            margin: 0,
          }}
        >
          Version 1.0.0
        </p>
        <p
          style={{
            fontSize: '10px',
            color: '#CCCCCC',
            margin: 0,
          }}
        >
          © 2026 Multi-Platform App
        </p>
      </div>
    </div>
  );
};

export default SplashPage;
