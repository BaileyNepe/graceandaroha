import { FaFacebook, FaInstagram } from 'react-icons/fa';

import styles from '@/styles/Footer.module.css';

export const Footer = () => {
  return (
    <footer>
      <div className={styles.footer}>
        <ul className={styles.nav}>
          <li className={styles['nav--item']}>
            <a href="/">Home</a>
          </li>
          <li className={styles['nav--item']}>
            <a href="/ourStory">Our Story</a>
          </li>

          <li className={styles['nav--item']}>
            <a href="/contact">Contact</a>
          </li>
        </ul>
        <div>
          <a href="https://www.instagram.com/graceandaroha">
            <FaInstagram className={styles['fa-facebook']} />
          </a>
          <a href="https://www.facebook.com/graceandaroha">
            <FaFacebook className={styles['fa-facebook']} />
          </a>
        </div>
      </div>
    </footer>
  );
};
