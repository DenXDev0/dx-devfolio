import styles from './Contact.module.scss';
import { useTranslations } from 'next-intl';
import { AiOutlineMail } from "react-icons/ai";

export default function Contact() {
  const t = useTranslations('contact');

  return (
    <section id="contact" className={styles.contact}>
      <h2>{t('title')}</h2>
      <p>{t('text')}</p>
      <a href='mailto:DenxDev@gmail.com'>
        <button><AiOutlineMail />{t('buttonText')}</button>
      </a>
    </section>
  );
}
