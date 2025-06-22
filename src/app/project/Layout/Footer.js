import { useTranslations } from 'next-intl';
import styles from './Footer.module.scss';
import { ToggleTheme } from '@/components/button/ToggleTheme';
import { ToggleLang } from '@/components/button/ToggleLang';
import { Socials } from '@/components/button/Socials';

const Footer = () => {
  const t = useTranslations('footer');

  return (
    <footer className={styles.footer}>
      <p>
        {t.rich('text', {
          nextjs: (chunks) => <a href="https://nextjs.org">{chunks}</a>,
          sass: (chunks) => <a href="https://sass-lang.com">{chunks}</a>,
          inspiration: (chunks) => <a href="https://github.com/bchiang7/v4">{chunks}</a>,
          github: (chunks) => <a href="https://github.com/DenXDev0/dx-devfolio">{chunks}</a>
        })}
      </p>
      <Socials />
    </footer>
  );
};

export default Footer;
