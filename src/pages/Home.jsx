import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Marquee from '../components/Marquee';
import TransitionLink from '../components/TransitionLink';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useClock } from '../hooks/useClock';
import content from '../content';

const { site, home, projects } = content;
const { heroA, heroB, heroC, work, services, cta } = home;

export default function Home() {
  useScrollReveal();
  const clock = useClock();

  return (
    <>
      <Nav />

      {/* ===== HERO A — PORTRAIT / STACKED ===== */}
      <section className="hero hero-a">
        <div className="hero-bg" aria-hidden="true" />

        <div className="hero-meta" data-reveal-stagger>
          {heroA.meta.map((item, i) => (
            <div className="col mono" key={i}>
              <span>{item.label}</span>
              <span>
                {i === 1
                  ? `${item.value} · ${clock || '--:-- UTC'}`
                  : item.value}
              </span>
            </div>
          ))}
        </div>

        <h1 className="hero-title" data-reveal-stagger>
          <span className="row">
            <span className="strike">{heroA.title.strikeWord}</span> {heroA.title.mainWord}
          </span>
          <span className="row indent">{heroA.title.indentLine}</span>
          <span className="row">{heroA.title.line3}</span>
          <span className="row">
            <em className="italic">{heroA.title.emWord}</em>.
          </span>
        </h1>

        <div className="hero-a-tag" data-reveal>
          <div className="mono">{heroA.tag.eyebrow}</div>
          <div className="display italic">{heroA.tag.body}</div>
        </div>

        <div className="scroll-cue mono">
          <span>Scroll</span>
          <div className="line" />
        </div>
      </section>

      {/* ===== HERO B — KINETIC / ROLLING ===== */}
      <section className="hero hero-b">
        <div className="hero-meta" data-reveal-stagger>
          {heroB.meta.map((item, i) => (
            <div className="col mono" key={i}>
              <span>{item.label}</span>
              <span>
                {i === 1
                  ? `${item.value} — ${clock || '--:-- UTC'}`
                  : item.value}
              </span>
            </div>
          ))}
        </div>

        <h1 className="hero-title" data-reveal-stagger>
          <span className="row">{heroB.leadIn}</span>
          <span className="row">
            <span className="roll">
              <span className="roller">
                {/* Repeat first word at end for seamless loop */}
                {[...heroB.rollingWords, heroB.rollingWords[0]].map((word, i) => (
                  <span key={i}>{word}</span>
                ))}
              </span>
            </span>
          </span>
          <span className="row hero-b-row2">
            <span>{heroB.trailingLine}</span>
          </span>
        </h1>

        <div className="scroll-cue mono">
          <span>Scroll</span>
          <div className="line" />
        </div>
      </section>

      {/* ===== HERO C — MANIFESTO ===== */}
      <section className="hero hero-c">
        <div className="hero-meta" data-reveal-stagger>
          {heroC.meta.map((item, i) => (
            <div className="col mono" key={i}>
              <span>{item.label}</span>
              <span>{item.value}</span>
            </div>
          ))}
        </div>

        <div className="manifesto" data-reveal-stagger>
          <p className="display">
            I'm{' '}
            <em>
              {heroC.manifesto.name}
              <span className="manifesto-ref">{heroC.manifesto.nameRef}</span>
            </em>
            , {heroC.manifesto.body}
          </p>
        </div>

        <div className="scroll-cue mono">
          <span>Scroll</span>
          <div className="line" />
        </div>
      </section>

      {/* ===== MARQUEE ===== */}
      <Marquee />

      {/* ===== SELECTED WORK ===== */}
      <section className="work" id="work">
        <div className="shell">
          <div className="section-head" data-reveal-stagger>
            <div className="num">
              <span>§ 02 — Selected Work</span>
              <span className="dot" />
            </div>
            <h2 className="section-title">
              Things I've <span className="italic" style={{ color: 'var(--accent)' }}>made</span> lately.
            </h2>
          </div>
        </div>

        <div className="shell">
          <div className="work-list">
            {work.map((item) => {
              const hero = projects[item.slug]?.hero;
              return (
                <TransitionLink
                  key={item.num}
                  to={`/project/${item.slug}`}
                  className="work-item"
                  data-reveal=""
                >
                  <div className="num">{item.num}</div>
                  <div className="title">{item.title}</div>
                  <div className="tag">{item.tag}</div>
                  <div className="year">{item.year}</div>
                  <div className="preview">
                    {hero && (hero.type === 'video' ? (
                      <video
                        className="preview-media"
                        src={hero.src}
                        muted
                        loop
                        playsInline
                        autoPlay
                      />
                    ) : (
                      <img className="preview-media" src={hero?.src} alt="" />
                    ))}
                    <span className="preview-label">View case study →</span>
                  </div>
                </TransitionLink>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="services">
        <div className="shell">
          <div className="section-head" data-reveal-stagger>
            <div className="num">
              <span>§ 03 — Services</span>
              <span className="dot" />
            </div>
            <h2 className="section-title">
              What I can{' '}
              <span className="italic" style={{ color: 'var(--accent-2)' }}>do</span>{' '}
              for you.
            </h2>
          </div>

          <div className="services-grid">
            {services.map((s) => (
              <div className="service" key={s.num} data-reveal="">
                <div className="num">{s.num}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className="tools">
                  {s.tools.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA STRIP ===== */}
      <section className="cta-strip" data-reveal-stagger="">
        <div className="small">{cta.sectionLabel}</div>
        <h2>
          <em className="italic">{cta.line1}</em>
          <br />
          Let's <em className="italic">build</em>.
        </h2>
        <a className="big" href={`mailto:${site.email}`}>
          <span>{site.email}</span>
          <span>→</span>
        </a>
      </section>

      <Footer />
    </>
  );
}
