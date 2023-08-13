import styles from './AddButton.module.css';

function AddButton({ children, toggle, message }) {
  return (
    <button className={styles.addbtn} type="button" onClick={toggle}>
      <span className={styles.tooltip}>{message}</span>
      {children}
    </button>
  );
}

export default AddButton;
