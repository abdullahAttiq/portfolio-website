import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export default function PageTransition() {
  const coverRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const cover = coverRef.current;
    if (!cover) return;

    // Curtain wipes in, then lifts out
    cover.classList.remove('curtain-out');
    cover.classList.add('curtain-in');

    const t1 = setTimeout(() => {
      cover.classList.remove('curtain-in');
      cover.classList.add('curtain-out');
    }, 50);

    const t2 = setTimeout(() => {
      cover.classList.remove('curtain-out');
    }, 950);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [location.pathname]);

  return <div ref={coverRef} className="page-cover" />;
}
