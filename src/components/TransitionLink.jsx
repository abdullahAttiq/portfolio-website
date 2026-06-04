import { useNavigate, useLocation } from 'react-router-dom';

export default function TransitionLink({ to, children, className, style, ...props }) {
  const navigate = useNavigate();
  const location = useLocation();

  function handleClick(e) {
    e.preventDefault();

    const [rawPath, hash] = to.split('#');
    const targetPath = rawPath || '/';

    // Same-page navigation (in-page anchor like "/#work", or re-clicking the
    // route you're already on). The curtain must NOT play here: PageTransition
    // only lifts it on a pathname change, so a same-page curtain would stay
    // stuck as a black overlay. Just scroll smoothly instead.
    if (targetPath === location.pathname) {
      if (hash) {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    // Cross-page navigation: wipe the curtain in, then navigate. PageTransition
    // lifts it once the new route's pathname commits.
    const cover = document.querySelector('.page-cover');
    if (cover) {
      cover.classList.remove('curtain-out');
      cover.classList.add('curtain-in');
    }
    setTimeout(() => navigate(to), 600);
  }

  return (
    <a href={to} onClick={handleClick} className={className} style={style} {...props}>
      {children}
    </a>
  );
}
