import styles from './Select.module.css';

const Select = ({ label, name, options, handleChange, value }) => {
  return (
    <div className={styles.form_control}>
      <label htmlFor={name}>{label}</label>
      <select name={name} id={name} onChange={handleChange} value={value || ''}>
        <option>Selecione uma opção</option>
        {options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
