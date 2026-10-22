
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { money } from "./products";

export default function Cart() {
  const {
    items,
    changeQuantity,
    removeFromCart,
    total,
    count
  } = useCart();

  function checkoutOnWhatsApp() {
    const orderDetails = items
      .map(
        item =>
          `${item.name} (${item.detail}) x ${item.quantity} = ${money(
            item.price * item.quantity
          )}`
      )
      .join("\n");

    const message =
      `Hello Hasbunallah Grocery Store!\n\n` +
      `I would like to enquire about this order:\n\n` +
      `${orderDetails}\n\n` +
      `Total: ${money(total)}\n\n` +
      `Please confirm product availability and the final prices.`;

    window.open(
      `https://wa.me/2348144160226?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <div className="cart-page">
      <section className="page-hero cart-hero">
        <div className="page-hero-content">
          <span className="eyebrow">YOUR SHOPPING BASKET</span>

          <h1>
            Your cart,
            <br />
            <span>your groceries.</span>
          </h1>

          <p>
            Review your selected groceries, update quantities,
            and contact us to enquire about your order.
          </p>

          <Link to="/shop" className="button-primary">
            ← Continue shopping
          </Link>
        </div>

        <div className="page-hero-image">
          <img
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1000&q=85"
            alt="Fresh groceries ready for shopping"
          />
        </div>
      </section>

      <section className="section-block cart-content">
        <div className="section-heading">
          <div>
            <span className="eyebrow">ORDER SUMMARY</span>
            <h2>Your shopping cart</h2>
            <p>
              {count} item{count === 1 ? "" : "s"} in your cart
            </p>
          </div>
        </div>

        {items.length === 0 ? (
          <div className="empty-cart">
            <div className="empty-cart-icon">🛒</div>

            <h2>Your cart is empty</h2>

            <p>
              You haven't added any groceries yet.
              Explore our shop to find what you need.
            </p>

            <Link to="/shop" className="button-primary">
              Start shopping →
            </Link>
          </div>
        ) : (
          <div className="cart-layout">
            <div className="cart-items">
              {items.map(item => (
                <article className="cart-item" key={item.id}>
                  <img
                    className="cart-item-image"
                    src={item.image}
                    alt={item.name}
                  />

                  <div className="cart-item-details">
                    <small>{item.category}</small>
                    <h3>{item.name}</h3>
                    <p>{item.detail}</p>

                    <strong>{money(item.price)}</strong>

                    <button
                      type="button"
                      className="remove-cart-button"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>

                  <div className="cart-item-actions">
                    <div className="quantity-control">
                      <button
                        type="button"
                        aria-label={`Decrease quantity of ${item.name}`}
                        onClick={() =>
                          changeQuantity(item.id, item.quantity - 1)
                        }
                      >
                        −
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        type="button"
                        aria-label={`Increase quantity of ${item.name}`}
                        onClick={() =>
                          changeQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>

                    <strong className="cart-line-total">
                      {money(item.price * item.quantity)}
                    </strong>
                  </div>
                </article>
              ))}

              <Link to="/shop" className="continue-shopping-link">
                ← Add more groceries
              </Link>
            </div>

            <aside className="cart-summary">
              <span className="eyebrow">YOUR TOTAL</span>

              <h2>Order summary</h2>

              <div className="summary-row">
                <span>Items</span>
                <span>{count}</span>
              </div>

              <div className="summary-row">
                <span>Subtotal</span>
                <strong>{money(total)}</strong>
              </div>

              <div className="summary-row">
                <span>Delivery</span>
                <span>To be confirmed</span>
              </div>

              <div className="summary-total">
                <span>Estimated total</span>
                <strong>{money(total)}</strong>
              </div>

              <p className="cart-disclaimer">
                Prices and availability must be confirmed by the store.
                Delivery charges, if applicable, are not included.
              </p>

              <button
                type="button"
                className="button-primary checkout-button"
                onClick={checkoutOnWhatsApp}
              >
                Enquire on WhatsApp →
              </button>

              <p className="secure-note">
                💬 Your order details will be prepared in WhatsApp.
              </p>
            </aside>
          </div>
        )}
      </section>
    </div>
  );
}
