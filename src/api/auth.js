/**
 * 认证相关API服务
 * 分离业务逻辑与视图层，便于测试和维护
 */

/**
 * 模拟登录API请求
 * @param {Object} credentials - 用户凭证
 * @param {string} credentials.username - 用户名
 * @param {string} credentials.password - 密码
 * @returns {Promise<Object>} - 登录结果
 */
export const login = async (credentials) => {
  // 模拟网络延迟
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // 模拟验证逻辑（实际项目中应调用真实后端API）
  if (credentials.username === 'admin' && credentials.password === '123456') {
    return {
      success: true,
      data: {
        token: 'mock_jwt_token_12345',
        user: {
          id: 1,
          username: 'admin',
          nickname: '管理员'
        }
      },
      message: '登录成功'
    };
  } else {
    return {
      success: false,
      message: '用户名或密码错误（演示：用户名 admin，密码 123456）'
    };
  }
};

/**
 * 保存用户信息到本地存储
 * @param {Object} user - 用户信息
 * @param {string} token - 认证令牌
 */
export const saveUserSession = (user, token) => {
  localStorage.setItem('user', JSON.stringify(user));
  localStorage.setItem('token', token);
};

/**
 * 获取当前用户信息
 * @returns {Object|null} - 用户信息
 */
export const getUserSession = () => {
  const userStr = localStorage.getItem('user');
  return userStr ? JSON.parse(userStr) : null;
};

/**
 * 清除用户会话
 */
export const clearUserSession = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('token');
};
