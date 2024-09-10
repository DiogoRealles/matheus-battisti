import styles from './Input.module.css';

const input = ({
  label,
  name,
  type,
  placeholder,
  value,
  handleOnChange,
  multiple,
}) => {
  return (
    <div className={styles.form_control}>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleOnChange}
        {...(multiple ? { multiple } : '')}
      />
    </div>
  );
};

export default input;
