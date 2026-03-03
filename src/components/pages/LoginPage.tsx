import React, { useState } from 'react';
import Input from '../ui/Input';
import Button from '../ui/Button';

interface LoginFormData {
  username: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    username: '',
    password: ''
  });
  const [errors, setErrors] = useState<Partial<LoginFormData>>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field: keyof LoginFormData) => (value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<LoginFormData> = {};
    if (!formData.username.trim()) newErrors.username = '用户名不能为空';
    if (!formData.password) newErrors.password = '密码不能为空';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async () => {
    if (!validateForm()) return;
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert('登录成功');
    } catch (error) {
      alert('登录失败，请重试');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md flex flex-col items-center gap-6">
      <img src="https://cdn.weipaitang.com/sky/resourceMan/tupianfv/image/20260303/594f688d556e4a78bd597508c9ebd709-W140H140" alt="Logo" className="w-[120px] h-[120px] object-contain mb-4" />
      <h1 className="text-2xl font-bold text-gray-900 mb-4">欢迎登录</h1>
      <Input value={formData.username} onChange={handleInputChange('username')} placeholder="请输入用户名" error={errors.username} style={{ width: '100%', height: '40px', borderRadius: '4px', borderWidth: '1px', borderColor: '#d9d9d9', backgroundColor: '#ffffff', fontFamily: 'PingFang SC' }} />
      <Input type="password" value={formData.password} onChange={handleInputChange('password')} placeholder="请输入密码" error={errors.password} style={{ width: '100%', height: '40px', borderRadius: '4px', borderWidth: '1px', borderColor: '#d9d9d9', backgroundColor: '#ffffff', fontFamily: 'PingFang SC' }} />
      <Button onClick={handleLogin} disabled={isLoading} style={{ width: '200px', height: '40px', backgroundColor: '#1890ff', borderRadius: '4px', color: '#ffffff', fontFamily: 'PingFang SC' }}>{isLoading ? '登录中...' : '登录'}</Button>
    </div>
  );
};

export default LoginPage;