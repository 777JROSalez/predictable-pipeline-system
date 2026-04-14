'use client';

import { useEffect, useRef } from 'react';

/**
 * Hook: Sets up IntersectionObserver to add `.is-visible` to `.reveal` elements
 * inside the given container ref. Used on every page section.
 *
 * Why a hook rather than inline: single responsibility, reusable across sections.
 */
export function useScrollReveal() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const elements = container.querySelectorAll<HTMLElement>('.reveal');
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add('is-visible');
            // Once visible, stop observing — no re-animation on scroll up
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return containerRef;
}
