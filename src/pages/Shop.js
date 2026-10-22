
import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { products, money } from "./products";
import { useCart } from "../context/CartContext";

export default function Shop() {
  const { addToCart } = useCart();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [message, setMessage] = useState("");

  const categories = [
    "All",
    ...new Set(products.map(product => product.category))
  ];

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch =
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.category.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || product.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  function handleAdd(product) {
    addToCart(product);
    setMessage(`${product.name} added to your cart!`);

    window.setTimeout(() => setMessage(""), 2500);
  }

  return (
    <div className="shop-page">
      <section className="page-hero shop-hero">
        <div className="page-hero-content">
          <span className="eyebrow">THE HASBUNALLAH MARKET</span>

          <h1>
            Your pantry,
            <br />
            <span>your way.</span>
          </h1>

          <p>
            Discover everyday groceries and household
            essentials for your home or business.
          </p>

          <div className="shop-hero-actions">
            <a href="#products" className="button-primary">
              Browse groceries ↓
            </a>

            <Link to="/wholesale" className="button-outline">
              Buying in bulk?
            </Link>
          </div>
        </div>

        <div className="page-hero-image">
          <img
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=85"
            alt="Fresh groceries at a market"
          />
        </div>
      </section>

      <section className="shop-benefits">
        <span>🛒 Everyday groceries</span>
        <span>📦 Retail and wholesale</span>
        <span>💬 Easy ordering enquiries</span>
      </section>

      <section className="section-block" id="products">
        <div className="section-heading">
          <div>
            <span className="eyebrow">FILL YOUR BASKET</span>
            <h2>Our groceries</h2>
            <p>Find your favourites and add them to your cart.</p>
          </div>

          <Link to="/cart" className="button-primary">
            View cart →
          </Link>
        </div>

        <div className="shop-tools">
          <div className="search-box">
            <span>🔎</span>
            <input
              type="search"
              placeholder="Search rice, oil, noodles..."
              value={search}
              onChange={event => setSearch(event.target.value)}
              aria-label="Search groceries"
            />
          </div>

          <select
            value={category}
            onChange={event => setCategory(event.target.value)}
            aria-label="Filter by category"
          >
            {categories.map(item => (
              <option value={item} key={item}>
                {item === "All" ? "All categories" : item}
              </option>
            ))}
          </select>
        </div>

        {message && (
          <div className="cart-message" role="status">
            ✓ {message}
          </div>
        )}

        <p className="results-count">
          Showing {filteredProducts.length} product
          {filteredProducts.length === 1 ? "" : "s"}
        </p>

        {filteredProducts.length > 0 ? (
          <div className="product-grid shop-product-grid">
            {filteredProducts.map(product => (
              <article className="product-card" key={product.id}>
                <div className="product-image-wrap">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                  />

                  <span className="product-tag">
                    {product.category}
                  </span>
                </div>

                <div className="product-info">
                  <small>{product.category}</small>
                  <h3>{product.name}</h3>
                  <p>{product.detail}</p>

                  <div className="product-buy-row">
                    <strong className="product-price">
                      {money(product.price)}
                    </strong>

                    <button
                      type="button"
                      className="add-cart-button"
                      onClick={() => handleAdd(product)}
                    >
                      + Add
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="empty-products">
            <span>🛒</span>
            <h3>No products found</h3>
            <p>Try another search or choose a different category.</p>

            <button
              className="button-primary"
              onClick={() => {
                setSearch("");
                setCategory("All");
              }}
            >
              Show all products
            </button>
          </div>
        )}
      </section>

      <section className="contact-cta">
        <div>
          <span className="eyebrow">LOOKING FOR SOMETHING ELSE?</span>
          <h2>Can't find what you need?</h2>
          <p>Contact us to ask about product availability and bulk orders.</p>
        </div>

        <a
          href="https://wa.me/2348144160226"
          target="_blank"
          rel="noreferrer"
          className="button-primary"
        >
          Ask us on WhatsApp →
        </a>
      </section>
    </div>
  );
}
