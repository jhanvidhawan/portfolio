import React, { useState } from 'react';
import './LeaveMeYourInfo.css';
import Contact from './Contact';

function LeaveMeYourInfo() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.subject) newErrors.subject = 'Subject is required';
    if (!formData.message) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      fetch('http://localhost:3000/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
          setFormData({ name: '', email: '', subject: '', message: '' });
        })
        .catch(error => console.error('Error:', error));
    }
  };

  return (
    <section id="contact-section" className="contact-section">
      <div className="form-container">
        <h2 className="section-heading">Leave Me Your Info</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Your Full Name (Required)
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
            {errors.name && <span className="error">{errors.name}</span>}
          </label>
          <label>
            Your Email (Required)
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
            {errors.email && <span className="error">{errors.email}</span>}
          </label>
          <label>
            Subject
            <input type="text" name="subject" value={formData.subject} onChange={handleChange} />
            {errors.subject && <span className="error">{errors.subject}</span>}
          </label>
          <label>
            Your Message
            <textarea name="message" value={formData.message} onChange={handleChange} />
            {errors.message && <span className="error">{errors.message}</span>}
          </label>
          <button className='leavebutton' type="submit">SEND MESSAGE</button>
        </form>
      </div>
      <div className="contact-info">
        <h2 className="contact-heading">Contact Information</h2>
        <Contact />
      </div>
    </section>
  );
}

export default LeaveMeYourInfo;
