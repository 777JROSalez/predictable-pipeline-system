import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Book a Pipeline Diagnostic — Predictable Pipeline Systems';
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
        {/* Top: label + headline */}
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
              Pipeline Diagnostic
            </span>
          </div>

          <h1
            style={{
              margin: 0,
              fontSize: '62px',
              fontWeight: 700,
              lineHeight: 1.1,
              color: '#e8e4d8',
              maxWidth: '700px',
            }}
          >
            30 minutes. One structural diagnosis.
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
            Not a sales call. A structured review of your acquisition infrastructure
            — with a clear next step.
          </p>
        </div>

        {/* Bottom: what you get */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: '12px',
            }}
          >
            {['Identify the gap', 'Fit signal', 'Clear next step'].map((item) => (
              <div
                key={item}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: '#161616',
                  border: '1px solid #2a2a2a',
                  borderRadius: '3px',
                  padding: '8px 14px',
                }}
              >
                <span style={{ fontSize: '12px', color: '#c5a572' }}>✓</span>
                <span style={{ fontSize: '13px', color: '#c8c0b0' }}>{item}</span>
              </div>
            ))}
          </div>

          <span style={{ fontSize: '14px', color: '#555', letterSpacing: '0.06em' }}>
            predictablepipeline.com/assessment
          </span>
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
