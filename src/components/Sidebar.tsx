"use client";

import { useState } from 'react';
import Link from 'next/link';
import styles from './Sidebar.module.css';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <aside className={styles.sidebar}>
        <div className={styles.logoContainer}>
          <Link href="/">
            <div className={styles.logo}>CC</div>
          </Link>
        </div>
        
        <button 
          className={`${styles.menuButton} ${isOpen ? styles.open : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle Navigation"
        >
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>

        <div className={styles.socials}>
          <a href="#" className={styles.socialIcon} aria-label="Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
          </a>
          <a href="#" className={styles.socialIcon} aria-label="Twitter">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
          </a>
          <a href="#" className={styles.socialIcon} aria-label="YouTube">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
          </a>
        </div>
      </aside>

      {/* Fullscreen Overlay Menu */}
      <div className={`${styles.menuOverlay} ${isOpen ? styles.active : ''}`}>
        <nav className={styles.overlayNav}>
          <Link href="/" className={styles.navLink} onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/about" className={styles.navLink} onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/menu" className={styles.navLink} onClick={() => setIsOpen(false)}>Menu</Link>
          <Link href="/contact" className={styles.navLink} onClick={() => setIsOpen(false)}>Contact</Link>
        </nav>
      </div>
    </>
  );
}
