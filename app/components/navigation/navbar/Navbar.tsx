'use client';
import React, { useEffect, useState } from 'react';
import { RoundThumbnail } from '@components/shared/RoundThumbnail';
import AvatarImage from '@public/avatar.png';
import { NavMenu } from './Navmenu';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (currentScrollPos > 0) {
        setShowNavbar(prevScrollPos > currentScrollPos); // Show navbar only if scrolling up
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <nav
      className={`z-50 fixed w-full h-20 transition-all duration-300 ${
        showNavbar
          ? prevScrollPos === 0
            ? 'trasform translate-y-0'
            : 'shadow-navy-light shadow-md transform translate-y-0'
          : 'transform -translate-y-full'
      }`}
    >
      <div
        className={`bg-navy bg-opacity-80 transition-all duration-300 backdrop-blur-md flex 
                    justify-between items-center h-full w-full px-4 lg:px-16 ${
                      prevScrollPos == 0 ? 'pt-2' : 'pt-0'
                    }`}
      >
        <RoundThumbnail
          imageSrc={AvatarImage.src}
          link="/"
          size={50}
          border={true}
        />
        <NavMenu />
      </div>
    </nav>
  );
};

export default Navbar;
