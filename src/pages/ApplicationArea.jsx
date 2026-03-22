import { Link, Navigate, useParams } from 'react-router-dom';
import { getApplicationAreaById } from '../data/applicationAreas.js';
import useInView from '../hooks/useInView.js';

export default function ApplicationArea() {
  const { id } = useParams();
  const area = id ? getApplicationAreaById(id) : null;
  const heroRef = useInView();
  const contentRef = useInView();

  if (!area) {
    return <Navigate to="/" replace />;
  }

  return (
    <main className="app-area-page">
      <section ref={heroRef} className="app-area-hero fade-in-up">
        <div className="app-area-hero-media">
          <img src={area.image} alt={area.title} decoding="async" />
          <div className="app-area-hero-scrim" aria-hidden="true" />
        </div>
        <div className="container app-area-hero-inner">
          <Link className="app-area-back link" to="/#ai-applications">
            ← Applications of Our AI-Driven Solutions
          </Link>
          <p className="app-area-kicker overline">Application area</p>
          <h1 className="app-area-title h2">{area.title}</h1>
        </div>
      </section>

      <div ref={contentRef} className="container section-spacing app-area-layout fade-in-up">
        <aside className="app-area-aside card">
          <h2 className="app-area-aside-title">At a glance</h2>
          <ul className="app-area-bullets">
            {area.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </aside>
        <article className="app-area-body">
          {area.body.map((para, i) => (
            <p key={i} className="app-area-p subtle">
              {para}
            </p>
          ))}
        </article>
      </div>

      <style>{`
        .app-area-page {
          background: var(--color-bg);
          color: var(--color-ink-900);
        }
        .app-area-hero {
          position: relative;
          min-height: clamp(220px, 38vw, 360px);
          display: grid;
          align-items: end;
        }
        .app-area-hero-media {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }
        .app-area-hero-media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
        }
        .app-area-hero-scrim {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(2, 44, 54, 0.2) 0%,
            rgba(2, 44, 54, 0.75) 55%,
            rgba(2, 44, 54, 0.92) 100%
          );
        }
        .app-area-hero-inner {
          position: relative;
          z-index: 1;
          padding-block: clamp(28px, 5vw, 48px);
          max-width: 900px;
        }
        .app-area-back {
          display: inline-block;
          margin-bottom: 14px;
          font-weight: 700;
        }
        .app-area-kicker {
          margin-bottom: 8px;
        }
        .app-area-title {
          font-size: clamp(1.35rem, 4vw, 2.25rem);
          line-height: 1.2;
          font-weight: 900;
        }
        .app-area-layout {
          display: grid;
          gap: clamp(20px, 4vw, 32px);
          grid-template-columns: 1fr;
          align-items: start;
          padding-bottom: clamp(48px, 10vw, 96px);
        }
        @media (min-width: 900px) {
          .app-area-layout {
            grid-template-columns: minmax(240px, 320px) minmax(0, 1fr);
          }
        }
        .app-area-aside {
          padding: 18px 20px;
          display: grid;
          gap: 12px;
        }
        .app-area-aside-title {
          font-size: 0.95rem;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--color-brand-primary);
        }
        .app-area-bullets {
          margin: 0;
          padding-left: 1.15rem;
          display: grid;
          gap: 8px;
          color: var(--color-ink-700);
          font-size: 0.95rem;
          line-height: 1.45;
        }
        .app-area-body {
          display: grid;
          gap: 1.1rem;
          max-width: 65ch;
        }
        .app-area-p {
          font-size: clamp(1rem, 2.2vw, 1.08rem);
          line-height: 1.65;
        }
      `}</style>
    </main>
  );
}
