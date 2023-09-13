import React, { useContext } from "react";
import { ShopContext } from "../Context";
import Button from "../utilities/Button";
import "../../styles/ProductTable.css";

const ProductTable = ({ productRef }) => {
  const { products, cartItems, addToCart } = useContext(ShopContext);

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
          <div>Qty</div>
          <Button
            id={`minus-qty-${index}`}
            className="qty-btn"
            // onClick={() => handleMinusClick(index)}
            label="-"
          />
          <div>{product.quantity}</div>
          <Button
            id={`add-qty-${index}`}
            className="qty-btn"
            // onClick={() => handleAddClick(index)}
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
