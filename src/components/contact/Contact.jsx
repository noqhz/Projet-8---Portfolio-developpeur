import React from 'react';
import './Contact.scss';
import ContactForm from './ContactForm';

import PhoneIcon from '../../images/icons/Phone.svg';
import MailIcon from '../../images/icons/Mail.svg';
import GitHubIcon from '../../images/icons/Github.svg';
import LinkedInIcon from '../../images/icons/Linkedin.svg';

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
          <div className="contact-tel">
            <img src={PhoneIcon} alt="Téléphone" className="contact-icon" />
            <a href="tel:+33603489357">
              +33 6 03 48 93 57
            </a>
          </div>
          <div className="contact-mail">
            <img src={MailIcon} alt="Email" className="contact-icon" />
            <a href="mailto:jfritsch.pro@gmail.com">
              jfritsch.pro@gmail.com
            </a>
          </div>
          <div className="contact-links">
            <a href="https://github.com/noqhz" target="_blank" rel="noopener noreferrer">
              <img src={GitHubIcon} alt="GitHub" className="contact-icon" />
            </a>
            <a href="https://www.linkedin.com/in/j-fritsch" target="_blank" rel="noopener noreferrer" className='linkedin'>
              <img src={LinkedInIcon} alt="LinkedIn" className="contact-icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;