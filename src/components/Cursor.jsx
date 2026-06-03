import { useEffect, useRef } from 'react';

export default function Cursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    if (!matchMedia('(pointer: fine)').matches) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    let tx = 0, ty = 0, cx = 0, cy = 0;
    let rafId;

    function onMouseMove(e) {
      tx = e.clientX;
      ty = e.clientY;
    }

    function raf() {
      cx += (tx - cx) * 0.22;
      cy += (ty - cy) * 0.22;
      cursor.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
      rafId = requestAnimationFrame(raf);
    }

    window.addEventListener('mousemove', onMouseMove);
    rafId = requestAnimationFrame(raf);

    function addBig(e) {
      const el = e.target.closest('a, button, [data-cursor="big"]');
      if (el) cursor.classList.add('big');
    }
    function removeBig(e) {
      const el = e.target.closest('a, button, [data-cursor="big"]');
      if (el) cursor.classList.remove('big');
    }

    document.addEventListener('mouseover', addBig);
    document.addEventListener('mouseout', removeBig);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', addBig);
      document.removeEventListener('mouseout', removeBig);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return <div ref={cursorRef} className="cursor" />;
}
