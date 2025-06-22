
import styles from './Header.module.scss';
import Navbar from './Navbar';
import { ToggleLang } from '../../button/ToggleLang';
import { ToggleTheme } from '../../button/ToggleTheme';
import { useTranslations } from 'next-intl';
import { Socials } from '@/components/button/Socials';



export default function Header() {
  const t = useTranslations('hero');
  return (
    <header className={styles.header}>
      <div>
        <div className={styles.hero}>
          <h1 className={styles.name}>{t('name')}</h1>
          <h2 className={styles.role}>{t('role')}</h2>
          <p className={styles.mission}>{t('mission')}</p>
        </div>
        <Navbar />
      </div>

      <div className={styles.bottom}>
        <div className={styles.ToggleControl}>
          <ToggleLang />
          <ToggleTheme />
        </div>
        <Socials />
      </div>
    </header>
  );
}
