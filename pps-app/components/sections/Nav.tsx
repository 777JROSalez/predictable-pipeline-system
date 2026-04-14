'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '@/styles/modules/Nav.module.css';

const navLinks = [
  { label: 'The System', href: '/#system-modules' },
  { label: 'Why It Works', href: '/#system-overview' },
  { label: 'Results', href: '/#case-studies' },
  { label: 'Engagements', href: '/#investment-scope' },
  { label: 'FAQ', href: '/#faq' },
];

/**
 * Nav — Sticky top navigation with single primary CTA.
 * Becomes slightly elevated on scroll via border + bg shift.
 * Mobile: hamburger toggle shows nav links as a full-width panel below the bar.
 */
export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavLinkClick = () => {
    setIsMobileOpen(false);
  };

  return (
    <header
      className={`${styles.nav} ${isScrolled ? styles.navScrolled : ''}`}
      role="banner"
    >
      <div className={`container ${styles.inner}`}>
        {/* Brand mark */}
        <Link href="/" className={styles.brand} aria-label="Predictable Pipeline Systems — Home">
          <span className={styles.brandMark} aria-hidden="true">▸</span>
          <span className={styles.brandName}>Pipeline Systems</span>
        </Link>

        {/* Navigation links — hidden on mobile, shown via panel */}
        <nav aria-label="Primary navigation" id="primary-nav-menu">
          <ul className={styles.links}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={styles.link}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right group: CTA + hamburger */}
        <div className={styles.navActions}>
          <a
            href="https://calendly.com/tylertejral/diagnostic-45-minute-revenue-gap-audit"
            className={`cta-primary ${styles.navCta}`}
            id="nav-cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a Pipeline Diagnostic
          </a>

          {/* Hamburger toggle — visible on mobile only */}
          <button
            className={`${styles.hamburger} ${isMobileOpen ? styles.hamburgerOpen : ''}`}
            aria-label={isMobileOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={isMobileOpen}
            aria-controls="mobile-nav-panel"
            onClick={() => setIsMobileOpen((prev) => !prev)}
            type="button"
          >
            <span className={styles.bar} aria-hidden="true" />
            <span className={styles.bar} aria-hidden="true" />
            <span className={styles.bar} aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Mobile navigation panel */}
      <div
        id="mobile-nav-panel"
        className={`${styles.mobilePanel} ${isMobileOpen ? styles.mobilePanelOpen : ''}`}
        aria-hidden={!isMobileOpen}
      >
        <nav className="container" aria-label="Mobile navigation">
          <ul className={styles.mobileLinks}>
            {navLinks.map((link) => (
              <li key={link.href} className={styles.mobileLinkItem}>
                <a href={link.href} className={styles.mobileLink} onClick={handleNavLinkClick}>
                  {link.label}
                </a>
              </li>
            ))}
            <li className={styles.mobileLinkItem}>
              <a
                href="https://calendly.com/tylertejral/diagnostic-45-minute-revenue-gap-audit"
                className={`cta-primary ${styles.mobileCta}`}
                onClick={handleNavLinkClick}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a Pipeline Diagnostic
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
