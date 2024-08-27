import React from 'react';

interface PillProps {
  text: string;
}

const RoundedPill: React.FC<PillProps> = ({ text }) => {
  return (
    <div
      className={`bg-turquoise inline-block px-2 py-1 rounded-full text-xs text-center text-light shadow-lg cursor-default`}
    >
      {text}
    </div>
  );
};

export default RoundedPill;
