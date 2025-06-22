// components/MouseCarousel/useHorizontalScroll.js
import { useRef } from 'react';

export const useHorizontalScroll = (containerRef) => {
  const handleWheel = (e) => {
    e.preventDefault();
    const container = containerRef.current;
    if (!container) return;

    container.scrollLeft += e.deltaY;
  };

  return { handleWheel };
};