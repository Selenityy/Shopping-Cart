import React from "react";
import cart from "../../../assets/shopping-bag.png";

const Icons = ({handleCartClick}) => {

  return (
    <div id="checkout-cart-icon">
      <div id="item-count" className="shopping-cart-icons"></div>
      <img
        src={cart}
        alt="shopping-cart-image"
        id="cart-icon"
        className="shopping-cart-icons"
        onClick={handleCartClick}
      ></img>
    </div>
  );
};

export default Icons;
