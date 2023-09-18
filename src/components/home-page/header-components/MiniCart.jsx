import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../Context";
import "../../../styles/MiniCart.css";
import Button from "../../utilities/Button";

const MiniCart = ({ isVisible, handleCartClick }) => {
  const { cartItems, cartTotalItems, totalPrice } = useContext(ShopContext);

  const cartDisplayClass = isVisible ? "toggle-on" : "toggle-off";

  const navigate = useNavigate();

  const handleCheckoutClick = () => {
    navigate("/checkout");
  };

  return (
    <div id="mini-checkout-display" className={cartDisplayClass}>
      <div id="mini-cart-details">
        <h2 id="mini-cart">Your Cart</h2>
        <div id="mini-cart-total-items">({cartTotalItems})</div>
      </div>
      {cartItems.length > 0 && <hr width="100%" id="mini-cart-hr"></hr>}
      {cartItems.map((product, index) => (
        <div
          key={product.id}
          id={`cart-item-${product.id}`}
          className="cart-items-list"
        >
          <img
            className="cart-item-images"
            src={product.image}
            alt={product.name}
          ></img>
          <div className="cart-item-names">{product.name}</div>
          {/* <div className="cart-item-description">{product.description}</div> */}
          <div className="cart-item-prices">{`$${product.price}`}</div>
        </div>
      ))}
      <hr width="100%" id="mini-cart-hr-line"></hr>
      <div id="mini-cart-totals">
        <div id="cart-subtotal">Subtotal</div>
        <div id="cart-subtotal-price">{`$${totalPrice.toFixed(2)}`}</div>
      </div>
      <div id="mini-cart-buttons">
        <Button
          id="mini-cart-continue-shopping"
          className="mini-cart-btn"
          onClick={handleCartClick}
          label="Continue Shopping"
        />
        <Button
          id="mini-cart-view-cart"
          className="mini-cart-btn"
          onClick={handleCheckoutClick}
          label="View Cart"
        />
      </div>
    </div>
  );
};

export default MiniCart;
