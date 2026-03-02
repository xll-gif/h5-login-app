import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { SplashPage } from './components/pages/SplashPage';
import { LoginPage } from './components/pages/LoginPage';
import { HomePage } from './components/pages/HomePage';

/**
 * App 主组件
 *
 * 路由配置：
 * / - 启动页（2秒后跳转到登录页）
 * /login - 登录页
 * /home - 首页（需要登录）
 */
function App() {
  // 页面状态
  const [currentRoute, setCurrentRoute] = useState<'splash' | 'login' | 'home'>('splash');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 初始化检查登录状态
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  // 启动页加载完成回调
  const handleSplashComplete = () => {
    setCurrentRoute('login');
  };

  // 登录成功回调
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setCurrentRoute('home');
  };

  // 退出登录回调
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    setIsLoggedIn(false);
    setCurrentRoute('login');
  };

  // 渲染当前页面
  const renderCurrentPage = () => {
    switch (currentRoute) {
      case 'splash':
        return <SplashPage onLoadingComplete={handleSplashComplete} />;
      case 'login':
        return <LoginPage onLoginSuccess={handleLoginSuccess} />;
      case 'home':
        return isLoggedIn ? (
          <HomePage onLogout={handleLogout} />
        ) : (
          <LoginPage onLoginSuccess={handleLoginSuccess} />
        );
      default:
        return <SplashPage onLoadingComplete={handleSplashComplete} />;
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/splash" replace />} />
        <Route
          path="/splash"
          element={<SplashPage onLoadingComplete={handleSplashComplete} />}
        />
        <Route
          path="/login"
          element={
            isLoggedIn ? (
              <Navigate to="/home" replace />
            ) : (
              <LoginPage onLoginSuccess={handleLoginSuccess} />
            )
          }
        />
        <Route
          path="/home"
          element={
            isLoggedIn ? (
              <HomePage onLogout={handleLogout} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
