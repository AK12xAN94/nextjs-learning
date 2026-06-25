/**
 * 登录状态管理 Hook
 * 封装登录相关的状态和操作
 */

import { useState, useCallback } from 'react';
import { login, saveUserSession } from '../api/auth';
import { validateLoginForm } from '../utils/validation';

/**
 * 登录状态 Hook
 * @returns {Object} - 登录状态和操作函数
 */
export const useLogin = () => {
  // 表单数据状态
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  
  // 错误信息状态
  const [errors, setErrors] = useState({
    username: '',
    password: ''
  });
  
  // 加载状态
  const [isLoading, setIsLoading] = useState(false);
  
  // 状态消息
  const [statusMessage, setStatusMessage] = useState('');
  const [statusType, setStatusType] = useState(''); // 'success', 'error', 'loading'

  /**
   * 更新表单字段
   * @param {string} field - 字段名
   * @param {string} value - 字段值
   */
  const updateField = useCallback((field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // 清除对应字段的错误
    setErrors(prev => ({
      ...prev,
      [field]: ''
    }));
  }, []);

  /**
   * 显示状态消息
   * @param {string} message - 消息内容
   * @param {string} type - 消息类型
   */
  const showStatusMessage = useCallback((message, type) => {
    setStatusMessage(message);
    setStatusType(type);
    
    // 3秒后自动隐藏消息（加载状态不自动隐藏）
    if (type !== 'loading') {
      setTimeout(() => {
        setStatusMessage('');
        setStatusType('');
      }, 3000);
    }
  }, []);

  /**
   * 处理登录成功
   * @param {Object} response - API响应数据
   */
  const handleLoginSuccess = useCallback((response) => {
    showStatusMessage(response.message, 'success');
    
    // 保存用户信息
    saveUserSession(response.data.user, response.data.token);
    
    // 模拟页面跳转（实际项目中可使用路由）
    setTimeout(() => {
      alert(`登录成功！欢迎, ${response.data.user.nickname}`);
      // window.location.href = '/dashboard'; // 实际跳转
    }, 1000);
  }, [showStatusMessage]);

  /**
   * 处理登录失败
   * @param {Object} response - API响应数据
   */
  const handleLoginFailure = useCallback((response) => {
    showStatusMessage(response.message, 'error');
    setIsLoading(false);
  }, [showStatusMessage]);

  /**
   * 执行登录操作
   */
  const handleLogin = useCallback(async () => {
    try {
      // 1. 表单验证
      const { errors: validationErrors, isValid } = validateLoginForm(formData);
      setErrors(validationErrors);
      
      if (!isValid) {
        return;
      }

      // 2. 显示加载状态
      showStatusMessage('正在登录...', 'loading');
      setIsLoading(true);

      // 3. 发起登录请求
      const response = await login(formData);

      // 4. 处理响应
      if (response.success) {
        handleLoginSuccess(response);
      } else {
        handleLoginFailure(response);
      }
    } catch (error) {
      // 异常捕获：网络错误、未知错误等
      console.error('登录过程发生错误:', error);
      showStatusMessage('登录失败，请稍后重试', 'error');
      setIsLoading(false);
    }
  }, [formData, showStatusMessage, handleLoginSuccess, handleLoginFailure]);

  return {
    // 状态
    formData,
    errors,
    isLoading,
    statusMessage,
    statusType,
    
    // 操作函数
    updateField,
    handleLogin
  };
};
