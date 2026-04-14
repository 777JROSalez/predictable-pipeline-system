import styles from '@/styles/modules/Footer.module.css';

/**
 * Footer — Credibility footer with brand mark, nav links, credentials,
 * and legal.
 *
 * DESIGN.md: "Minimal. Nav links, legal, brand mark."
 * Extended with credibility signals: sector served, system type, approach tags.
 */

const footerLinks = [
  { label: 'How It Works', href: '/#system-modules' },
  { label: 'Why This Works', href: '/#system-overview' },
  { label: 'Who It Is For', href: '/#who-its-for' },
  { label: 'System Installs', href: '/#case-studies' },
  { label: 'Outcomes', href: '/#proof' },
  { label: 'Engagements', href: '/#investment-scope' },
  { label: 'FAQ', href: '/#faq' },
];

const credibilityTags = [
  'Trust & Conversion Infrastructure',
  'Qualified Conversation Systems',
  'Pipeline Architecture',
  'Front-End Business Systems',
  'High-Trust Service Businesses',
];

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className="container">

        {/* Top: brand + nav + CTA */}
        <div className={styles.top}>
          {/* Brand */}
          <div className={styles.brand}>
            <span className={styles.brandMark} aria-hidden="true">▸</span>
            <div>
              <span className={styles.brandName}>Predictable Pipeline Systems</span>
              <span className={styles.brandTagline}>Trust, conversion, and pipeline — installed for service businesses</span>
            </div>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <ul className={styles.links}>
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={styles.link}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA */}
          <div className={styles.ctaBlock}>
            <a href="/assessment" className="cta-primary" id="footer-cta">
              Book a Pipeline Diagnostic
            </a>
            <p className={styles.ctaMicro}>30 min · No commitment · Clear fit signal</p>
          </div>
        </div>

        <hr className="rule" />

        {/* Credibility tags */}
        <div className={styles.credibility} aria-label="Areas of infrastructure focus">
          {credibilityTags.map((tag, index) => (
            <span key={tag} className={styles.credTag}>
              {tag}
              {index < credibilityTags.length - 1 && (
                <span className={styles.credDivider} aria-hidden="true">·</span>
              )}
            </span>
          ))}
        </div>

        <hr className="rule" />

        {/* Bottom: legal */}
        <div className={styles.bottom}>
          <p className={styles.legal}>
            © 2026 Predictable Pipeline Systems. All rights reserved.
          </p>
          <p className={styles.legal}>
            A commercially intelligent front-end system for service businesses.
          </p>
        </div>
      </div>
    </footer>
  );
}
