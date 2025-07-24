'use client';

import styles from './Header.module.css';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <>
      <header className={styles.head}>
        <div className={styles.logo}>TastyTrail</div>
        <button
          className={styles.hamburger}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
        <nav className={styles.desktopNav}>
          <Link href="/" className={styles.link}>Home</Link>
          <Link href="/boxpage" className={styles.link}>Blogs</Link>
          <Link href="/aboutpage" className={styles.link}>About Us</Link>
        </nav>
      </header>

      {menuOpen && (
        <nav className={styles.mobileNav}>
          <Link href="/" className={styles.link} onClick={toggleMenu}>Home</Link>
          <Link href="/boxpage" className={styles.link} onClick={toggleMenu}>Blogs</Link>
          <Link href="/aboutpage" className={styles.link} onClick={toggleMenu}>About Us</Link>
        </nav>
      )}
    </>
  );
}