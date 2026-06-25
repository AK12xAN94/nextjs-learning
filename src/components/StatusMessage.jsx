/**
 * 状态消息组件
 * 用于显示成功、错误、加载等状态消息
 */

const StatusMessage = ({ message, type }) => {
  if (!message) return null;
  
  return (
    <div className={`status-message ${type} show`}>
      {message}
    </div>
  );
};

export default StatusMessage;
