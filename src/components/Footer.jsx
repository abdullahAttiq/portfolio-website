import TransitionLink from './TransitionLink';
import content from '../content';

const { site, footer } = content;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-big">
        <TransitionLink to="/contact">
          {footer.bigLinkText} <span className="arrow">↗</span>
        </TransitionLink>
      </div>

      <div className="footer-grid">
        {/* Sitemap */}
        <div className="footer-col">
          <div className="footer-col-label">Sitemap</div>
          {footer.sitemap.map((item) =>
            item.type === 'download' ? (
              <a key={item.label} href={item.href} download>{item.label}</a>
            ) : (
              <TransitionLink key={item.label} to={item.to}>{item.label}</TransitionLink>
            )
          )}
        </div>

        {/* Social */}
        <div className="footer-col">
          <div className="footer-col-label">Elsewhere</div>
          {footer.social.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href !== '#' ? '_blank' : undefined}
              rel={item.href !== '#' ? 'noreferrer' : undefined}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Direct contact */}
        <div className="footer-col">
          <div className="footer-col-label">Direct</div>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={`tel:${site.phone.replace(/\D/g, '').replace(/^/, '+')}`}>{site.phone}</a>
        </div>

        {/* Colophon */}
        <div className="footer-col">
          <div className="footer-col-label">Colophon</div>
          <span style={{ display: 'block', color: 'rgba(242,237,228,0.6)', fontSize: '14px', lineHeight: '1.5' }}>
            {footer.colophon}
          </span>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {year} {site.name}. All rights reserved.</span>
        <span>{site.version} — {site.edition}</span>
      </div>
    </footer>
  );
}
