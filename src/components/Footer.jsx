/**
 * Footer – repeated contact info and copyright.
 * @param {function} onNavigate - callback to navigate between pages
 */
function Footer({ onNavigate }) {
  const handleNav = (page) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        background: 'var(--color-dark)',
        color: '#cbd5e1',
        paddingTop: '3rem',
        paddingBottom: '1.5rem',
      }}
    >
      <div className="container">
        {/* Top grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            paddingBottom: '2.5rem',
            borderBottom: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          {/* Brand column */}
          <div>
            <h2 style={{ color: '#fff', fontWeight: 800, fontSize: '1.15rem', marginBottom: '0.75rem' }}>
              Khelcom <span style={{ color: 'var(--color-accent)' }}>Forage</span>
            </h2>
            <p style={{ fontSize: '0.875rem', lineHeight: 1.7 }}>
              "L'eau, partout, pour tous."<br />
              Spécialiste du forage hydraulique au Sénégal : nous forons, vous buvez.
            </p>
          </div>

          {/* Navigation column */}
          <nav aria-label="Navigation pied de page">
            <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Navigation
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              {[
                { id: 'home',    label: 'Accueil'  },
                { id: 'about',   label: 'À propos' },
                { id: 'contact', label: 'Contact'  },
              ].map(link => (
                <li key={link.id}>
                  <button
                    id={`footer-nav-${link.id}`}
                    onClick={() => handleNav(link.id)}
                    style={{
                      background: 'none', border: 'none', cursor: 'pointer',
                      color: '#94a3b8', fontSize: '0.9rem', padding: 0,
                      fontFamily: 'var(--font-main)', transition: 'color 0.2s',
                    }}
                    onMouseEnter={e => e.target.style.color = '#fff'}
                    onMouseLeave={e => e.target.style.color = '#94a3b8'}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact column */}
          <address style={{ fontStyle: 'normal' }}>
            <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Coordonnées
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem' }}>
              <li>
                <a href="mailto:societedeforageetdesondage@gmail.com" style={{ color: '#94a3b8', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.target.style.color = '#fff'}
                  onMouseLeave={e => e.target.style.color = '#94a3b8'}>
                  ✉ societedeforageetdesondage@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+221772465400" style={{ color: '#94a3b8', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.target.style.color = '#fff'}
                  onMouseLeave={e => e.target.style.color = '#94a3b8'}>
                  📞 77 246 54 00
                </a>
              </li>
              <li>
                <a href="tel:+221767816262" style={{ color: '#94a3b8', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.target.style.color = '#fff'}
                  onMouseLeave={e => e.target.style.color = '#94a3b8'}>
                  📞 78 838 20 20
                </a>
              </li>
              <li style={{ color: '#94a3b8' }}>
                📍 FIFA VDN Lot N 9, Sipres 2,<br />Dakar 11500, Sénégal
              </li>
            </ul>
          </address>
        </div>

        {/* Bottom bar */}
        <div style={{ paddingTop: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8rem', color: '#64748b' }}>
          <p>© Khelcom Forage – 2026. Tous droits réservés.</p>
          <p>FIFA VDN Lot N 9, Sipres 2, Dakar 11500</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
