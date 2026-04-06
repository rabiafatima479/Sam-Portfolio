import React, { useEffect, useRef } from 'react';

const Cursor = () => {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX: x, clientY: y } = e;
      
      requestAnimationFrame(() => {
        if (cursorRef.current) {
          // Ring size 36px (w-9 approx), offset 18px
          cursorRef.current.style.transform = `translate3d(${x - 18}px, ${y - 18}px, 0)`;
        }
        if (dotRef.current) {
          // Dot size 28px (w-7 approx), offset 14px
          dotRef.current.style.transform = `translate3d(${x - 14}px, ${y - 14}px, 0)`;
        }
      });
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <>
      {/* Outer Ring - Slightly larger for a bold look */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-9 h-9 border-[1px] border-[#DAA520]/60 rounded-full pointer-events-none z-[9999] hidden md:block"
        style={{ 
          willChange: 'transform',
          transition: 'transform 0.1s cubic-bezier(0.23, 1, 0.32, 1)' 
        }}
      />
      
      {/* Inner Dot - Lightened and Upsized */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-7 h-7 rounded-full pointer-events-none z-[10000] hidden md:block"
        style={{ 
          willChange: 'transform',
          // Vibrant Royal Purple (Pehle se kaafi light aur bright)
          backgroundColor: '#6B21A8', 
          // Soft glow effect
          boxShadow: '0 0 20px rgba(107, 33, 168, 0.4)',
          opacity: 0.9
        }}
      />
    </>
  );
};

export default Cursor;