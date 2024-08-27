import React from 'react';
import styles from './Landing.module.css';
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

const ExternalSocialLinks: React.FC = () => {
  const icons = [
    {
      icon: <FaGithub className={styles.social__icon} />,
      link: 'https://github.com/walidrafeii',
    },
    {
      icon: <FaLinkedin className={styles.social__icon} />,
      link: 'https://linkedin.com/in/wrafei',
    },
    {
      icon: <FaFacebook className={styles.social__icon} />,
      link: 'https://www.facebook.com/waleed.rafee.7',
    },
    {
      icon: <FaInstagram className={styles.social__icon} />,
      link: 'https://www.instagram.com/w_rafei',
    },
  ];

  return (
    <div
      className={`${styles.social__links} fixed flex flex-col gap-10 items-center left-14 bottom-0 invisible lg:visible`}
    >
      <div className="flex flex-col gap-8 items-center">
        {icons.map((item, index) => (
          <a target="_blank" key={index} href={item.link}>
            {item.icon}
          </a>
        ))}
      </div>
      <div className="w-px h-28 bg-slate"></div>
    </div>
  );
};

export default ExternalSocialLinks;
