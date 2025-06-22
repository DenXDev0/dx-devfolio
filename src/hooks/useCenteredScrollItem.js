import { useEffect, useState } from 'react';

export const useCenteredScrollItem = (containerRef, itemSelector = '[data-index]') => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = container.querySelectorAll(itemSelector);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index'), 10);
            setActiveIndex(index);
          }
        });
      },
      {
        root: container,
        threshold: 0.1,
        rootMargin: '0px -45% 0px -45%', 
      }
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [containerRef, itemSelector]);

  return activeIndex;
};
