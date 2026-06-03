import { useParams, Navigate } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import TransitionLink from '../components/TransitionLink';
import ChapterNav from '../components/ChapterNav';
import { useScrollReveal } from '../hooks/useScrollReveal';
import content from '../content';

const { projects, projectOrder } = content;

/* Renders a single piece of project media — image or autoplaying video. */
function Media({ item, className }) {
  if (!item) return null;
  if (item.type === 'video') {
    return (
      <video
        className={className}
        src={item.src}
        autoPlay
        muted
        loop
        playsInline
        controls
        aria-label={item.alt || ''}
      />
    );
  }
  return (
    <img className={className} src={item.src} alt={item.alt || ''} loading="lazy" />
  );
}

export default function Project() {
  useScrollReveal();
  const { slug } = useParams();

  // Unknown / missing slug → redirect to the first project.
  const project = projects[slug];
  if (!project) {
    return <Navigate to={`/project/${projectOrder[0]}`} replace />;
  }

  // Next project cycles through projectOrder and wraps around.
  const idx = projectOrder.indexOf(slug);
  const nextSlug = projectOrder[(idx + 1) % projectOrder.length];
  const nextProject = projects[nextSlug];

  const hasGallery = project.gallery && project.gallery.length > 0;

  // Section index for the sticky chapter rail (only sections that exist).
  const chapters = [
    { id: 'overview', label: 'Overview' },
    { id: 'problem',  label: 'Problem'  },
    { id: 'approach', label: 'Approach' },
    ...(hasGallery ? [{ id: 'media', label: 'Media' }] : []),
    { id: 'numbers',  label: 'Numbers'  },
    { id: 'outcome',  label: 'Outcome'  },
  ];

  return (
    <>
      <Nav />
      <ChapterNav items={chapters} />

      {/* ===== HERO ===== */}
      <section className="proj-hero">
        <div className="proj-crumbs" data-reveal="">
          <TransitionLink to="/">Index</TransitionLink>
          <span className="sep">/</span>
          <TransitionLink to="/#work">Work</TransitionLink>
          <span className="sep">/</span>
          <span>{project.breadcrumb}</span>
        </div>

        <h1 className="proj-title" data-reveal-stagger="">
          {project.titleLine1}
          <br />
          <em>{project.titleLine2}</em>
        </h1>

        <div className="proj-meta" data-reveal-stagger="">
          <div className="field">
            <div className="lbl">Client</div>
            <div className="v">{project.meta.client}</div>
          </div>
          <div className="field">
            <div className="lbl">Role</div>
            <div className="v">{project.meta.role}</div>
          </div>
          <div className="field">
            <div className="lbl">Year</div>
            <div className="v">{project.meta.year}</div>
          </div>
          <div className="field">
            <div className="lbl">Stack</div>
            <div className="v">{project.meta.stack}</div>
          </div>
        </div>

        {project.links && project.links.length > 0 && (
          <div className="proj-links" data-reveal="">
            {project.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href !== '#' ? '_blank' : undefined}
                rel={link.href !== '#' ? 'noreferrer' : undefined}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </section>

      {/* ===== HERO MEDIA ===== */}
      <div className={`proj-image${project.hero ? ' has-media' : ''}`} data-reveal="">
        <Media item={project.hero} className="proj-image-media" />
      </div>

      {/* ===== OVERVIEW ===== */}
      <section className="overview" id="overview">
        <div className="left" data-reveal="">
          <div className="mono">{project.overview.sectionLabel}</div>
          <p className="display">
            {project.overview.displayHeading}
          </p>
        </div>
        <div className="right" data-reveal="">
          {project.overview.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      {/* ===== PULL QUOTE (optional) ===== */}
      {project.pullQuote && (
        <section className="pull" data-reveal-stagger="">
          <p className="quote">
            {project.pullQuote.quote}
          </p>
          <div className="attr">{project.pullQuote.attribution}</div>
        </section>
      )}

      {/* ===== CHAPTER: PROBLEM ===== */}
      <section className="chapter" id="problem">
        <div className="lhs" data-reveal="">
          <div className="sticky">
            <div className="num">{project.problem.sectionNum}</div>
            <h2>
              What was <em>broken</em>.
            </h2>
          </div>
        </div>
        <div className="rhs" data-reveal="">
          {project.problem.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <ul>
            {project.problem.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
          <p>{project.problem.outro}</p>
        </div>
      </section>

      {/* ===== CHAPTER: APPROACH ===== */}
      <section className="chapter" id="approach">
        <div className="lhs" data-reveal="">
          <div className="sticky">
            <div className="num">{project.approach.sectionNum}</div>
            <h2>
              What I <em>did</em>.
            </h2>
          </div>
        </div>
        <div className="rhs" data-reveal="">
          <p>{project.approach.intro}</p>
          {project.approach.sections.map((s) => (
            <div key={s.heading}>
              <h3>{s.heading}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== MEDIA / GALLERY (optional) ===== */}
      {hasGallery && (
        <section className="media-section" id="media">
          <div className="media-head" data-reveal="">
            <span className="num">§ — Media</span>
            <span className="dot" />
          </div>
          <div className="gallery" data-reveal-stagger="">
            {project.gallery.map((item, i) => (
              <div
                key={i}
                className={`shot${item.wide ? ' wide' : ''}${item.type === 'video' ? ' is-video' : ''}`}
              >
                <Media item={item} className="shot-media" />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ===== STATS ===== */}
      <section className="stats-strip" id="numbers">
        <h2 data-reveal="">
          The <em>numbers</em> behind it.
        </h2>
        <div className="stats-row" data-reveal-stagger="">
          {project.stats.items.map((s) => (
            <div className="stat" key={s.label}>
              <div className="num">
                {s.accent ? <em>{s.num}</em> : s.num}
              </div>
              <div className="label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CHAPTER: OUTCOME ===== */}
      <section className="chapter" id="outcome">
        <div className="lhs" data-reveal="">
          <div className="sticky">
            <div className="num">{project.outcome.sectionNum}</div>
            <h2>
              What <em>happened</em>.
            </h2>
          </div>
        </div>
        <div className="rhs" data-reveal="">
          {project.outcome.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      {/* ===== NEXT PROJECT ===== */}
      <section className="next-proj">
        <div className="lbl" data-reveal="">
          Next case
        </div>
        <TransitionLink to={`/project/${nextSlug}`} data-reveal="">
          <span>{nextProject.titleLine1} {nextProject.titleLine2}</span>{' '}
          <span className="arrow">↗</span>
        </TransitionLink>
      </section>

      <Footer />
    </>
  );
}
