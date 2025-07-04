import { useTranslations } from 'next-intl';
import styles from './About.module.scss';

export default function About() {
  const t = useTranslations('about');
  
  return (
    <section id="about" className={styles.about}>
      <h2>{t("title")}</h2>
      <div>
        {t.rich('description', {
          p: (chunks) => <p>{chunks}</p>,
          gtk: (chunks) => <a href='https://www.gtk.org/'>{chunks}</a>,
          gjs: (chunks) => <a href='https://gjs.guide/'>{chunks}</a>,
          astal: (chunks) => <a href='https://aylur.github.io/astal/'>{chunks}</a>,
          wayland: (chunks) => <a href='https://wayland.freedesktop.org/'>{chunks}</a>,
        })}
      </div>
    </section>
  );
}
