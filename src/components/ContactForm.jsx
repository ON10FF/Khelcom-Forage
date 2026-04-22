import { useState } from 'react';

/**
 * ContactForm – static demonstration form.
 * No backend: data is not actually sent.
 */
function ContactForm() {
  const [formData, setFormData] = useState({
    nom: '',
    telephone: '',
    email: '',
    sujet: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Demonstration only — no real data is sent.
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        id="form-success"
        style={{
          background: '#f0fdf4',
          border: '1px solid #bbf7d0',
          borderRadius: 'var(--radius-md)',
          padding: '2rem',
          textAlign: 'center',
        }}
      >
        <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>✅</div>
        <h3 style={{ color: 'var(--color-primary)', fontWeight: 700, marginBottom: '0.5rem' }}>
          Message envoyé (démo) !
        </h3>
        <p style={{ color: 'var(--color-gray)', fontSize: '0.9rem' }}>
          Merci, <strong>{formData.nom}</strong> ! En version réelle, votre message nous parviendrait rapidement.
        </p>
        <button
          className="btn btn-primary"
          style={{ marginTop: '1.5rem' }}
          onClick={() => { setSubmitted(false); setFormData({ nom: '', telephone: '', email: '', sujet: '', message: '' }); }}
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <form id="contact-form" onSubmit={handleSubmit} noValidate>
      {/* Disclaimer banner */}
      <div
        style={{
          background: '#fff7ed',
          border: '1px solid #fed7aa',
          borderRadius: 'var(--radius-sm)',
          padding: '0.75rem 1rem',
          marginBottom: '1.5rem',
          fontSize: '0.825rem',
          color: '#92400e',
          display: 'flex',
          gap: '0.5rem',
          alignItems: 'flex-start',
        }}
      >
        <span>⚠️</span>
        <span>
          <strong>Démonstration uniquement.</strong> Ce formulaire est uniquement un exemple ; il n'envoie pas de données réelles.
          Pour nous joindre directement, utilisez WhatsApp ou email ci-dessus.
        </span>
      </div>

      {/* Name + Phone – side by side on wider screens */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
        <div className="form-group">
          <label htmlFor="form-nom">Nom complet *</label>
          <input
            id="form-nom"
            name="nom"
            type="text"
            className="form-control"
            placeholder="Ex. : Amadou Diallo"
            value={formData.nom}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="form-telephone">Téléphone *</label>
          <input
            id="form-telephone"
            name="telephone"
            type="tel"
            className="form-control"
            placeholder="Ex. : 77 000 00 00"
            value={formData.telephone}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="form-email">Email</label>
        <input
          id="form-email"
          name="email"
          type="email"
          className="form-control"
          placeholder="votre@email.com"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="form-sujet">Sujet *</label>
        <select
          id="form-sujet"
          name="sujet"
          className="form-control"
          value={formData.sujet}
          onChange={handleChange}
          required
          style={{ cursor: 'pointer' }}
        >
          <option value="" disabled>Choisissez un sujet…</option>
          <option value="devis">Demande de devis</option>
          <option value="rdv">Rencontre / rendez-vous</option>
          <option value="autre">Autre question</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="form-message">Message *</label>
        <textarea
          id="form-message"
          name="message"
          className="form-control"
          placeholder="Décrivez votre besoin en quelques mots…"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          style={{ resize: 'vertical', fontFamily: 'var(--font-main)' }}
        />
      </div>

      <button
        id="form-submit"
        type="submit"
        className="btn btn-primary"
        style={{ width: '100%', padding: '0.85rem', fontSize: '1rem', marginTop: '0.5rem' }}
      >
        Envoyer le message
      </button>
    </form>
  );
}

export default ContactForm;
