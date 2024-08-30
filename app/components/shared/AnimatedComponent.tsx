"use client";

import React, { useRef, ReactNode } from "react";
import { animateOnAppear } from "./hooks/animateOnAppear";

interface AnimatedComponentProps {
  children: ReactNode;
}

const AnimatedComponent: React.FC<AnimatedComponentProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isVisible = animateOnAppear(ref);

  return (
    <div ref={ref} className={`fade-in ${isVisible ? "visible" : ""}`}>
      {children}
    </div>
  );
};

export default AnimatedComponent;
