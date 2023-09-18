import React, { useContext } from "react";
import { ShopContext } from "../../Context";
import Button from "../../utilities/Button";
import "../../../styles/Checkout.css";

const ProductRow = () => {
  const { cartItems, increaseQuantityInCheckout, decreaseQuantityInCheckout } =
    useContext(ShopContext);

  return (
    <div id="listed-checkout-products">
      {cartItems.map((product, index) => {
        const totalPrice = product.quantity * product.price;
        return (
          <div
            key={product.id}
            id={`cartItems-${product.id}`}
            className="cart-item-divs"
          >
            <img
              className="cart-item-image"
              src={product.image}
              alt={product.name}
            ></img>
            <h4 id={`cartItem-${product.name}`} className="cartItem-name">
              {product.name}
            </h4>
            <h4 id={`cartItem-${product.price}`} className="cartItem-price">
              {`$${product.price.toFixed(2)}`}
            </h4>
            <Button
              id={`cart-minus-qty-${index}`}
              className="cart-qty-btn"
              onClick={() => decreaseQuantityInCheckout(product.id)}
              label="-"
            />
            <h4 className="cart-item-quantities" id={`cartItem-qty-${product.id}`}>{product.quantity}</h4>
            <Button
              id={`cart-add-qty-${index}`}
              className="cart-qty-btn"
              onClick={() => increaseQuantityInCheckout(product.id)}
              label="+"
            />
            <h4 className="cart-totals-calculated" id={`cartItem-total-${product.id}`}>{`$${totalPrice}`}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default ProductRow;
