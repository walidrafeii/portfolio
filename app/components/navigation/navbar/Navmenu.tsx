import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

export const NavMenu = () => {
  return (
    <div className="flex items-center gap-10">
      <ul className="hidden sm:flex sm:gap-10">
        <Link href="#about" className={styles.nav__link}>
          <li>About</li>
        </Link>
        <Link href="#experience" className={styles.nav__link}>
          <li>Experience</li>
        </Link>
        <Link href="#projects" className={styles.nav__link}>
          <li>Projects</li>
        </Link>
        <Link href="#contact" className={styles.nav__link}>
          <li>Contact</li>
        </Link>
      </ul>
      <a
        target="_blank"
        href="https://wrafei-personal-work.s3.us-west-1.amazonaws.com/Walid_Rafei_Resume.pdf"
      >
        <button className="border-2 border-turquoise py-2 px-4 rounded-md text-xs hover:bg-navy-light text-slate-lightest">
          Resume
        </button>
      </a>
    </div>
  );
};
