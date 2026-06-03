import { useEffect, useState } from 'react';

/*
 * Sticky chapter rail for case-study pages.
 * - Scroll-spy highlights the section currently in view.
 * - Clicking a chapter smooth-scrolls to it.
 * `items` = [{ id, label }] — ids must match section element ids on the page.
 */
export default function ChapterNav({ items }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const sections = items
      .map((it) => document.getElementById(it.id))
      .filter(Boolean);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [items]);

  function handleClick(e, id) {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActive(id);
    }
  }

  return (
    <nav className="chapter-nav" aria-label="Case study sections">
      <ul>
        {items.map((it, i) => (
          <li key={it.id} className={active === it.id ? 'active' : ''}>
            <a href={`#${it.id}`} onClick={(e) => handleClick(e, it.id)}>
              <span className="idx">{String(i + 1).padStart(2, '0')}</span>
              <span className="bar" />
              <span className="lbl">{it.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
