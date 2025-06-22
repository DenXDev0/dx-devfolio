'use client';

import { useTranslations } from 'next-intl';
import styles from './Navbar.module.scss';
import { useActiveSection } from '@/hooks/useActiveSection';

export default function Navbar() {
  const t = useTranslations('nav');
  const navKeys = ['about', 'projects', 'skills'];
  const activeSection = useActiveSection(navKeys);

  const handleClick = (e, key) => {
    e.preventDefault();
    const target = document.getElementById(key);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={styles.nav}>
      {navKeys.map(key => (
        <a
          key={key}
          href={`#${key}`}
          onClick={(e) => handleClick(e, key)}
          className={activeSection === key ? styles.active : ''}
        >
          {t(key)}
        </a>
      ))}
    </nav>
  );
}
