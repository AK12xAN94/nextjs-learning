/**
 * 登录表单组件
 * 整合所有登录相关子组件
 */

import InputField from './InputField';
import StatusMessage from './StatusMessage';
import Button from './Button';
import { useLogin } from '../hooks/useLogin';

const LoginForm = () => {
  const {
    formData,
    errors,
    isLoading,
    statusMessage,
    statusType,
    updateField,
    handleLogin
  } = useLogin();

  return (
    <div className="login-container">
      <h1 className="login-title">用户登录</h1>
      
      {/* 状态消息提示 */}
      <StatusMessage message={statusMessage} type={statusType} />

      {/* 用户名输入框 */}
      <InputField
        label="用户名"
        id="username"
        type="text"
        placeholder="请输入用户名"
        value={formData.username}
        onChange={updateField}
        error={errors.username}
        disabled={isLoading}
      />

      {/* 密码输入框 */}
      <InputField
        label="密码"
        id="password"
        type="password"
        placeholder="请输入密码"
        value={formData.password}
        onChange={updateField}
        error={errors.password}
        disabled={isLoading}
      />

      {/* 登录按钮 */}
      <Button
        onClick={handleLogin}
        disabled={isLoading}
        variant="primary"
      >
        {isLoading ? '登录中...' : '登录'}
      </Button>

      {/* 提示信息 */}
      <p className="login-hint">
        演示账号：用户名 admin，密码 123456
      </p>
    </div>
  );
};

export default LoginForm;
