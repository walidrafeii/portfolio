import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export const NavMenu = () => {
  return (
    <div className="flex items-center gap-10">
      <ul className="hidden sm:flex sm:gap-10">
        <Link href="/#about" className={styles.nav__link}>
          <li>About</li>
        </Link>
        <Link href="/#experience" className={styles.nav__link}>
          <li>Experience</li>
        </Link>
        <Link href="/#projects" className={styles.nav__link}>
          <li>Projects</li>
        </Link>
      </ul>
      <button className="border-2 border-turquoise py-2 px-4 rounded-md text-xs hover:bg-navy-light text-slate-lightest">
        Resume
      </button>
    </div>
  );
};
