
import React from "react";
import { Link } from "react-router-dom";

export default function Wholesale() {
  const benefits = [
    {
      icon: "📦",
      title: "Bulk purchases",
      description:
        "Enquire about buying groceries in larger quantities for your shop or business."
    },
    {
      icon: "🛒",
      title: "Everyday essentials",
      description:
        "Ask about rice, cooking oil, noodles, beverages and other grocery supplies."
    },
    {
      icon: "💬",
      title: "Easy enquiries",
      description:
        "Contact our team to discuss the products and quantities you need."
    },
    {
      icon: "🤝",
      title: "Business support",
      description:
        "Tell us about your business and let us know how we can help with your grocery needs."
    }
  ];

  const wholesaleMessage =
    "Hello Hasbunallah Grocery Store, I want to enquire about wholesale grocery purchases. Please share your available products and prices.";

  return (
    <div className="wholesale-page">
      <section className="wholesale-hero">
        <div className="wholesale-hero-content">
          <span className="eyebrow">
            WHOLESALE & BUSINESS SUPPLIES
          </span>

          <h1>
            Stock your business.
            <br />
            <span>Shop with confidence.</span>
          </h1>

          <p>
            Looking for groceries for your shop, restaurant,
            or business? Contact Hasbunallah Grocery Store
            to enquire about bulk purchases and available stock.
          </p>

          <div className="wholesale-actions">
            <a
              href={`https://wa.me/2348144160226?text=${encodeURIComponent(wholesaleMessage)}`}
              target="_blank"
              rel="noreferrer"
              className="button-light"
            >
              Enquire on WhatsApp →
            </a>

            <Link to="/shop" className="button-outline-light">
              Browse groceries
            </Link>
          </div>

          <div className="wholesale-hero-points">
            <span>✓ Bulk order enquiries</span>
            <span>✓ Multiple grocery categories</span>
            <span>✓ Direct contact with our store</span>
          </div>
        </div>

        <div className="wholesale-hero-image">
          <img
            src="https://images.unsplash.com/photo-1601593768790-5f6b7e6b3d3c?auto=format&fit=crop&w=1200&q=85"
            alt="Grocery supplies arranged for a shop"
          />
        </div>
      </section>

      <section className="section-block wholesale-intro">
        <div className="section-heading">
          <div>
            <span className="eyebrow">FOR YOUR BUSINESS</span>
            <h2>Your grocery supply partner</h2>
            <p>
              Whether you run a retail shop or need supplies
              for your business, let's discuss your requirements.
            </p>
          </div>
        </div>

        <div className="wholesale-benefit-grid">
          {benefits.map((benefit, index) => (
            <article className="wholesale-benefit-card" key={benefit.title}>
              <div className="wholesale-benefit-icon">
                {benefit.icon}
              </div>

              <span className="benefit-number">
                0{index + 1}
              </span>

              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="wholesale-product-showcase">
        <div className="wholesale-showcase-image">
          <img
            src="https://images.unsplash.com/photo-1579113800032-c38bd7635818?auto=format&fit=crop&w=1200&q=85"
            alt="A selection of fresh grocery products"
            loading="lazy"
          />
        </div>

        <div className="wholesale-showcase-content">
          <span className="eyebrow">WHAT DO YOU NEED?</span>

          <h2>Let's talk about your next order.</h2>

          <p>
            Tell us which products you need, the quantities
            you're looking for, and your preferred collection
            or delivery arrangements. We'll discuss availability
            and pricing with you.
          </p>

          <ul className="wholesale-checklist">
            <li>Rice and grains</li>
            <li>Cooking oil and food ingredients</li>
            <li>Noodles, canned foods and beverages</li>
            <li>Other everyday grocery essentials</li>
          </ul>

          <a
            href={`https://wa.me/2348144160226?text=${encodeURIComponent(wholesaleMessage)}`}
            target="_blank"
            rel="noreferrer"
            className="button-primary"
          >
            Discuss a bulk order →
          </a>
        </div>
      </section>

      <section className="wholesale-contact-panel">
        <div>
          <span className="eyebrow">LET'S GET STARTED</span>
          <h2>Ready to make an enquiry?</h2>
          <p>
            Message us directly or call us to ask about
            wholesale products, quantities and prices.
          </p>
        </div>

        <div className="wholesale-contact-actions">
          <a
            href={`https://wa.me/2348144160226?text=${encodeURIComponent(wholesaleMessage)}`}
            target="_blank"
            rel="noreferrer"
            className="button-light"
          >
            WhatsApp us →
          </a>

          <a href="tel:08144160226" className="button-outline-light">
            Call 08144160226
          </a>
        </div>
      </section>
    </div>
  );
}
