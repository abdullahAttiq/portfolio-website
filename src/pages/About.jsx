import Nav from '../components/Nav';
import Footer from '../components/Footer';
import TransitionLink from '../components/TransitionLink';
import { useScrollReveal } from '../hooks/useScrollReveal';
import content from '../content';

const { site, about } = content;

export default function About() {
  useScrollReveal();

  return (
    <>
      <Nav />

      {/* ===== HERO ===== */}
      <section className="about-hero">
        <div className="left" data-reveal-stagger="">
          <div className="label">{about.hero.label}</div>
          <h1>
            Hi, I'm
            <br />
            <em>{about.hero.firstName}</em>.
          </h1>
        </div>
        <div className="right" data-reveal="">
          {about.hero.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      {/* ===== PORTRAIT PLACEHOLDER ===== */}
      <div className="about-portrait" data-reveal="">
        <div className="meta">
          <span>{about.portrait.caption1}</span>
          <span>{about.portrait.caption2}</span>
        </div>
      </div>

      {/* ===== LONG BIO ===== */}
      <section className="bio">
        <div className="left" data-reveal="">
          <div className="mono">{about.bio.sectionLabel}</div>
          <p className="display">{about.bio.displayHeading}</p>
        </div>
        <div className="right" data-reveal="">
          {about.bio.paragraphs.map((p, i) => (
            <p key={i} className={i === 0 ? 'dropcap' : ''}>
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* ===== EXPERIENCE ===== */}
      <section className="experience">
        <div className="section-head" data-reveal-stagger="">
          <div className="num">§ 02 — Trajectory</div>
          <h2>
            <em> Places </em> I've been.
          </h2>
        </div>

        <div className="exp-table">
          {about.experience.map((e, i) => (
            <div className="exp-row" key={i} data-reveal="">
              <div className="year">{e.year}</div>
              <div className="role">
                {e.role}, <em>{e.company}</em>
              </div>
              <div className="desc">{e.desc}</div>
              <div className="loc">{e.loc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== SKILLS ===== */}
      <section className="skills">
        <div className="section-head" data-reveal-stagger="">
          <div className="num">§ 03 — Toolkit</div>
          <h2>
            The <em>stack</em>, today.
          </h2>
        </div>

        <div className="skills-grid">
          {about.skills.map((col) => (
            <div className="skill-col" key={col.category} data-reveal="">
              <h4>{col.category}</h4>
              <ul>
                {col.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ===== NOW ===== */}
      <section className="now">
        <div className="section-head-now" data-reveal-stagger="">
          <div className="mono">§ 04 — Now</div>
          <h2>
            What I'm <em>into</em> right now.
          </h2>
        </div>
        <div className="grid">
          {about.now.map((card) => (
            <div className="now-card" key={card.label} data-reveal="">
              <div className="label">{card.label}</div>
              <div className="v">
                {card.italic ? (
                  <>
                    <em>{card.value}</em>
                    {card.after}
                  </>
                ) : (
                  card.value
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CV DOWNLOAD ===== */}
      <section className="cv">
        <div className="small" data-reveal="">
          {about.cv.sectionLabel}
        </div>
        <h2 data-reveal="">
          Want the <em>résumé</em>?
        </h2>
        <div className="btn-row" data-reveal="">
          <a className="btn primary" href={site.cvUrl} download>
            {about.cv.downloadLabel}
          </a>
          <a className="btn ghost" href={`mailto:${site.email}`}>
            {about.cv.emailLabel}
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
