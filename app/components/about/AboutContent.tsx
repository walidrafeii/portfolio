import React from "react";
import Image from "next/image";
import ProfilePicture from "@public/profile-picture.png";
import { AboutTimeline } from "./AboutTimeline";

export const AboutContent = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-14 xl:gap-10 justify-center mt-10 xl:mt-5">
      {/* Profile Image */}
      <div className="relative w-[250px] h-[250px] border border-turquoise rounded-xl shrink-0 self-center">
        <div className="absolute top-[15px] right-[-15px] w-[250px] h-[250px] rounded-xl overflow-hidden">
          <Image
            src={ProfilePicture.src}
            alt="Description of image"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      {/* Main Text Content & Timeline */}
      <div className="flex flex-col md:max-w-[70%] self-center xl:self-start items-center">
        <p className="text-slate mt-0 xl:mt-4 md:max-w-[85%]">
          I immigrated from Lebanon at the age of 13, and with the weight of
          financial struggles on my shoulders, I started working at a pizza
          place to save for my college tuition. Despite the challenges, I
          excelled academically, earning a spot at the top of my class and
          securing an{" "}
          <a className="text-link" target="__blank" href="https://new.nsf.gov">
            NSF scholarship
          </a>
          . As the first in my family to graduate from college, my journey into
          coding began in high school, where I took my first programming class
          and instantly fell in love.
        </p>
        <AboutTimeline />
      </div>
    </div>
  );
};
