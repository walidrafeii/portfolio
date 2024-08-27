import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ThumbnailProps {
  imageSrc: string;
  size?: number;
  link?: string;
  border?: boolean;
}

export const RoundThumbnail: React.FC<ThumbnailProps> = ({
  imageSrc,
  size,
  link,
  border,
}) => {
  const content = (
    <Image
      src={imageSrc}
      alt="Profile Image"
      width={size || 50}
      height={size || 50}
      className={`rounded-full ${border ? 'border-gray border-2' : ''}`}
    />
  );

  return link ? (
    <Link href={link} className="inline-block hover:cursor-pointer">
      {content}
    </Link>
  ) : (
    content
  );
};
