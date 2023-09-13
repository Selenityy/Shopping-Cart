import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../Context";
import "../../../styles/MiniCart.css";
import Button from "../../utilities/Button";

const MiniCart = ({ isVisible, handleCartClick }) => {
  const { products, cartItems } = useContext(ShopContext);

  const cartDisplayClass = isVisible ? "toggle-on" : "toggle-off";

  const navigate = useNavigate();

  const handleCheckoutClick = () => {
    navigate("/checkout");
  };

  return (
    <div id="mini-checkout-display" className={cartDisplayClass}>
      <h2 id="mini-cart">Your Cart</h2>
      <div>({cartItems.length})</div>
      <hr width="200px" id="hr"></hr>
      <img className="cart-item-img"></img>
      <div className="cart-item-name">Item</div>
      <div className="cart-item-desc">Description</div>
      <div className="cart-item-price">$10.00</div>
      <hr width="200px" id="hr"></hr>
      <div id="cart-subtotal">Subtotal</div>
      <div id="cart-subtotal-price">$10.00</div>
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
  );
};

export default MiniCart;
