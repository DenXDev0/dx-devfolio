'use client';
import { useTheme } from '@/hooks/useTheme';
import styles from './ToggleTheme.module.scss';
import { IoMoon, IoSunny } from "react-icons/io5";

export function ToggleTheme() {
  const { isDark, toggleTheme } = useTheme();

  return (
      <button
        onClick={toggleTheme}
        className={`${styles.toggle} ${isDark ? styles.dark : styles.light}`}
      >
        <span className={styles.knob}></span>
        <IoMoon className={styles.moon} aria-hidden="true" />
        <IoSunny className={styles.sun} aria-hidden="true" />
      </button>
  );
}
