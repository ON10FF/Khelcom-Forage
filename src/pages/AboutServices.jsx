/**
 * About / Services page – À propos & Nos services
 */

const services = [
  {
    icon: '🕳️',
    title: 'Forage de puits',
    desc: 'Nous réalisons des forages profonds adaptés à votre terrain et à vos besoins. Qu\'il s\'agisse d\'un usage domestique ou industriel, nos équipes interviennent avec du matériel performant et une expertise du sol sénégalais.',
  },
  {
    icon: '🚰',
    title: 'Équipement et pompage',
    desc: 'Nous équipons votre forage de A à Z pour une distribution efficace et durable, même dans les zones les plus reculées.',
  },
  {
    icon: '🛠️',
    title: 'Entretien et réhabilitation',
    desc: 'Un forage existant qui ne produit plus suffisamment ? Nous diagnostiquons, nettoyons et réhabilitons vos installations pour leur redonner une pleine capacité.',
  },
  {
    icon: '🔬',
    title: 'Analyse de l\'eau',
    desc: 'Nous prélevons et analysons la qualité de l\'eau de votre forage pour garantir une eau potable et conforme aux normes en vigueur.',
  },
  {
    icon: '📊',
    title: 'Études hydrogéologiques',
    desc: 'Avant chaque chantier, nous réalisons une étude du sous-sol pour identifier les meilleures zones de captage et maximiser le rendement de votre forage.',
  },
];

const values = [
  { icon: '🤝', title: 'Intégrité', desc: 'Transparence totale dans nos devis et nos pratiques professionnelles.' },
  { icon: '🌱', title: 'Durabilité', desc: 'Solutions respectueuses de l\'environnement et adaptées au long terme.' },
  { icon: '💡', title: 'Innovation', desc: 'Techniques et équipements constamment mis à jour pour optimiser nos résultats.' },
];

function AboutServices({ onNavigate }) {
  return (
    <>
      {/* ========================
          PAGE HEADER
         ======================== */}
      <section
        style={{
          background: 'linear-gradient(135deg, var(--color-dark) 0%, var(--color-secondary) 100%)',
          padding: '5rem 0 3.5rem',
          color: '#fff',
        }}
      >
        <div className="container">
          <p style={{ color: 'var(--color-accent)', fontWeight: 600, fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
            Notre entreprise
          </p>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.2 }}>
            À propos de Khelcom Forage
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.05rem', maxWidth: '600px', lineHeight: 1.7 }}>
            Une entreprise sénégalaise de confiance, dédiée aux solutions de forage et de sondage pour le développement local.
          </p>
        </div>
      </section>

      {/* ========================
          ABOUT STORY
         ======================== */}
      <section id="a-propos" className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '3rem',
              alignItems: 'center',
            }}
          >
            {/* Text */}
            <div>
              <p style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
                Notre histoire
              </p>
              <h2 className="section-title">Mission &amp; valeurs</h2>

              <p style={{ color: 'var(--color-gray)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                Khelcom Forage est une entreprise sénégalaise spécialisée dans le forage hydraulique. 
                Implantée au Sénégal et fière de ses racines, notre mission est simple : garantir l'accès à l'eau pour tous, 
                des quartiers urbains aux villages les plus isolés.
              </p>
              <p style={{ color: 'var(--color-gray)', lineHeight: 1.8, marginBottom: '2rem' }}>
                Avec une équipe expérimentée, des équipements à la pointe et une connaissance approfondie du terrain sénégalais, 
                nous concrétisons chaque projet avec sérieux et engagement.
              </p>

              {/* Values */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {values.map(v => (
                  <div key={v.title} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>{v.icon}</span>
                    <div>
                      <strong style={{ display: 'block', color: 'var(--color-dark)', marginBottom: '0.2rem' }}>{v.title}</strong>
                      <span style={{ color: 'var(--color-gray)', fontSize: '0.9rem' }}>{v.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
              <img
                src="/images/drilling-machine.jpg"
                alt="Équipe Khelcom Forage en plein travail de forage"
                loading="lazy"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================
          SERVICES GRID
         ======================== */}
      <section id="services" className="section" style={{ background: 'var(--color-light-gray)' }}>
        <div className="container">
          <p style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
            Ce que nous faisons
          </p>
          <h2 className="section-title">Nos services</h2>
          <p className="section-subtitle">
            Des prestations complètes pour tous vos besoins en forage, sondage et gestion des ressources en eau.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '1.25rem' }}>
            {services.map((service, i) => (
              <div
                key={service.title}
                className="card"
                style={{ borderTop: '3px solid var(--color-primary)' }}
              >
                <div style={{
                  width: '48px',
                  height: '48px',
                  background: 'linear-gradient(135deg, #f0fdf4, #dcfce7)',
                  borderRadius: 'var(--radius-sm)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  marginBottom: '1rem',
                }}>
                  {service.icon}
                </div>
                <h3 style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.5rem', color: 'var(--color-dark)' }}>
                  {service.title}
                </h3>
                <p style={{ color: 'var(--color-gray)', fontSize: '0.9rem', lineHeight: 1.6 }}>{service.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA after services */}
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <p style={{ color: 'var(--color-gray)', marginBottom: '1.25rem' }}>
              Besoin d'un service personnalisé ? Contactez-nous pour un devis gratuit et sans engagement.
            </p>
            <button
              id="services-cta"
              onClick={() => { onNavigate('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="btn btn-primary"
              style={{ fontSize: '1rem', padding: '0.9rem 2.5rem' }}
            >
              📋 Demandez un devis
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutServices;
