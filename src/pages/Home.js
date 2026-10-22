
import React from "react";
import { Link } from "react-router-dom";
import { products } from "./products";

export default function Home() {
  const categories = [
    {
      name: "Rice & Grains",
      icon: "🌾",
      image:
        "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=700&q=85"
    },
    {
      name: "Fresh Foods",
      icon: "🥬",
      image:
        "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=700&q=85"
    },
    {
      name: "Cooking Oil",
      icon: "🫒",
      image:
        "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=700&q=85"
    },
    {
      name: "Beverages",
      icon: "🥤",
      image:
        "https://images.unsplash.com/photo-1554866585-cd94860890b7?auto=format&fit=crop&w=700&q=85"
    }
  ];

  const featuredProducts = products.slice(0, 4);

  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <span className="eyebrow">
            YOUR EVERYDAY GROCERY PARTNER
          </span>

          <h1>
            Good food.
            <br />
            Great prices.
            <br />
            <span>Every day.</span>
          </h1>

          <p>
            Stock your kitchen with everyday essentials
            from Hasbunallah Grocery Store. Shop for your
            home or buy in bulk for your business.
          </p>

          <div className="hero-buttons">
            <Link to="/shop" className="button-primary">
              Shop groceries →
            </Link>

            <Link to="/wholesale" className="button-outline">
              Explore wholesale
            </Link>
          </div>

          <div className="hero-benefits">
            <span>✓ Retail & wholesale</span>
            <span>✓ Everyday essentials</span>
            <span>✓ Easy WhatsApp enquiries</span>
          </div>
        </div>

        <div className="hero-image-wrap">
          <img
            className="hero-image"
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1400&q=90"
            alt="Fresh produce and groceries at a market"
          />

          <div className="hero-image-label">
            <span>🛒</span>
            <div>
              <strong>Your grocery stop</strong>
              <small>Everything for your home</small>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-strip">
        <div>
          <span>🛍️</span>
          <p>
            <strong>Retail shopping</strong>
            <small>For your household</small>
          </p>
        </div>

        <div>
          <span>📦</span>
          <p>
            <strong>Bulk purchases</strong>
            <small>For shops and businesses</small>
          </p>
        </div>

        <div>
          <span>💬</span>
          <p>
            <strong>Easy enquiries</strong>
            <small>Contact us on WhatsApp</small>
          </p>
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <div>
            <span className="eyebrow">EXPLORE OUR STORE</span>
            <h2>Shop by category</h2>
            <p>Find the everyday essentials you need.</p>
          </div>

          <Link to="/shop" className="text-link">
            View all products →
          </Link>
        </div>

        <div className="category-grid">
          {categories.map(category => (
            <Link
              to="/shop"
              className="category-card"
              key={category.name}
            >
              <img
                src={category.image}
                alt={category.name}
                loading="lazy"
              />

              <div className="category-card-content">
                <span>{category.icon}</span>
                <h3>{category.name}</h3>
                <small>Explore products →</small>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-block featured-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">PICKS FOR YOUR PANTRY</span>
            <h2>Popular groceries</h2>
            <p>Explore some of the products in our store.</p>
          </div>

          <Link to="/shop" className="text-link">
            Shop everything →
          </Link>
        </div>

        <div className="product-grid">
          {featuredProducts.map(product => (
            <Link
              to="/shop"
              className="product-card"
              key={product.id}
            >
              <div className="product-image-wrap">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                />
                <span className="product-tag">Grocery</span>
              </div>

              <div className="product-info">
                <small>{product.category}</small>
                <h3>{product.name}</h3>
                <p>{product.detail}</p>
                <span className="product-card-link">
                  Browse in shop →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="wholesale-banner">
        <div className="wholesale-banner-content">
          <span className="eyebrow">FOR RETAILERS & BUSINESSES</span>
          <h2>Buying in bulk?</h2>
          <p>
            Get in touch with Hasbunallah Grocery Store
            for your wholesale grocery enquiries.
          </p>

          <Link to="/wholesale" className="button-light">
            Discover wholesale →
          </Link>
        </div>

        <img
          src="https://images.unsplash.com/photo-1601593768790-5f6b7e6b3d3c?auto=format&fit=crop&w=1000&q=85"
          alt="Grocery products arranged for shopping"
          loading="lazy"
        />
      </section>

      <section className="contact-cta">
        <div>
          <span className="eyebrow">WE ARE HERE TO HELP</span>
          <h2>Need help with your order?</h2>
          <p>
            Talk to us about groceries, bulk purchases,
            and product availability.
          </p>
        </div>

        <a
          href="https://wa.me/2348144160226"
          target="_blank"
          rel="noreferrer"
          className="button-primary"
        >
          Chat on WhatsApp →
        </a>
      </section>
    </div>
  );
}
