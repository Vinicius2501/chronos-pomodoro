import { Link } from 'react-router';
import styles from './styles.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Link to='/about-pomodoro'>Entenda como funciona a ténica pomodoro</Link>
      <Link to='/'>
        Chronos Pomodor &copy; {new Date().getFullYear()} - Feito com 💚
      </Link>
    </footer>
  );
}
