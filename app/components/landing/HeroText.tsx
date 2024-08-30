import React from "react";
import styles from "./Landing.module.css";

export const HeroText = () => {
  return (
    <div className="hero__text flex flex-col gap-y-3 items-start max-w-xl">
      <h1
        className={`${styles.hero__animation} text-4xl xl:text-6xl subpixel-antialiased font-bold text-slate-light`}
      >
        Walid Rafei
      </h1>
      <h4
        className={`${styles.hero__animation} text-2xl xl:text-4xl subpixel-antialiased font-semibold text-slate`}
      >
        Software Engineer
      </h4>
      <p className={`${styles.hero__animation} text-slate mt-0 xl:mt-4`}>
        Delivering high-quality software with meticulous testing to ensure
        robust performance and reliability.
      </p>
      <a href="mailto:wrafei@outlook.com">
        <button
          className={`${styles.hero__animation} border-2 font-medium border-turquoise mt-4 py-2 
                      px-4 rounded-md text-sm hover:bg-navy-light text-slate-lightest`}
        >
          Contact me
        </button>
      </a>
    </div>
  );
};
