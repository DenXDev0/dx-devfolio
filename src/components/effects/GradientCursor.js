'use client';

import { useEffect, useRef } from 'react';

export default function GradientCursor() {
  const ref = useRef();

  useEffect(() => {
    const el = ref.current;
    const onMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      el.style.backgroundImage = `
        radial-gradient(circle at ${x}% ${y}%,
          rgba(6, 182, 212, 0.15) 0%, transparent 40%),
        radial-gradient(circle at ${100 - x}% ${100 - y}%,
          rgba(139, 92, 246, 0.15) 0%, transparent 40%)
      `;
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div
      ref={ref}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: -1,
        pointerEvents: 'none',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        transition: 'background 0.3s ease',
      }}
    />
  );
}
