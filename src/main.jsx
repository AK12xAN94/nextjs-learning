/**
 * 应用入口文件
 * 负责初始化和挂载 React 应用
 */

import { createRoot } from 'react-dom/client';
import App from './App';

/**
 * 初始化应用
 */
const initApp = () => {
  // 获取根 DOM 元素
  const rootElement = document.getElementById('root');
  
  if (!rootElement) {
    console.error('未找到根元素 #root');
    return;
  }
  
  // 创建根节点并渲染应用
  const root = createRoot(rootElement);
  root.render(<App />);
};

// DOM加载完成后初始化应用
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  // DOM已加载完成，直接初始化
  initApp();
}
