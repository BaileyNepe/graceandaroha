import Image from 'next/image';
import Link from 'next/link';
import { FaEnvelope, FaMobile } from 'react-icons/fa';

import styles from '@/styles/Header.module.css';
import { useEffect, useState } from 'react';

export interface Props {
  stickyHeader?: boolean;
}

export const Header = ({ stickyHeader = true }: Props) => {
  const [scollStyles, setScrollStyles] = useState('');
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileMenuStyles, setMobileMenuStyles] = useState('');

  // Sticky Menu Area
  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  });

  /* Method that will fix header after a specific scrollable */
  const isSticky = () => {
    if (stickyHeader) {
      const scrollTop = window.scrollY;
      scrollTop >= 50 ? setScrollStyles(styles.scrolled) : setScrollStyles('');
    } else {
      setScrollStyles('');
    }
  };

  const toggleMobileMenu = () => {
    if (mobileMenu) {
      setMobileMenu(false);
      setMobileMenuStyles('');
    } else {
      setMobileMenu(true);
      setMobileMenuStyles(styles.active);
    }
  };

  const headerType = stickyHeader ? styles['sticky-header'] : styles['navbar-static'];

  return (
    <header className={`${headerType} ${scollStyles}`}>
      <Link href="/">
        <div className={styles.logo}>
          <Image src="/images/logo-trans.png" alt="Grace and Aroha Educare" layout="responsive" height={70} width={400} />
        </div>
      </Link>

      <div className={styles.contact}>
        <a type="button" href="tel:021403447" className={`${styles['cta-btn']} btn ${styles.phn}`}>
          <FaMobile className={styles.icon}></FaMobile>021 403 447
        </a>
        <a type="button" href="mailto:admin@graceandaroha.co.nz" className={`${styles['cta-btn']} btn ${styles.email}`}>
          <FaEnvelope />
        </a>
      </div>

      <nav>
        <ul className={`${styles['nav--menu']} ${mobileMenuStyles} ${styles['nav-bar']}`}>
          <li className={styles['nav--item']} onClick={toggleMobileMenu}>
            <Link href="/">
              <a className={styles['nav--link']}>Home</a>
            </Link>
          </li>
          <li className={styles['nav--item']} onClick={toggleMobileMenu}>
            <Link href="/ourStory">
              <a className={styles['nav--link']}>Our Story</a>
            </Link>
          </li>
          <li className={styles['nav--item']} onClick={toggleMobileMenu}>
            <Link href="/services">
              <a className={styles['nav--link']}>Services</a>
            </Link>
          </li>
          <li className={styles['nav--item']} onClick={toggleMobileMenu}>
            <Link href="/blog">
              <a className={styles['nav--link']}>Blog</a>
            </Link>
          </li>
          <li className={styles['nav--item']} onClick={toggleMobileMenu}>
            <Link href="/contact">
              <a className={styles['nav--link']}>Contact</a>
            </Link>
          </li>
        </ul>
        <div className={`${styles.hamburger} ${mobileMenuStyles}`} onClick={toggleMobileMenu}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
      </nav>
    </header>
  );
};
