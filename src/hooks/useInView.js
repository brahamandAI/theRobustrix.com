import { useEffect, useRef } from 'react';

export default function useInView(options = {}) {
  const ref = useRef(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          node.classList.add('is-inview');
          if (options.once !== false) {
            obs.unobserve(node);
          }
        } else if (options.once === false) {
          node.classList.remove('is-inview');
        }
      });
    }, {
      rootMargin: options.rootMargin ?? '0px 0px 0px 0px',
      threshold: options.threshold ?? 0,
    });
    obs.observe(node);
    return () => obs.disconnect();
  }, [options.threshold, options.once, options.rootMargin]);
  return ref;
}


