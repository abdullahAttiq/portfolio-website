import content from '../content';

const ITEMS = content.home.marquee;

function Track() {
  return (
    <div className="marquee-track">
      {ITEMS.map(({ text, italic }, i) => (
        <span key={i} className={`marquee-item${italic ? ' italic' : ''}`}>{text}</span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="marquee" data-reveal>
      <Track />
      {/* Duplicate track for seamless infinite loop */}
      <Track />
    </div>
  );
}
