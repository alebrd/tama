export default function Gallery() {
  return (
    <div className="container" style={{ padding: '6rem 2rem' }}>
      <h1 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '3rem' }}>GALLERY</h1>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '1rem'
      }}>
        {/* Placeholders for gallery images */}
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="glass" style={{ 
            aspectRatio: '1/1', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            color: 'var(--color-mid-grey)',
            background: 'var(--color-dark-grey)',
            overflow: 'hidden',
            position: 'relative'
          }}>
            <div style={{ position: 'absolute', inset: 0, opacity: 0.1, background: 'radial-gradient(circle, #fff, transparent)' }} />
            <span>IMAGE {i}</span>
          </div>
        ))}
      </div>
    </div>
  );
}