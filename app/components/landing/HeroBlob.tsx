import React from 'react';
import styles from './Landing.module.css';
import { RoundThumbnail } from '@components/shared/RoundThumbnail';
import ProfilePicture from '@public/profile-picture.png';
import RoundedPill from '@components/shared/RoundedPill';

export const HeroBlob = () => {
  const techStack = [
    'Python',
    'PostgreSQL',
    'Angular',
    'Groovy',
    'Docker',
    'Cloud Deployments',
    'Aria Automation',
  ];

  return (
    <div className={`${styles.blob}`}>
      <div className="flex flex-row gap-2 items-center basis-1/6 sm:basis-1/4 mt-14">
        <RoundThumbnail imageSrc={ProfilePicture.src} size={50} />
        <p className="font-light text-navy">Greetings from California 👋</p>
      </div>
      <div className="flex flex-col gap-2 mx-5">
        <div className="text-navy font-semibold">My Current Role</div>
        <div className="text-navy-light text-sm">
          As a Software Engineer at VMware, I specialize in scale testing to
          ensure software performance and reliability. I innovate by developing
          new automation methods and have built a web application to visualize
          and track our testing data effectively.
        </div>
      </div>
      <div className="flex flex-row flex-wrap gap-2 items-center mx-5">
        {techStack.map((pill, index) => (
          <RoundedPill key={index} text={pill} />
        ))}
      </div>
    </div>
  );
};
