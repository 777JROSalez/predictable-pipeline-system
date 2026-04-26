'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

export default function MetaPixelPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    let tries = 0;

    const interval = setInterval(() => {
      if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', 'PageView');
        clearInterval(interval);
      }

      tries++;
      if (tries > 10) {
        clearInterval(interval);
      }
    }, 300);

    return () => clearInterval(interval);
  }, [pathname, searchParams]);

  return null;
}