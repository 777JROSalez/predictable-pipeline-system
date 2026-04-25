import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://predictpipeline.io'
  ),
  title:
    'Predictable Pipeline Systems — Client Acquisition Infrastructure for Service Businesses',
  description:
    'We install the trust, conversion, and pipeline infrastructure service businesses need to generate qualified conversations and more predictable client acquisition. Book a Pipeline Diagnostic.',
  keywords:
    'predictable pipeline systems, client acquisition infrastructure, service business pipeline, qualified conversations, pipeline diagnostic, follow-up systems, booking infrastructure',
  openGraph: {
    title:
      'Predictable Pipeline Systems — Client Acquisition Infrastructure for Service Businesses',
    description:
      'Client acquisition infrastructure for service businesses. Trust, conversion, and pipeline — installed.',
    type: 'website',
    siteName: 'Predictable Pipeline Systems',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Predictable Pipeline Systems — Client Acquisition Infrastructure for Service Businesses',
    description:
      'Client acquisition infrastructure for service businesses. Trust, conversion, and pipeline — installed.',
  },
  other: {
    'facebook-domain-verification': '25chd9zvo24fmy52jfvq8buvd8al1m',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="facebook-domain-verification"
          content="25chd9zvo24fmy52jfvq8buvd8al1m"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,600;1,700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a href="#main-content" className="skip-nav">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}