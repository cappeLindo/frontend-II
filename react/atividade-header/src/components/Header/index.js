'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './header.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
    const [menuVisible, setMenuVisible] = useState(false);

    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <div className={styles.logoWrapper}>
                    <h1 className={styles.title}>Header</h1>
                    <Image className={styles.logo} src="/images/logo.png" alt="Logo" width={50} height={50} />
                </div>
                <button
                    className={styles.button}
                    onClick={() => setMenuVisible(!menuVisible)}
                    aria-label="Toggle menu"
                >
                    {menuVisible ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="40"
                            height="40"
                            fill="currentColor"
                            className="bi bi-x-lg"
                            viewBox="0 0 16 16"
                        >
                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="40"
                            height="40"
                            fill="currentColor"
                            className="bi bi-list"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fillRule="evenodd"
                                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                            />
                        </svg>
                    )}
                </button>
            </div>
            <AnimatePresence>
                {menuVisible && (
                    <motion.nav
                        key="nav-activity"
                        initial={{ opacity: 0, y: -70 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -70 }}
                        transition={{ duration: 0.2 }}
                        className={styles.navWrapper}
                    >
                        <ul className={styles.navOptions}>
                            <li className={styles.navItem}>
                                <Link href="/">Primeira página</Link>
                            </li>
                            <li className={styles.navItem}>
                                <Link href="/seg_pagina">Segunda página</Link>
                            </li>
                            <li className={styles.navItem}>
                                <Link href="/ter_pagina">Terceira página</Link>
                            </li>
                        </ul>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;