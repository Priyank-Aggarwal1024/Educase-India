import "../styles/Input.css";
function Input({
  name,
  label,
  placeholder,
  handleChange,
  value,
  required = false,
}) {
  return (
    <div className="input-comp">
      <label htmlFor={name} className="input-comp-label">
        {label}
        {required && <span className="input-comp-required">*</span>}
      </label>
      <input
        type="text"
        className="input-comp-input"
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
        id={name}
        required={required}
      />
    </div>
  );
}

export default Input;
