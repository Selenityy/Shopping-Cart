import React, { useContext } from "react";
import { ShopContext } from "../Context";
import Button from "../utilities/Button";
import "../../styles/ProductTable.css";

const ProductTable = ({ productRef }) => {
  const { products, addToCart, increaseQuantity, decreaseQuantity } =
    useContext(ShopContext);

  return (
    <div ref={productRef} id="product-section" className="sections">
      {products.map((product, index) => (
        <div key={product.id} id={`product-${product.id}`} className="products">
          <img
            className="product-image"
            src={product.image}
            alt={product.name}
          ></img>
          <div className="product-names">{product.name}</div>
          {/* <div className="product-descriptions">{product.description}</div> */}
          <div className="product-price">{`$${product.price}`}</div>
          <div className="product-quantity">Qty</div>
          <Button
            id={`minus-qty-${index}`}
            className="qty-minus-btn"
            onClick={() => decreaseQuantity(product.id)}
            label="-"
          />
          <div id={`product-qty-${index}`} className="product-actual-quantity">{product.quantity}</div>
          <Button
            id={`add-qty-${index}`}
            className="qty-add-btn"
            onClick={() => increaseQuantity(product.id)}
            label="+"
          />
          <Button
            id="add-to-cart"
            className="qty-btn"
            onClick={() => addToCart(product.id)}
            label="Add to Cart"
          />
        </div>
      ))}
    </div>
  );
};

export default ProductTable;
