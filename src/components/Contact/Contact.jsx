import React, { useState } from 'react';
import { Phone, Mail, Globe, MapPin } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: '',
    otherEventType: '',
    eventDate: '',
    location: '',
    theme: '',
    budget: '',
    notes: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();

    // Construct WhatsApp message
    let message = `*New Event Inquiry - JYONA DECORATIONS*\n\n`;
    message += `*👤 Personal Details*\n`;
    message += `- Name: ${formData.name}\n`;
    message += `- Phone: ${formData.phone}\n`;
    if (formData.email) message += `- Email: ${formData.email}\n`;

    message += `\n*🎊 Event Details*\n`;
    const finalEventType = formData.eventType === 'Other' ? formData.otherEventType : formData.eventType;
    message += `- Event Type: ${finalEventType}\n`;
    message += `- Date: ${formData.eventDate}\n`;
    message += `- Location: ${formData.location}\n`;

    if (formData.theme || formData.budget) {
      message += `\n*🎨 Preferences*\n`;
      if (formData.theme) message += `- Theme/Color: ${formData.theme}\n`;
      if (formData.budget) message += `- Budget: ${formData.budget}\n`;
    }

    message += `\n*📝 Additional Information*\n`;
    message += `- Notes/Message: ${formData.notes || 'None'}\n`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = "447587748000"; // format without + for wa.me
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Get In <span className="text-gold">Touch</span></h2>
          <p className="section-subtitle">Let's discuss how we can make your next event truly unforgettable.</p>
        </div>

        <div className="contact-grid">
          <div className="contact-info glass">
            <h3>Contact Information</h3>
            <p className="contact-desc">Reach out to us directly or view our location down below.</p>

            <div className="info-list">
              <div className="info-item">
                <div className="info-icon">
                  <Phone size={20} />
                </div>
                <div>
                  <h4>Phone</h4>
                  <p>07587748000</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <Mail size={20} />
                </div>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:jyonadecorations@gmail.com">jyonadecorations@gmail.com</a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <Globe size={20} />
                </div>
                <div>
                  <h4>Website</h4>
                  <a href="http://www.jyonadecorations.com" target="_blank" rel="noopener noreferrer">www.jyonadecorations.com</a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4>Location</h4>
                  <p>McLaren Street, Crewe, CW1 3SP<br />Crewe, Cheshire</p>
                  <a href="https://share.google/7UxXxp6J6HUk9sWop" className="text-gold" target="_blank" rel="noopener noreferrer">View on Google Maps</a>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form glass">
            <h3>Event Inquiry Form</h3>
            <p className="contact-desc" style={{ marginBottom: "1.5rem" }}>Send us the details and we will get back to you soon.</p>
            <form onSubmit={handleWhatsAppSubmit} className="inquiry-form">

              <div className="form-section-title">👤 Personal Details</div>

              <div className="form-group">
                <input type="text" name="name" value={formData.name} onChange={handleChange} className="input-gold" placeholder="Full Name (*)" required />
              </div>
              <div className="form-group-row">
                <div className="form-group w-100">
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="input-gold" placeholder="WhatsApp / Contact Number (*)" required />
                </div>
              </div>
              <div className="form-group">
                <input type="email" name="email" value={formData.email} onChange={handleChange} className="input-gold" placeholder="Email Address (Optional)" />
              </div>

              <div className="form-section-title">🎊 Event Details</div>

              <div className="form-group">
                <select name="eventType" value={formData.eventType} onChange={handleChange} className="input-gold" required>
                  <option value="" disabled>Event Type (*)</option>
                  <option value="Birthday">Birthday</option>
                  <option value="Wedding">Wedding</option>
                  <option value="Engagement">Engagement</option>
                  <option value="Baby Shower">Baby Shower</option>
                  <option value="Haldi">Haldi</option>
                  <option value="Housewarming">Housewarming</option>
                  <option value="Gender Reveal">Gender Reveal</option>
                  <option value="Graduation">Graduation</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {formData.eventType === 'Other' && (
                <div className="form-group">
                  <input type="text" name="otherEventType" value={formData.otherEventType} onChange={handleChange} className="input-gold" placeholder="Please specify event type (*)" required />
                </div>
              )}

              <div className="form-group-row">
                <div className="form-group w-100">
                  <input type="date" name="eventDate" value={formData.eventDate} onChange={handleChange} className="input-gold date-input" required title="Event Date (*)" />
                </div>
                <div className="form-group w-100">
                  <input type="text" name="location" value={formData.location} onChange={handleChange} className="input-gold" placeholder="Event Location / City (*)" required />
                </div>
              </div>

              <div className="form-section-title">🎨 Preferences (Optional)</div>

              <div className="form-group-row">
                <div className="form-group w-100">
                  <input type="text" name="theme" value={formData.theme} onChange={handleChange} className="input-gold" placeholder="Theme or Color Preference" />
                </div>
                <div className="form-group w-100">
                  <input type="text" name="budget" value={formData.budget} onChange={handleChange} className="input-gold" placeholder="Your Budget Range" />
                </div>
              </div>

              <div className="form-section-title">📝 Additional Information</div>

              <div className="form-group">
                <textarea name="notes" value={formData.notes} onChange={handleChange} className="input-gold textarea" placeholder="Tell us more about your event or special requests..." rows="4"></textarea>
              </div>

              <button type="submit" className="btn-primary w-100" style={{ marginTop: "1rem" }}>Send Message via WhatsApp</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
