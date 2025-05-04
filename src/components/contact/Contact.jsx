import React from 'react';
import './Contact.scss';
import ContactForm from './ContactForm';

function Contact() {
  return (
    <section id="contact">
      <div className="section-header">
        <h1>Me contacter</h1>
      </div>
      <div className="contact-container">
        <div className="contact-form-wrapper">
          <ContactForm />
        </div>
        <div className="contact-info">
          <p>
          <strong>Tél :</strong> 06 03 48 93 57<br />
          <strong>Mail :</strong> jfritsch.pro@gmail.com
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;