import React, { useState, useEffect } from "react";
import "./contact.css";

const Contact = () => {
  // ====== STATE ======
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ====== HANDLERS ======
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      const res = await fetch("http://localhost:4000/api/v1/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err?.message || "Failed to send message");
      }

      // Success → show modal + reset form
      setIsModalOpen(true);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (error) {
      console.error("Contact form error:", error);
      alert("Failed to send message. Please try again or contact us directly.");
    } finally {
      setLoading(false);
    }
  };

  // ====== MODAL a11y (ESC to close, lock body scroll) ======
  useEffect(() => {
    const onEsc = (e) => e.key === "Escape" && setIsModalOpen(false);
    document.addEventListener("keydown", onEsc);
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onEsc);
    };
  }, [isModalOpen]);

  const contactInfo = [
    { icon: "fa-map-marker-alt", title: "Visit Us", lines: ["508/A, Prithika Mawatha, Pitipana North, Homagama."] },
    { icon: "fa-phone-alt", title: "Call Us", lines: ["+94 76 191 5100"] },
    { icon: "fa-envelope", title: "Email Us", lines: ["inquiries@calveratravels.com"] },
    { icon: "fa-clock", title: "Working Hours", lines: ["24/7"] },
  ];

  return (
    <div className="contact-page">
      {/* Simple header (no hero) */}
      <header className="contact-header">
        <span className="badge">Contact</span>
        <h1>Let’s Plan Your Next Trip</h1>
        <p>We’ll help you craft a perfect Sri Lankan journey</p>
        <div className="section-divider" />
      </header>

      {/* Info cards */}
      <section className="contact-info-section">
        <div className="container">
          <div className="info-grid">
            {contactInfo.map((item, idx) => (
              <div key={idx} className="info-card">
                <div className="info-icon" aria-hidden="true">
                  <i className={`fas ${item.icon}`} />
                </div>
                <h3>{item.title}</h3>
                {item.lines.map((l, i) => (
                  <p key={i}>{l}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="contact-form-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Send Us a Message</h2>
            <p className="section-subtitle">
              Fill out the form below and we’ll get back to you within 24 hours
            </p>
          </div>

          <div className="form-container">
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? "error" : ""}
                    autoComplete="name"
                  />
                  {errors.name && <span className="error-text">{errors.name}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? "error" : ""}
                    autoComplete="email"
                  />
                  {errors.email && <span className="error-text">{errors.email}</span>}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    placeholder="+94 7X XXX XXXX"
                    value={formData.phone}
                    onChange={handleChange}
                    className={errors.phone ? "error" : ""}
                    autoComplete="tel"
                  />
                  {errors.phone && <span className="error-text">{errors.phone}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    placeholder="General Inquiry"
                    value={formData.subject}
                    onChange={handleChange}
                    className={errors.subject ? "error" : ""}
                  />
                  {errors.subject && <span className="error-text">{errors.subject}</span>}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Tell us about your travel plans..."
                  value={formData.message}
                  onChange={handleChange}
                  className={errors.message ? "error" : ""}
                />
                {errors.message && <span className="error-text">{errors.message}</span>}
              </div>

              <button type="submit" className="btn-submit" disabled={loading}>
                {loading ? (
                  <>
                    <i className="fas fa-spinner fa-spin" aria-hidden="true" />
                    &nbsp;Sending...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane" aria-hidden="true" />
                    &nbsp;Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="map-section">
        <div className="map-container">
          <iframe
            title="Calvera Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.58586988969!2d79.77380044999999!3d6.927078699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
            width="100%"
            height="420"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* Social */}
      <section className="social-section">
        <div className="container">
          <h2>Follow Our Journey</h2>
          <p>Stay connected with us on social media</p>
          <div className="social-links">
            <a href="https://web.facebook.com/calveratravels/" className="social-icon facebook" aria-label="Facebook">
              <i className="fab fa-facebook-f" aria-hidden="true"></i>
            </a>
            <a href="https://www.instagram.com/calvera_travels_/" className="social-icon instagram" aria-label="Instagram">
              <i className="fab fa-instagram" aria-hidden="true"></i>
            </a>
            <a href="https://x.com/Calveratravel" className="social-icon x" aria-label="Twitter">
              <i className="fab fa-twitter" aria-hidden="true"></i>
            </a>
            <a href="https://www.linkedin.com/company/calvera-travels-pvt-ltd/?viewAsMember=true" className="social-icon linkedin" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in" aria-hidden="true"></i>
            </a>
            <a href="https://www.youtube.com/@CalveraTravels" className="social-icon youtube" aria-label="YouTube">
              <i className="fab fa-youtube" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </section>

      {/* ====== THANK YOU MODAL (built-in) ====== */}
      {isModalOpen && (
        <div
          className="modal-overlay"
          onClick={() => setIsModalOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setIsModalOpen(false)}
              aria-label="Close dialog"
            >
              ×
            </button>

            <div className="modal-hero">
              <div className="modal-hero-glow" />
              <i className="fas fa-check-circle"></i>
            </div>

            <h3 className="modal-title">Thank you for contacting us!</h3>
            <p className="modal-text">
              Our team will reach you soon. We&apos;ve also sent a confirmation email.
            </p>

            <button className="btn-submit modal-ok" onClick={() => setIsModalOpen(false)}>
              Okay, got it
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
