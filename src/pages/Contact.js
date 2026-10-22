
import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "Product enquiry",
    message: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setForm(current => ({
      ...current,
      [name]: value
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const message =
      `Hello Hasbunallah Grocery Store!\n\n` +
      `My name is ${form.name}.\n` +
      `My email: ${form.email || "Not provided"}\n` +
      `Enquiry: ${form.subject}\n\n` +
      `${form.message}`;

    const whatsappUrl =
      `https://wa.me/2348144160226?text=${encodeURIComponent(message)}`;

    window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-content">
          <span className="eyebrow">WE'RE HERE TO HELP</span>

          <h1>
            Let's talk
            <br />
            <span>groceries.</span>
          </h1>

          <p>
            Have a question about our products, bulk orders,
            or availability? Contact Hasbunallah Grocery Store
            and tell us what you need.
          </p>

          <a
            href="https://wa.me/2348144160226"
            target="_blank"
            rel="noreferrer"
            className="button-primary"
          >
            Chat with us on WhatsApp →
          </a>
        </div>

        <div className="contact-hero-image">
          <img
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=85"
            alt="Fresh produce at a grocery market"
          />
        </div>
      </section>

      <section className="section-block contact-details-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">GET IN TOUCH</span>
            <h2>Contact our store</h2>
            <p>Choose the contact method that works best for you.</p>
          </div>
        </div>

        <div className="contact-details-grid">
          <a href="tel:08144160226" className="contact-detail-card">
            <span className="contact-detail-icon">📞</span>
            <h3>Call us</h3>
            <p>Speak to us about your grocery enquiry.</p>
            <strong>08144160226</strong>
          </a>

          <a
            href="mailto:uthmanabdulazeezolamide@gmail.com"
            className="contact-detail-card"
          >
            <span className="contact-detail-icon">✉️</span>
            <h3>Email us</h3>
            <p>Send us your questions or business enquiries.</p>
            <strong>Send an email →</strong>
          </a>

          <a
            href="https://wa.me/2348144160226"
            target="_blank"
            rel="noreferrer"
            className="contact-detail-card"
          >
            <span className="contact-detail-icon">💬</span>
            <h3>WhatsApp</h3>
            <p>Message us about products and bulk purchases.</p>
            <strong>Chat with us →</strong>
          </a>
        </div>
      </section>

      <section className="contact-form-section">
        <div className="contact-form-intro">
          <span className="eyebrow">SEND AN ENQUIRY</span>

          <h2>How can we help you?</h2>

          <p>
            Complete this form and we'll prepare your message
            in WhatsApp so you can review and send it to our store.
          </p>

          <div className="contact-form-note">
            <span>✓</span>
            <p>
              Your message opens in WhatsApp. You must press
              Send there for the store to receive it.
            </p>
          </div>
        </div>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >
          <label htmlFor="contact-name">Your name *</label>

          <input
            id="contact-name"
            type="text"
            name="name"
            placeholder="Enter your name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="contact-email">Email address (optional)</label>

          <input
            id="contact-email"
            type="email"
            name="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={handleChange}
          />

          <label htmlFor="contact-subject">What is your enquiry about?</label>

          <select
            id="contact-subject"
            name="subject"
            value={form.subject}
            onChange={handleChange}
          >
            <option>Product enquiry</option>
            <option>Wholesale and bulk orders</option>
            <option>Product availability</option>
            <option>Prices</option>
            <option>Other question</option>
          </select>

          <label htmlFor="contact-message">Your message *</label>

          <textarea
            id="contact-message"
            name="message"
            rows="5"
            placeholder="Tell us what you need..."
            value={form.message}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="button-primary contact-submit-button"
          >
            Prepare WhatsApp message →
          </button>
        </form>
      </section>
    </div>
  );
}
