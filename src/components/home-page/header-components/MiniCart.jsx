import React from "react";
import Button from "../../utilities/Button";

const MiniCart = ({ cartItemCount, isVisible }) => {
  const cartDisplayClass = isVisible ? "toggle-on" : "toggle-off";

  return (
    <div id="mini-checkout-display" className={cartDisplayClass}>
      <h2 id="mini-cart">Your Cart</h2>
      <div>({cartItemCount})</div>
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
        // onClick={} (makes it close out of the box)
        label="Continue Shopping"
      />
      <Button
        id="mini-cart-view-cart"
        className="mini-cart-btn"
        // onClick={} goes to the checkout page
        label="View Cart"
      />
    </div>
  );
};

export default MiniCart;
