import styles from './Socials.module.scss';
import { FaGithub, FaLinkedin, FaInstagram, FaCoffee } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/DenXDev0',
    icon: <FaGithub />,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/denxdev/',
    icon: <FaLinkedin />,
  },
  {
    label: 'Gmail',
    href: 'mailto:DenxDev@gmail.com',
    icon: <SiGmail />,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/den_agr',
    icon: <FaInstagram />,
  },
  {
    label: 'Ko-fi',
    href: 'https://ko-fi.com/denxdev',
    icon: <FaCoffee />,
  },
  {
    label: 'FreeCodeCamp',
    href: 'https://www.freecodecamp.org/DenXDev',
    icon: <FaFreeCodeCamp />,
  },
  {
    label: 'HackerRank',
    href: 'https://www.hackerrank.com/profile/denxdev',
    icon: <FaHackerrank />,
  },
];

export function Socials() {
  return (
        <div className={styles.socials}>
          {socials.map((item) => (
            <a key={item.label} href={item.href} target="_blank" title={item.label}>
              {item.icon}
            </a>
          ))}
        </div>
  );
}
