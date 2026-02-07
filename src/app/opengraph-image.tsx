import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Himanshu & Anjali Wedding Invitation';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  // Use system fonts or load custom fonts if available.
  // For simplicity and speed in edge runtime, we'll use standard serif/sans stacks or load via fetch if critical.
  // Here we use a clean design with embedded styles.

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#121212', // primary-dark
          color: '#F5F2EC', // ivory-light
          fontFamily: 'serif',
          textAlign: 'center',
          padding: '40px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid rgba(212, 175, 55, 0.3)', // accent-gold dim
            width: '100%',
            height: '100%',
          }}
        >
          <div
            style={{
              fontSize: 24,
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              marginBottom: 20,
              color: 'rgba(245, 242, 236, 0.6)',
            }}
          >
            The Eternal Union
          </div>

          <div
            style={{
              fontSize: 80,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              lineHeight: 1,
              marginBottom: 40,
            }}
          >
            <span style={{ marginBottom: 10 }}>Himanshu</span>
            <span style={{ fontSize: 40, fontStyle: 'italic', color: '#D4AF37' }}>&</span>
            <span style={{ marginTop: 10 }}>Anjali</span>
          </div>

          <div
             style={{
              width: 60,
              height: 1,
              backgroundColor: '#D4AF37',
              marginBottom: 40,
              opacity: 0.6,
            }}
          />

          <div
            style={{
              fontSize: 32,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            April 26, 2026
          </div>
          <div
            style={{
              fontSize: 20,
              marginTop: 10,
              opacity: 0.7,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
            }}
          >
            Royal Palace, Jaipur
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
