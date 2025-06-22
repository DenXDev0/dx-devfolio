import Link from 'next/link';
import styles from './Header.module.scss';
import { ToggleTheme } from '@/components/button/ToggleTheme';
import { ToggleLang } from '@/components/button/ToggleLang';
import { FaArrowLeftLong } from "react-icons/fa6";


const Header = ({ title }) => {

  return (
    <header className={styles.Header}>
        <Link href="/" className={styles.Back}><FaArrowLeftLong /><span>Back</span></Link>
        <h2 className={styles.Title}>{`Timeline All ${title}`}</h2>
        <div className={styles.ToggleControl}>
            <ToggleLang />
            <ToggleTheme />
        </div>
    </header>
  );
};

export default Header;
