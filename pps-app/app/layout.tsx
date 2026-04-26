import type { Metadata } from 'next';
import Script from 'next/script';
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

        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '2140288869880172');
            fbq('track', 'PageView');
          `}
        </Script>

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
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=2140288869880172&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        <a href="#main-content" className="skip-nav">
          Skip to main content
        </a>

        {children}
      </body>
    </html>
  );
}