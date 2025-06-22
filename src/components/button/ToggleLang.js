'use client';
import { useState, useTransition } from 'react';
import { setUserLocale } from '@/services/locale';

import styles from './ToggleLang.module.scss';

export function ToggleLang() {
  const [locale, setLocale] = useState('en');
  const [isPending, startTransition] = useTransition();

  const toggleLocale = () => {
    const newLocale = locale === 'en' ? 'id' : 'en';
    setLocale(newLocale);
    startTransition(() => {
      setUserLocale(newLocale);
    });
  };

  return (
      <button
        type="button"
        className={styles.lang}
        onClick={toggleLocale}
        disabled={isPending}
      >
        <span className={locale === "id" ? styles.langActive : styles.langInActive}>ID</span>
        <span className={locale === "en" ? styles.langActive : styles.langInActive}>EN</span>
      </button>
  );
}
