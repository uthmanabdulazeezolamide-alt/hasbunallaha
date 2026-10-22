
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Link
} from "react-router-dom";

import { CartProvider, useCart } from "./context/CartContext";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Wholesale from "./pages/Wholesale";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Contact from "./pages/Contact";

import "./App.css";

function Header() {
  const { count } = useCart();

  return (
    <>
      <div className="topbar">
        <span>Fresh groceries. Everyday value.</span>
        <span>
          Call us: <a href="tel:08144160226">08144160226</a>
        </span>
      </div>

      <header className="site-header">
        <Link to="/" className="brand">
          <span className="brand-mark">H</span>
          <span>
            <strong>HASBUNALLAH</strong>
            <small>GROCERY STORE</small>
          </span>
        </Link>

        <nav className="main-nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="/wholesale">Wholesale</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <Link className="cart-pill" to="/cart">
          🛒 Cart <b>{count}</b>
        </Link>
      </header>
    </>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <Link to="/" className="brand brand-light">
            <span className="brand-mark">H</span>
            <span>
              <strong>HASBUNALLAH</strong>
              <small>GROCERY STORE</small>
            </span>
          </Link>

          <p>
            Your trusted stop for everyday groceries,
            household essentials and bulk supplies.
          </p>
        </div>

        <div>
          <h3>Quick links</h3>
          <Link to="/">Home</Link>
          <Link to="/shop">Shop groceries</Link>
          <Link to="/wholesale">Wholesale</Link>
          <Link to="/about">About us</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div>
          <h3>Contact us</h3>
          <a href="tel:08144160226">08144160226</a>
          <a href="mailto:uthmanabdulazeezolamide@gmail.com">
            uthmanabdulazeezolamide@gmail.com
          </a>
          <a
            href="https://wa.me/2348144160226"
            target="_blank"
            rel="noreferrer"
          >
            Chat on WhatsApp ↗
          </a>
        </div>
      </div>

      <div className="copyright">
        © {new Date().getFullYear()} Hasbunallah Grocery Store.
        All rights reserved.
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="app-shell">
          <Header />

          <main className="page-main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/wholesale" element={<Wholesale />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}
