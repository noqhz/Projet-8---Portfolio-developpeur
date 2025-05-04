import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './ContactForm.scss';

function ContactForm() {
  const [state, handleSubmit] = useForm("xovdezeb");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSuccessClick = () => {
    setShowSuccessMessage(false);
  };

  React.useEffect(() => {
    if (state.succeeded) {
      setShowSuccessMessage(true);
    }
  }, [state.succeeded]);

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <input
        id="email"
        type="email"
        name="email"
        placeholder="Adresse e-mail"
        required
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <textarea
        id="message"
        name="message"
        rows="5"
        placeholder="Votre message"
        required
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <button type="submit" disabled={state.submitting}>
        Envoyer
      </button>
      {showSuccessMessage && (
        <p
          className="success-message"
          onClick={handleSuccessClick}
          style={{ cursor: 'pointer' }}
        >
          Message envoyé ! (masquer)
        </p>
      )}
    </form>
  );
}

export default ContactForm;