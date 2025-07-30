import {
  HistoryIcon,
  HomeIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from 'lucide-react';
import style from './style.module.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router';

type AvailableTheme = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvailableTheme>(() => {
    const storageTheme =
      (localStorage.getItem('theme') as AvailableTheme) || 'dark';
    return storageTheme;
  });

  function handleChangeTheme(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault();
    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextTheme;
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <nav className={style.menu}>
      <Link
        className={style.menuLink}
        to='/'
        aria-label='Ir para a Home'
        title='Ir para a Home'
      >
        <HomeIcon />
      </Link>
      <Link
        className={style.menuLink}
        to='/'
        aria-label='Ver historico'
        title='Ver historico'
      >
        <HistoryIcon />
      </Link>
      <Link
        className={style.menuLink}
        to='#'
        aria-label='Configurações'
        title='Configurações'
      >
        <SettingsIcon />
      </Link>
      <Link
        className={style.menuLink}
        to='#'
        aria-label='Mudar tema'
        title='Mudar tema'
        onClick={handleChangeTheme}
      >
        {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
      </Link>
    </nav>
  );
}
