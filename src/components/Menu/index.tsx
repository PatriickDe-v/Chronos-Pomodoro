import { HistoryIcon, House, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';

export function Menu() {
  return (
    <nav className={styles.menu}>
      <a href='#' className={styles.menuLink}>
        <House />
      </a>

      <a href='#' className={styles.menuLink}>
        <HistoryIcon />
      </a>

      <a href='#' className={styles.menuLink}>
        <SettingsIcon />
      </a>

      <a href='#' className={styles.menuLink}>
        <SunIcon />
      </a>
    </nav>
  );
}
