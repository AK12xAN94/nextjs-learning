/**
 * 通用输入框组件
 * 可复用的表单输入组件
 */

const InputField = ({
  label,
  id,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  disabled = false
}) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(id, e.target.value)}
        className={error ? 'error' : ''}
        disabled={disabled}
      />
      {error && (
        <div className="error-message show">
          {error}
        </div>
      )}
    </div>
  );
};

export default InputField;
