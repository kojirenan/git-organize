import styles from './Button.module.css';

const Button = ({ children, onClickFn }) => {
  return (
    <button className={styles.button} onClick={onClickFn}>
      {children}
    </button>
  );
};

export default Button;
