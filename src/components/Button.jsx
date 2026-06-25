/**
 * 通用按钮组件
 * 可复用的按钮组件
 */

const Button = ({
  children,
  onClick,
  disabled = false,
  type = 'button',
  variant = 'primary'
}) => {
  const baseClass = 'btn';
  const variantClass = `btn-${variant}`;
  
  return (
    <button
      type={type}
      className={`${baseClass} ${variantClass}${disabled ? ' disabled' : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
