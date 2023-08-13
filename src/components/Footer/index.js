import styles from './Footer.module.css';
import { FaGithubSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <img src="/images/logo.png" alt="logo" />
      </div>
      <div className={styles['link-git']}>
        <div className={styles.content}>
          <a href="https://github.com/kojirenan" target="_blank" rel="noreferrer">
            <p>Renan Koji Hanashiro</p>
          </a>
        </div>
        <FaGithubSquare className={styles.icon} color="rgba(244, 19, 100, 1)" />
      </div>
    </footer>
  );
};

export default Footer;
