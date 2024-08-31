import { useState, useEffect, MutableRefObject } from "react";

export const animateOnAppear = (
  ref: MutableRefObject<Element | null>,
  threshold: number = 0.3
): boolean => {
  const [hasIntersected, setHasIntersected] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasIntersected(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, threshold]);

  return hasIntersected;
};
