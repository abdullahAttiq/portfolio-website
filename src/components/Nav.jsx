import { useLocation } from 'react-router-dom';
import TransitionLink from './TransitionLink';
import content from '../content';

const { site, nav } = content;

export default function Nav() {
  const location = useLocation();

  return (
    <nav className="nav">
      <TransitionLink to="/" className="nav-logo">{site.logo}</TransitionLink>
      <div className="nav-links">
        {nav.links.map(({ to, label }) => (
          <TransitionLink
            key={to}
            to={to}
            className={location.pathname === to ? 'active' : ''}
          >
            {label}
          </TransitionLink>
        ))}
        <TransitionLink
          to="/contact"
          className={location.pathname === '/contact' ? 'active' : ''}
        >
          Contact
        </TransitionLink>
      </div>
    </nav>
  );
}
