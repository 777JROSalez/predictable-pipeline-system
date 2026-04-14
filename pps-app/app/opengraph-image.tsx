import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Predictable Pipeline Systems — Client Acquisition Infrastructure for Service Businesses';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#0d0d0d',
          padding: '64px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Top: eyebrow + headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <div
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#c5a572',
              }}
            />
            <span
              style={{
                fontSize: '13px',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#b8a898',
              }}
            >
              Predictable Pipeline Systems
            </span>
          </div>

          <h1
            style={{
              margin: 0,
              fontSize: '62px',
              fontWeight: 700,
              lineHeight: 1.1,
              color: '#e8e4d8',
              maxWidth: '720px',
            }}
          >
            Client Acquisition Infrastructure for Service Businesses
          </h1>

          <p
            style={{
              margin: 0,
              fontSize: '20px',
              lineHeight: 1.5,
              color: '#b0a898',
              maxWidth: '560px',
            }}
          >
            Trust, conversion, and pipeline — installed.
          </p>
        </div>

        {/* Bottom: brand strip + CTA signal */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <span style={{ fontSize: '14px', color: '#555', letterSpacing: '0.06em' }}>
              predictablepipeline.com
            </span>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              background: '#1a1a1a',
              border: '1px solid #2a2a2a',
              borderRadius: '4px',
              padding: '12px 20px',
            }}
          >
            <span style={{ fontSize: '14px', color: '#c5a572', letterSpacing: '0.06em' }}>
              Book a Pipeline Diagnostic →
            </span>
          </div>
        </div>

        {/* Decorative rule */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '4px',
            height: '100%',
            background: 'linear-gradient(to bottom, #c5a572, transparent)',
          }}
        />
      </div>
    ),
    { ...size }
  );
}
