import styles from './styles.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <a href='#'>Entenda como funciona a ténica pomodoro</a>
      <a href='#'>
        Chronos Pomodor &copy; {new Date().getFullYear()} - Feito com 💚
      </a>
    </footer>
  );
}
