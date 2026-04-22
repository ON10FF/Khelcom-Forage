import { useState, useEffect } from 'react';

// Logo SVG inline – lightweight, no extra file needed
const LogoIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="16" cy="16" r="15" fill="#1a6b3c" />
    {/* Simplified drill bit icon */}
    <rect x="14" y="6" width="4" height="14" rx="2" fill="#fff" />
    <polygon points="14,20 18,20 16,26" fill="#e8a030" />
    <circle cx="16" cy="11" r="2" fill="#e8a030" />
  </svg>
);

/**
 * Navbar – responsive navigation bar.
 * @param {string} activePage - currently active page key
 * @param {function} onNavigate - callback to change the active page
 */
function Navbar({ activePage, onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Add a subtle shadow once the user scrolls
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home',    label: 'Accueil'  },
    { id: 'about',   label: 'À propos' },
    { id: 'contact', label: 'Contact'  },
  ];

  const handleNav = (pageId) => {
    onNavigate(pageId);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: '#fff',
        transition: 'box-shadow 0.3s ease',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.1)' : '0 1px 0 #e8edf2',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
        
        {/* Brand */}
        <button
          onClick={() => handleNav('home')}
          id="nav-logo"
          aria-label="Aller à l'accueil"
          style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
        >
          <LogoIcon />
          <span style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--color-primary)', letterSpacing: '-0.02em' }}>
            Khelcom <span style={{ color: 'var(--color-secondary)' }}>Forage</span>
          </span>
        </button>

        {/* Desktop navigation */}
        <nav aria-label="Navigation principale" style={{ display: 'flex', gap: '0.5rem' }} className="desktop-nav">
          {navLinks.map(link => (
            <button
              key={link.id}
              id={`nav-${link.id}`}
              onClick={() => handleNav(link.id)}
              aria-current={activePage === link.id ? 'page' : undefined}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '0.5rem 1rem',
                fontSize: '0.95rem',
                fontWeight: activePage === link.id ? 700 : 500,
                color: activePage === link.id ? 'var(--color-primary)' : 'var(--color-dark)',
                borderBottom: activePage === link.id ? '2px solid var(--color-primary)' : '2px solid transparent',
                transition: 'all 0.2s ease',
                fontFamily: 'var(--font-main)',
              }}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* CTA button – desktop */}
        <button
          id="nav-cta"
          onClick={() => handleNav('contact')}
          className="btn btn-primary desktop-nav"
          style={{ fontSize: '0.875rem', padding: '0.55rem 1.25rem' }}
        >
          Demandez un devis
        </button>

        {/* Hamburger – mobile */}
        <button
          id="nav-hamburger"
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(prev => !prev)}
          className="hamburger"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0.4rem',
            flexDirection: 'column',
            gap: '5px',
          }}
        >
          <span style={{ display: 'block', width: '22px', height: '2px', background: 'var(--color-dark)', transition: 'all 0.3s', transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none' }} />
          <span style={{ display: 'block', width: '22px', height: '2px', background: 'var(--color-dark)', transition: 'all 0.3s', opacity: menuOpen ? 0 : 1 }} />
          <span style={{ display: 'block', width: '22px', height: '2px', background: 'var(--color-dark)', transition: 'all 0.3s', transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none' }} />
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div
          id="mobile-menu"
          style={{
            background: '#fff',
            borderTop: '1px solid #e8edf2',
            padding: '1rem 1.25rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.25rem',
            boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
          }}
        >
          {navLinks.map(link => (
            <button
              key={link.id}
              id={`mobile-nav-${link.id}`}
              onClick={() => handleNav(link.id)}
              style={{
                background: activePage === link.id ? 'var(--color-light-gray)' : 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '0.75rem 1rem',
                fontSize: '1rem',
                fontWeight: activePage === link.id ? 700 : 500,
                color: activePage === link.id ? 'var(--color-primary)' : 'var(--color-dark)',
                borderRadius: 'var(--radius-sm)',
                textAlign: 'left',
                fontFamily: 'var(--font-main)',
                transition: 'background 0.2s',
              }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav('contact')}
            className="btn btn-primary"
            style={{ marginTop: '0.75rem', width: '100%' }}
          >
            Demandez un devis
          </button>
        </div>
      )}

      {/* Responsive styles injected via style tag for simplicity */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger   { display: flex !important; }
        }
      `}</style>
    </header>
  );
}

export default Navbar;
