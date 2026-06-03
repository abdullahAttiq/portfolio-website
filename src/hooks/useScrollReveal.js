import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -40px 0px' }
    );

    function bindReveals() {
      document
        .querySelectorAll('[data-reveal]:not(.bound), [data-reveal-stagger]:not(.bound)')
        .forEach((el) => {
          el.classList.add('bound');
          const r = el.getBoundingClientRect();
          if (r.top < window.innerHeight && r.bottom > 0) {
            el.classList.add('in');
          } else {
            io.observe(el);
          }
        });
    }

    bindReveals();

    // Fallback: force-reveal anything still hidden after 1.5s
    const fallback = setTimeout(() => {
      document
        .querySelectorAll('[data-reveal]:not(.in), [data-reveal-stagger]:not(.in)')
        .forEach((el) => el.classList.add('in'));
    }, 1500);

    return () => {
      io.disconnect();
      clearTimeout(fallback);
    };
  }, []);
}
