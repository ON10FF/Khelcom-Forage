import ContactForm from '../components/ContactForm.jsx';

/**
 * Contact page – coordonnées + formulaire de contact
 */

const contactItems = [
  {
    id: 'contact-email',
    icon: '✉️',
    label: 'Email',
    value: 'societedeforageetdesondage@gmail.com',
    href: 'mailto:societedeforageetdesondage@gmail.com',
    short: 'societedeforageetdesondage@gmail.com',
  },
  {
    id: 'contact-phone1',
    icon: '📞',
    label: 'Téléphone principal',
    value: '77 246 54 00',
    href: 'tel:+221772465400',
    short: '+221 77 246 54 00',
  },
  {
    id: 'contact-phone2',
    icon: '📱',
    label: 'Téléphone secondaire',
    value: '76 781 62 62',
    href: 'tel:+221767816262',
    short: '+221 76 781 62 62',
  },
  {
    id: 'contact-address',
    icon: '📍',
    label: 'Adresse',
    value: 'FIFA VDN Lot N 9, Sipres 2, Dakar 11500, Sénégal',
    href: 'https://maps.google.com/?q=FIFA+VDN+Sipres+2+Dakar+Senegal',
    short: 'FIFA VDN, Sipres 2, Dakar',
  },
];

// WhatsApp link
const WHATSAPP_URL = 'https://wa.me/221772465400?text=' + encodeURIComponent('Bonjour, je souhaite obtenir plus d\'informations sur vos services de forage. Merci.');

function Contact() {
  return (
    <>
      {/* ========================
          PAGE HEADER
         ======================== */}
      <section
        style={{
          background: 'linear-gradient(135deg, var(--color-dark) 0%, var(--color-primary) 100%)',
          padding: '5rem 0 3.5rem',
          color: '#fff',
        }}
      >
        <div className="container">
          <p style={{ color: 'var(--color-accent)', fontWeight: 600, fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
            Parlons de votre projet
          </p>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.2 }}>
            Contactez-nous
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.05rem', maxWidth: '580px', lineHeight: 1.7 }}>
            Notre équipe est disponible pour répondre à vos questions et vous proposer un devis personnalisé.
          </p>
        </div>
      </section>

      {/* ========================
          MAIN CONTACT CONTENT
         ======================== */}
      <section id="contact-section" className="section" style={{ background: 'var(--color-light-gray)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>

            {/* LEFT – Contact details */}
            <div>
              <h2 style={{ fontWeight: 700, fontSize: '1.35rem', marginBottom: '1.75rem', color: 'var(--color-dark)' }}>
                Nos coordonnées
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem', marginBottom: '2.25rem' }}>
                {contactItems.map(item => (
                  <a
                    key={item.id}
                    id={item.id}
                    href={item.href}
                    target={item.href.startsWith('https') ? '_blank' : undefined}
                    rel={item.href.startsWith('https') ? 'noopener noreferrer' : undefined}
                    style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', textDecoration: 'none', transition: 'opacity 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.opacity = '0.75'}
                    onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                  >
                    <div style={{
                      width: '44px',
                      height: '44px',
                      background: '#fff',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid #e2e8f0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.2rem',
                      flexShrink: 0,
                      boxShadow: 'var(--shadow-sm)',
                    }}>
                      {item.icon}
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--color-gray)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.15rem' }}>
                        {item.label}
                      </div>
                      <div style={{ color: 'var(--color-dark)', fontWeight: 500, fontSize: '0.9rem', wordBreak: 'break-word' }}>
                        {item.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <div
                style={{
                  background: 'linear-gradient(135deg, #1a6b3c, #2d9e5f)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.75rem',
                  color: '#fff',
                }}
              >
                <h3 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>
                  Réponse rapide via WhatsApp
                </h3>
                <p style={{ fontSize: '0.875rem', opacity: 0.85, marginBottom: '1.25rem', lineHeight: 1.6 }}>
                  Pour une réponse immédiate, contactez-nous directement sur WhatsApp. Nous répondons généralement dans l'heure.
                </p>
                <a
                  id="contact-whatsapp-cta"
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Contactez-nous sur WhatsApp
                </a>
              </div>
            </div>

            {/* RIGHT – Contact form */}
            <div>
              <h2 style={{ fontWeight: 700, fontSize: '1.35rem', marginBottom: '1.75rem', color: 'var(--color-dark)' }}>
                Formulaire de contact
              </h2>
              <div
                style={{
                  background: '#fff',
                  borderRadius: 'var(--radius-md)',
                  padding: '2rem',
                  boxShadow: 'var(--shadow-sm)',
                  border: '1px solid #e8edf2',
                }}
              >
                <ContactForm />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
