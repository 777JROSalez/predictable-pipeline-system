'use client';

import { useScrollReveal } from '@/components/ui/useScrollReveal';

/**
 * ScrollRevealSection — Client component wrapper that activates
 * IntersectionObserver on its children's `.reveal` elements.
 *
 * Why a wrapper: Sections themselves can remain server components.
 * We only need client runtime for the observer.
 * Single responsibility: this component owns scroll reveal only.
 */
export default function ScrollRevealSection({
  children,
  className = '',
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  [key: string]: unknown;
}) {
  const ref = useScrollReveal();

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <div ref={ref as any} className={className} {...props}>
      {children}
    </div>
  );
}
