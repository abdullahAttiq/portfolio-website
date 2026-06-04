import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { useScrollReveal } from '../hooks/useScrollReveal';
import content from '../content';

const { site, contact } = content;

export default function Contact() {
  useScrollReveal();

  const tel = `tel:${site.phone.replace(/\s/g, '')}`;
  const socials = [
    { label: 'GitHub', href: site.socials.github },
    { label: 'LinkedIn', href: site.socials.linkedin },
    { label: 'X / Twitter', href: site.socials.twitter },
  ];

  return (
    <>
      <Nav />

      <section className="contact">
        {/* Left — statement + primary email */}
        <div className="contact-main" data-reveal-stagger="">
          <div className="label">{contact.label}</div>
          <h1>
            {contact.line1}
            <br />
            <em>{contact.line2}</em>
          </h1>
          <p className="lead">{contact.body}</p>
          <a className="contact-email" href={`mailto:${site.email}`}>
            <span>{site.email}</span>
            <span className="arrow">↗</span>
          </a>
        </div>

        {/* Right — channels, set into the open space */}
        <aside className="contact-details" data-reveal-stagger="">
          <div className="detail-block">
            <div className="col-label">Direct</div>
            <a href={tel}>{site.phone}</a>
            <span className="loc">{site.location}</span>
          </div>

          <div className="detail-block">
            <div className="col-label">Elsewhere</div>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href !== '#' ? '_blank' : undefined}
                rel={s.href !== '#' ? 'noreferrer' : undefined}
              >
                {s.label} <span className="arrow">↗</span>
              </a>
            ))}
          </div>

          <div className="detail-block">
            <div className="col-label">Documents</div>
            <a href={site.cvUrl} download>
              Download CV (PDF) <span className="arrow down">↓</span>
            </a>
          </div>
        </aside>
      </section>

      <Footer />
    </>
  );
}
