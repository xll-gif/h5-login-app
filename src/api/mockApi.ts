import { LoginRequest, LoginResponse, ApiResponse } from './types';

/**
 * Mock API 服务
 *
 * 模拟后端 API 接口，用于前端开发和测试
 */

// Mock 延迟时间（毫秒）
const MOCK_DELAY = 1000;

// 模拟用户数据库
const mockUsers = [
  {
    email: 'test@example.com',
    password: 'password123',
    userId: 'MOCK_USER_001',
    nickname: '测试用户',
    avatar: 'https://via.placeholder.com/100',
  },
  {
    email: 'admin@example.com',
    password: 'admin123',
    userId: 'MOCK_USER_002',
    nickname: '管理员',
    avatar: 'https://via.placeholder.com/100',
  },
];

/**
 * 模拟网络延迟
 */
const delay = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

/**
 * 用户登录 API
 *
 * @param loginRequest 登录请求参数
 * @returns 登录响应
 */
export const loginApi = async (
  loginRequest: LoginRequest
): Promise<ApiResponse<LoginResponse>> => {
  // 模拟网络延迟
  await delay(MOCK_DELAY);

  const { email, password } = loginRequest;

  // 查找用户
  const user = mockUsers.find(
    (u) => u.email === email && u.password === password
  );

  if (!user) {
    // 模拟邮箱或密码错误
    return {
      code: 401,
      message: '邮箱或密码错误',
    };
  }

  // 模拟成功登录
  return {
    code: 200,
    message: '登录成功',
    data: {
      token: `mock_token_${Date.now()}`,
      refreshToken: `mock_refresh_token_${Date.now()}`,
      userId: user.userId,
      email: user.email,
      nickname: user.nickname,
      avatar: user.avatar,
      expiresIn: 7200,
    },
  };
};

/**
 * 验证邮箱格式
 *
 * @param email 邮箱地址
 * @returns 是否有效
 */
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * 验证密码长度
 *
 * @param password 密码
 * @returns 是否有效
 */
export const validatePassword = (password: string): { valid: boolean; error?: string } => {
  if (password.length < 6) {
    return { valid: false, error: '密码至少需要 6 个字符' };
  }
  if (password.length > 20) {
    return { valid: false, error: '密码不能超过 20 个字符' };
  }
  return { valid: true };
};
