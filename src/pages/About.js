
import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  const values = [
    {
      icon: "🛒",
      title: "Everyday essentials",
      description:
        "A selection of groceries and household essentials for everyday needs."
    },
    {
      icon: "🤝",
      title: "Customer-focused service",
      description:
        "We welcome enquiries and help customers find the products they need."
    },
    {
      icon: "📦",
      title: "Retail and wholesale",
      description:
        "Whether you're shopping for home or business, contact us to discuss your needs."
    }
  ];

  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero-content">
          <span className="eyebrow">GET TO KNOW OUR STORE</span>

          <h1>
            Everyday groceries.
            <br />
            <span>A store you can contact.</span>
          </h1>

          <p>
            Welcome to Hasbunallah Grocery Store. We help
            customers enquire about groceries, household
            essentials, and bulk supplies for businesses.
          </p>

          <div className="about-hero-actions">
            <Link to="/shop" className="button-primary">
              Explore our shop →
            </Link>

            <Link to="/contact" className="button-outline">
              Contact us
            </Link>
          </div>
        </div>

        <div className="about-hero-image">
          <img
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=85"
            alt="Fresh produce displayed in a grocery market"
          />
        </div>
      </section>

      <section className="section-block about-story">
        <div className="about-story-image">
          <img
            src="https://images.unsplash.com/photo-1543083477-4f785aeafaa9?auto=format&fit=crop&w=1000&q=85"
            alt="Groceries and fresh produce at a market"
            loading="lazy"
          />
        </div>

        <div className="about-story-content">
          <span className="eyebrow">OUR STORY</span>

          <h2>Here for your everyday grocery needs.</h2>

          <p>
            Hasbunallah Grocery Store is a grocery business
            focused on helping customers source everyday
            food items and household essentials.
          </p>

          <p>
            We welcome enquiries from individuals, families,
            retailers, and businesses looking for groceries
            in different quantities.
          </p>

          <p>
            Have a product in mind? Contact us to ask about
            availability, current prices, and bulk purchases.
          </p>

          <Link to="/contact" className="text-link">
            Get in touch with us →
          </Link>
        </div>
      </section>

      <section className="about-values-section">
        <div className="about-values-heading">
          <span className="eyebrow">WHAT WE FOCUS ON</span>
          <h2>Making grocery shopping simpler.</h2>
          <p>
            Our goal is to make it easier for customers to
            enquire about the groceries they need.
          </p>
        </div>

        <div className="about-values-grid">
          {values.map((value, index) => (
            <article className="about-value-card" key={value.title}>
              <div className="about-value-icon">{value.icon}</div>

              <span className="about-value-number">
                0{index + 1}
              </span>

              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-cta">
        <div className="about-cta-image">
          <img
            src="https://images.unsplash.com/photo-1604719312566-8912e9c8a213?auto=format&fit=crop&w=1000&q=85"
            alt="Shelves of products in a grocery store"
            loading="lazy"
          />
        </div>

        <div className="about-cta-content">
          <span className="eyebrow">LET'S CONNECT</span>

          <h2>Looking for groceries for your home or business?</h2>

          <p>
            Browse our product catalogue or message us directly
            to enquire about what you need.
          </p>

          <div className="about-cta-actions">
            <Link to="/shop" className="button-primary">
              Browse groceries →
            </Link>

            <a
              href="https://wa.me/2348144160226"
              target="_blank"
              rel="noreferrer"
              className="button-outline"
            >
              WhatsApp us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
