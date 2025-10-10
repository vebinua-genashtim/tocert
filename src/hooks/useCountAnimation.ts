import { useEffect, useState, useRef } from 'react';

export const useCountAnimation = (
  end: number,
  duration: number = 2000,
  start: number = 0,
  isInView: boolean = true
) => {
  const [count, setCount] = useState(start);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;

    hasAnimated.current = true;
    const startTime = Date.now();
    const range = end - start;

    const timer = setInterval(() => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(start + range * easeOutQuart);

      setCount(currentCount);

      if (progress === 1) {
        clearInterval(timer);
        setCount(end);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration, start, isInView]);

  return count;
};
