import { FaFacebook } from 'react-icons/fa';

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
            <a href="our-story">Our Story</a>
          </li>

          <li className={styles['nav--item']}>
            <a href="contact">Contact</a>
          </li>
        </ul>
        <a href="https://www.facebook.com/jayfowles.co.nz">
          <FaFacebook className={styles['fa-facebook']} />
        </a>
      </div>
    </footer>
  );
};
