export default function Blog() {
  return (
    <div className="container" style={{ padding: '6rem 2rem' }}>
      <h1 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '3rem' }}>BLOG</h1>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {[
          { title: "AUTUMN '25 LINEUP ANNOUNCEMENT", date: "Sep 15, 2025", excerpt: "Get ready for our biggest season yet featuring international techno heavyweights and local talent." },
          { title: "HISTORY OF THE CHAMBER OF CRAFTS", date: "Aug 20, 2025", excerpt: "Explore the 90-year history of the building that TAMA calls home, from its origins to its revitalization." }
        ].map((post, i) => (
          <article key={i} className="glass" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <span style={{ color: 'var(--color-light-grey)', fontSize: '0.875rem', letterSpacing: '1px' }}>{post.date}</span>
            <h2 style={{ fontSize: '1.5rem' }}>{post.title}</h2>
            <p style={{ color: '#a0a0a0', lineHeight: 1.6 }}>{post.excerpt}</p>
            <a href="#" className="btn-outline" style={{ display: 'inline-block', marginTop: '1rem', textTransform: 'uppercase', fontSize: '0.875rem', letterSpacing: '1px' }}>Read More →</a>
          </article>
        ))}
      </div>
    </div>
  );
}