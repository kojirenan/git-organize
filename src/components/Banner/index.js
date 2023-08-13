import styles from './Banner.module.css';

export default function Banner() {
  return (
    <header className={styles.banner}>
      <div>
        <h1>Git Organize</h1>
        <h2>Organize suas equipes</h2>
      </div>
      <img src="/images/Icon.png" alt="Logo Organo" />
    </header>
  );
}
