/**
 * Home page – Landing / Accueil
 *
 * Sections:
 *  1. Hero
 *  2. Why Choose Us (Pourquoi nous choisir)
 *  3. Intervention Zones
 */

// --- Data ---
const strengths = [
  {
    icon: '🏆',
    title: 'Expérience reconnue',
    desc: 'Des années d\'expertise dans le forage d\'eau et les sondages géotechniques sur l\'ensemble du territoire sénégalais.',
  },
  {
    icon: '⚙️',
    title: 'Matériel adapté',
    desc: 'Équipements modernes et adaptés aux conditions africaines, capables d\'intervenir dans des terrains variés.',
  },
  {
    icon: '📍',
    title: 'Proximité locale',
    desc: 'Basés à Dakar, nous intervenons rapidement dans la région et comprenons les réalités du terrain.',
  },
  {
    icon: '✅',
    title: 'Fiabilité garantie',
    desc: 'Respect des délais, transparence dans les devis et suivi rigoureux de chaque chantier jusqu\'à la livraison.',
  },
];

const zones = [
  'Dakar', 'Thiès', 'Rufisque', 'Mbour', 'Touba', 'Saint-Louis', 'Ziguinchor', 'Tambacounda',
];

function Home({ onNavigate }) {
  const handleDevisClick = () => {
    onNavigate('contact');
    // Small delay so the contact page renders before scrolling to the form
    setTimeout(() => {
      const el = document.getElementById('contact-form');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  return (
    <>
      {/* ========================
          HERO SECTION
         ======================== */}
      <section
        id="hero"
        style={{
          position: 'relative',
          minHeight: '90vh',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          background: 'var(--color-dark)',
        }}
      >
        {/* Background image with lazy loading */}
        <img
          src="/hero.png"
          alt="Foreuse Khelcom en opération au Sénégal"
          loading="eager"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            opacity: 0.35,
          }}
        />

        {/* Gradient overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(26,35,50,0.92) 0%, rgba(26,107,60,0.55) 100%)',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '680px' }}>
            {/* Badge */}
            <div
              className="animate-in"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'rgba(232,160,48,0.2)',
                border: '1px solid rgba(232,160,48,0.4)',
                color: 'var(--color-accent)',
                padding: '0.35rem 1rem',
                borderRadius: '50px',
                fontSize: '0.8rem',
                fontWeight: 600,
                marginBottom: '1.5rem',
                backdropFilter: 'blur(6px)',
              }}
            >
              🌍 Dakar, Sénégal
            </div>

            <h1
              className="animate-in animate-delay-1"
              style={{
                color: '#fff',
                fontSize: 'clamp(1.9rem, 5vw, 3.2rem)',
                fontWeight: 800,
                lineHeight: 1.2,
                marginBottom: '1.25rem',
                letterSpacing: '-0.02em',
              }}
            >
              Khelcom Forage –<br />
              <span style={{ color: 'var(--color-accent)' }}>Forage &amp; Sondage</span> à Dakar
            </h1>

            <p
              className="animate-in animate-delay-2"
              style={{
                color: '#cbd5e1',
                fontSize: 'clamp(1rem, 2.5vw, 1.15rem)',
                lineHeight: 1.7,
                marginBottom: '2.25rem',
                maxWidth: '560px',
              }}
            >
              Forage d'eau, sondages géotechniques et travaux spécialisés adaptés au contexte africain.
              Votre partenaire de confiance pour des solutions durables.
            </p>

            <div
              className="animate-in animate-delay-3"
              style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
            >
              <button
                id="hero-cta-devis"
                onClick={handleDevisClick}
                className="btn btn-primary"
                style={{ fontSize: '1rem', padding: '0.9rem 2rem' }}
              >
                📋 Demandez un devis
              </button>
              <button
                id="hero-cta-about"
                onClick={() => { onNavigate('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="btn btn-outline"
                style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.5)', fontSize: '1rem', padding: '0.9rem 2rem' }}
              >
                Nos services →
              </button>
            </div>

            {/* Quick stats */}
            <div
              className="animate-in animate-delay-3"
              style={{
                display: 'flex',
                gap: '2rem',
                flexWrap: 'wrap',
                marginTop: '3rem',
                paddingTop: '2rem',
                borderTop: '1px solid rgba(255,255,255,0.12)',
              }}
            >
              {[
                { value: '10+', label: 'Ans d\'expérience' },
                { value: '200+', label: 'Forages réalisés' },
                { value: '8', label: 'Régions couvertes' },
              ].map(stat => (
                <div key={stat.label}>
                  <div style={{ color: 'var(--color-accent)', fontSize: '1.8rem', fontWeight: 800, lineHeight: 1 }}>{stat.value}</div>
                  <div style={{ color: '#94a3b8', fontSize: '0.8rem', marginTop: '0.25rem' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.4rem',
          color: 'rgba(255,255,255,0.4)',
          fontSize: '0.75rem',
        }}>
          <span>Défiler</span>
          <div style={{
            width: '1.5px',
            height: '32px',
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.4), transparent)',
          }} />
        </div>
      </section>

      {/* ========================
          WHY CHOOSE US
         ======================== */}
      <section id="pourquoi-nous" className="section" style={{ background: '#fff' }}>
        <div className="container">
          <p style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
            Pourquoi nous choisir ?
          </p>
          <h2 className="section-title">Notre engagement envers votre projet</h2>
          <p className="section-subtitle">
            Nous mettons notre savoir-faire et notre proximité au service de vos projets de forage, partout au Sénégal.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.5rem' }}>
            {strengths.map((item, i) => (
              <div
                key={item.title}
                className="card"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{item.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.5rem', color: 'var(--color-dark)' }}>{item.title}</h3>
                <p style={{ color: 'var(--color-gray)', fontSize: '0.9rem', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================
          INTERVENTION ZONES
         ======================== */}
      <section
        id="zones-intervention"
        className="section"
        style={{
          background: 'linear-gradient(135deg, var(--color-secondary) 0%, var(--color-primary) 100%)',
          color: '#fff',
        }}
      >
        <div className="container" style={{ textAlign: 'center' }}>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 600, fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
            Zones d'intervention
          </p>
          <h2 style={{ color: '#fff', fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', fontWeight: 800, marginBottom: '0.75rem' }}>
            Nous intervenons dans toute la région
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '2.5rem', maxWidth: '500px', margin: '0 auto 2.5rem' }}>
            De Dakar aux régions éloignées, nos équipes se déplacent pour vous servir.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center', marginBottom: '2.5rem' }}>
            {zones.map(zone => (
              <span
                key={zone}
                style={{
                  background: 'rgba(255,255,255,0.15)',
                  border: '1px solid rgba(255,255,255,0.25)',
                  borderRadius: '50px',
                  padding: '0.45rem 1.1rem',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  backdropFilter: 'blur(4px)',
                }}
              >
                📍 {zone}
              </span>
            ))}
          </div>

          <button
            id="zones-cta"
            onClick={handleDevisClick}
            className="btn"
            style={{ background: '#fff', color: 'var(--color-primary)', fontWeight: 700, fontSize: '1rem', padding: '0.9rem 2.5rem' }}
          >
            Demandez un devis gratuit
          </button>
        </div>
      </section>
    </>
  );
}

export default Home;
