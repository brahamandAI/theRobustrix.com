import { Link } from 'react-router-dom';
import useInView from '../hooks/useInView.js';
import { NEWS_CARD_ITEMS } from '../data/newsArticles.js';

export default function News() {
  const ref = useInView();
  function onImgError(e, id) {
    const map = {
      n1: '/pictures/home1.png',
      n2: '/pictures/fanlesscpu.png',
      n3: '/pictures/aiplatforms.jpg',
      n4: '/pictures/intelprocrssros.png',
    };
    e.currentTarget.src = map[id] || '/assets/news-1.svg';
  }
  return (
    <div ref={ref} className="news fade-in-up">
      {NEWS_CARD_ITEMS.map((n) => (
        <Link to={`/blog/${n.id}`} className="card news-card" key={n.id}>
          <img
            className="thumb"
            src={n.image}
            alt={n.title}
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
            onError={(ev) => onImgError(ev, n.id)}
          />
          <div className="body">
            <p className="date">{n.date}{n.meta ? ` · ${n.meta}` : ''}</p>
            <h3 className="title">{n.title}</h3>
            {n.excerpt && <p className="excerpt">{n.excerpt}</p>}
            <span className="link">Read More...</span>
          </div>
        </Link>
      ))}

      <style>{`
        .news {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-top: 24px;
        }
        .news-card { text-decoration: none; color: inherit; overflow: hidden; }
        .thumb { width: 100%; height: 160px; object-fit: cover; background: var(--color-bg-alt); }
        .body { padding: 14px 16px 16px 16px; display: grid; gap: 8px; }
        .date { font-size: 0.86rem; color: var(--color-ink-500); }
        .title { font-size: 1.02rem; line-height: 1.3; font-weight: 800; }
        .excerpt { color: var(--color-ink-700); }

        @media (max-width: 1023px) {
          .news { grid-template-columns: 1fr; }
          .thumb { height: 180px; }
        }
      `}</style>
    </div>
  );
}


