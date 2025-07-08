import React, { useState } from 'react';
import './Contact.css';
import { FaMapMarkerAlt, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    website: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent('Contact Inquiry');
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nWebsite: ${form.website}\nMessage: ${form.message}`
    );
    window.location.href = `mailto:varshithatangeti@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="contact-section" id="contact">
      <div
        className="contact-container"
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}
      >
        <div className="contact-info">
          <h2>
            Let’s <strong>talk</strong> for <br />
            <span>Something special</span>
          </h2>
          <p>
            I seek to push the limits of creativity to create high-engaging,
            user-friendly, and memorable interactive experiences.
          </p>
          <p className="email">varshithatangeti@gmail.com</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="website"
            placeholder="Your website (If exists)"
            value={form.website}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="How can I help?*"
            value={form.message}
            onChange={handleChange}
            rows="5"
            required
          ></textarea>

          <div className="contact-actions">
            <button type="submit">Get In Touch</button>
            <div className="contact-icons">
              <a
                href="https://www.google.com/maps/place/KE+Chinnayyapalem,+Andhra+Pradesh+533407/@17.4543569,82.41997,16z/data=!3m1!4b1!4m6!3m5!1s0x3a39c30cc80f95b1:0x515647abad194d34!8m2!3d17.4551223!4d82.425167!16s%2Fg%2F1td6wjvw?entry=ttu&g_ep=EgoyMDI1MDYyOS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                title="Location"
              >
                <FaMapMarkerAlt />
              </a>
              <a href="mailto:varshithatangeti@gmail.com" title="Email">
                <FaEnvelope />
              </a>
              <a
                href="https://wa.me/919502285329"
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </form>
      </div>

      <footer className="contact-footer">
        <div>📯 Varshitha</div>
        <div>All rights reserved @2025</div>
      </footer>
    </section>
  );
}
