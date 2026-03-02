/**
 * 登录请求参数
 */
export interface LoginRequest {
  email: string;
  password: string;
}

/**
 * 登录响应数据
 */
export interface LoginResponse {
  token: string;
  refreshToken: string;
  userId: string;
  email: string;
  nickname: string;
  avatar: string;
  expiresIn: number;
}

/**
 * API 响应格式
 */
export interface ApiResponse<T = any> {
  code: number;
  message: string;
  data?: T;
}

/**
 * 登录错误类型
 */
export enum LoginErrorType {
  /** 邮箱格式错误 */
  INVALID_EMAIL = 'INVALID_EMAIL',
  /** 密码太短 */
  PASSWORD_TOO_SHORT = 'PASSWORD_TOO_SHORT',
  /** 密码太长 */
  PASSWORD_TOO_LONG = 'PASSWORD_TOO_LONG',
  /** 邮箱或密码错误 */
  INVALID_CREDENTIALS = 'INVALID_CREDENTIALS',
  /** 账号被锁定 */
  ACCOUNT_LOCKED = 'ACCOUNT_LOCKED',
  /** 网络错误 */
  NETWORK_ERROR = 'NETWORK_ERROR',
  /** 服务器错误 */
  SERVER_ERROR = 'SERVER_ERROR',
}

/**
 * 登录错误信息
 */
export const LoginErrorMessages: Record<LoginErrorType, string> = {
  [LoginErrorType.INVALID_EMAIL]: '请输入有效的邮箱地址',
  [LoginErrorType.PASSWORD_TOO_SHORT]: '密码至少需要 6 个字符',
  [LoginErrorType.PASSWORD_TOO_LONG]: '密码不能超过 20 个字符',
  [LoginErrorType.INVALID_CREDENTIALS]: '邮箱或密码错误，请重试',
  [LoginErrorType.ACCOUNT_LOCKED]: '账号已被锁定，请联系客服',
  [LoginErrorType.NETWORK_ERROR]: '网络连接失败，请检查网络设置',
  [LoginErrorType.SERVER_ERROR]: '服务器繁忙，请稍后再试',
};
