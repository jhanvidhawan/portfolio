import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section className="contact">
      <div className="contact-box first-box">
        <i className="fas fa-flag flag-icon"></i>
        <div className="contact-details">
          <div className="contact-item">
            <span className="label">Country:</span>
            <span className="value">Bangladesh</span>
          </div>
          <div className="contact-item">
            <span className="label">City:</span>
            <span className="value">Dhaka</span>
          </div>
          <div className="contact-item">
            <span className="label">Street:</span>
            <span className="value">35, Vhatar, Badda</span>
          </div>
        </div>
      </div>


      <div className="contact-box first-box">
      <i className="fas fa-envelope email-icon"></i>
      <div className="contact-details">
          <div className="contact-item">
            <span className="label">Country:</span>
            <span className="value">Bangladesh</span>
          </div>
          <div className="contact-item">
            <span className="label">City:</span>
            <span className="value">Dhaka</span>
          </div>
          <div className="contact-item">
            <span className="label">Street:</span>
            <span className="value">35, Vhatar, Badda</span>
          </div>
        </div>
      </div>


      <div className="contact-box first-box">
      <i class="fas fa-mobile-alt phone-icon"></i>
      <div className="contact-details">
          <div className="contact-item">
            <span className="label">Country:</span>
            <span className="value">Bangladesh</span>
          </div>
          <div className="contact-item">
            <span className="label">City:</span>
            <span className="value">Dhaka</span>
          </div>
          <div className="contact-item">
            <span className="label">Street:</span>
            <span className="value">35, Vhatar, Badda</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
