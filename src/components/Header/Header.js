"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Button from '../Button/Button';
import styles from './Header.module.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={styles.header}>
            <div className={`container ${styles.headerContainer}`}>
                <Link href="/" className={styles.logo}>
                    Bonding Concepts
                </Link>

                <button className={styles.mobileToggle} onClick={toggleMenu} aria-label="Toggle Menu">
                    <span className={isMenuOpen ? styles.barOpen : styles.bar}></span>
                    <span className={isMenuOpen ? styles.barOpen : styles.bar}></span>
                    <span className={isMenuOpen ? styles.barOpen : styles.bar}></span>
                </button>

                <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
                    <ul className={styles.navList}>
                        <li><Link href="/" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Home</Link></li>
                        <li><Link href="/about" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>About Us</Link></li>
                        {/* Services Dropdown (Simplified for now) */}
                        <li><Link href="/services" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Services</Link></li>
                        <li><Link href="/contact" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Contact Us</Link></li>
                    </ul>
                    <div className={styles.headerCta}>
                        <Button href="/contact" variant="primary" onClick={() => setIsMenuOpen(false)}>Get a Quote</Button>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
