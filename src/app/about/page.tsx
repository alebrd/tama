export default function About() {
  return (
    <div className="container" style={{ padding: '6rem 2rem' }}>
      <h1 className="text-gradient" style={{ fontSize: '3rem' }}>ABOUT TAMA</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', marginTop: '4rem' }}>
        <div className="glass" style={{ padding: '3rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>THE VENUE</h2>
          <p style={{ color: 'var(--color-light-grey)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            Located in a revitalized 90-year-old building—the former representative hall of the Wielkopolska Chamber of Crafts—TAMA offers an industrial, atmospheric, and spacious environment.
          </p>
          <p style={{ color: 'var(--color-light-grey)', lineHeight: 1.8 }}>
            With over 1,000 m² of space, it is equipped with professional sound systems and lighting setups designed for immersive club nights and concerts.
          </p>
        </div>

        <div className="glass" style={{ padding: '3rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>THE VIBE</h2>
          <p style={{ color: 'var(--color-light-grey)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            While we host a variety of concerts ranging from alternative to mainstream artists, TAMA is best known in the nightlife scene for its electronic music events, including techno and house nights.
          </p>
          <p style={{ color: 'var(--color-light-grey)', lineHeight: 1.8 }}>
            We foster a strong community atmosphere and are considered a staple of Poznań’s nightlife culture.
          </p>
        </div>
      </div>
    </div>
  );
}