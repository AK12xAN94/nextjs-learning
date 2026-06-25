/**
 * 表单验证工具函数
 * 提供通用的表单验证逻辑
 */

/**
 * 验证用户名
 * @param {string} username - 用户名
 * @returns {string} - 错误信息，验证通过返回空字符串
 */
export const validateUsername = (username) => {
  if (!username || !username.trim()) {
    return '请输入用户名';
  }
  if (username.trim().length < 3) {
    return '用户名至少需要3个字符';
  }
  return '';
};

/**
 * 验证密码
 * @param {string} password - 密码
 * @returns {string} - 错误信息，验证通过返回空字符串
 */
export const validatePassword = (password) => {
  if (!password) {
    return '请输入密码';
  }
  if (password.length < 6) {
    return '密码至少需要6个字符';
  }
  return '';
};

/**
 * 验证登录表单
 * @param {Object} formData - 表单数据
 * @param {string} formData.username - 用户名
 * @param {string} formData.password - 密码
 * @returns {Object} - 验证结果
 */
export const validateLoginForm = (formData) => {
  const errors = {
    username: validateUsername(formData.username),
    password: validatePassword(formData.password)
  };
  
  const isValid = !errors.username && !errors.password;
  
  return {
    errors,
    isValid
  };
};
