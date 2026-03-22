import { Link, Navigate, useParams } from 'react-router-dom';
import { getNewsArticleById } from '../data/newsArticles.js';
import useInView from '../hooks/useInView.js';

export default function NewsArticle() {
  const { id } = useParams();
  const article = id ? getNewsArticleById(id) : null;
  const heroRef = useInView();
  const contentRef = useInView();

  if (!article) {
    return <Navigate to="/" replace />;
  }

  return (
    <main className="news-article-page">
      <section ref={heroRef} className="news-article-hero fade-in-up">
        <div className="news-article-hero-media">
          <img src={article.image} alt={article.title} decoding="async" />
          <div className="news-article-hero-scrim" aria-hidden="true" />
        </div>
        <div className="container news-article-hero-inner">
          <Link className="news-article-back link" to="/#blog-articles">
            ← Back to Blog & Articles
          </Link>
          <p className="news-article-meta overline">
            {article.date}
            {article.meta ? ` · ${article.meta}` : ''}
          </p>
          <h1 className="news-article-title h2">{article.title}</h1>
        </div>
      </section>

      <article ref={contentRef} className="container section-spacing news-article-body fade-in-up">
        {article.body.map((para, i) => (
          <p key={i} className="news-article-p subtle">
            {para}
          </p>
        ))}
      </article>

      <style>{`
        .news-article-page {
          background: var(--color-bg);
          color: var(--color-ink-900);
        }
        .news-article-hero {
          position: relative;
          min-height: clamp(220px, 38vw, 360px);
          display: grid;
          align-items: end;
        }
        .news-article-hero-media {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }
        .news-article-hero-media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
        }
        .news-article-hero-scrim {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(2, 44, 54, 0.2) 0%,
            rgba(2, 44, 54, 0.75) 55%,
            rgba(2, 44, 54, 0.92) 100%
          );
        }
        .news-article-hero-inner {
          position: relative;
          z-index: 1;
          padding-block: clamp(28px, 5vw, 48px);
          max-width: 900px;
        }
        .news-article-back {
          display: inline-block;
          margin-bottom: 14px;
          font-weight: 700;
        }
        .news-article-meta {
          margin-bottom: 8px;
        }
        .news-article-title {
          font-size: clamp(1.35rem, 4vw, 2.25rem);
          line-height: 1.2;
          font-weight: 900;
        }
        .news-article-body {
          max-width: 70ch;
          display: grid;
          gap: 1.1rem;
          padding-bottom: clamp(48px, 10vw, 96px);
        }
        .news-article-p {
          font-size: clamp(1rem, 2.2vw, 1.08rem);
          line-height: 1.65;
        }
      `}</style>
    </main>
  );
}
