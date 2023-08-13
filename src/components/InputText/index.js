import styles from './InputText.module.css';

const InputText = ({ placeholder, onChange, label, value, required }) => {
  const onTyping = event => {
    onChange(event.target.value);
  };

  return (
    <div className={styles['input-text']}>
      <label>{label}</label>
      <input value={value} onChange={onTyping} required={required} placeholder={placeholder} />
    </div>
  );
};

export default InputText;
