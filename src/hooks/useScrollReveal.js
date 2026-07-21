import { useEffect, useRef } from 'react';

/**
 * useScrollReveal
 * Agrega la clase `is-visible` a cualquier elemento con clase `.reveal`
 * cuando entra al viewport. Sirve para animaciones por scroll.
 */
export default function useScrollReveal(options = {}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const root = containerRef.current ?? document;
    const elements = root.querySelectorAll('.reveal');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: options.threshold ?? 0.15,
        rootMargin: options.rootMargin ?? '0px 0px -50px 0px',
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, [options.threshold, options.rootMargin]);

  return containerRef;
}
