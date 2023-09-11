import React from "react";
import "../../styles/ProductTable.css";

const ProductTable = ({ products }) => {
  return (
    <div id="product-section" className="sections">
      {products.map((product) => (
        <div key={product.id} id={`product-${product.id}`} className="products">
          <img
            className="product-image"
            src={product.image}
            alt={product.name}
          ></img>
          <div className="product-names">{product.name}</div>
          {/* <div className="product-descriptions">{product.description}</div> */}
          <div className="product-price">{`$${product.price}`}</div>
        </div>
      ))}
    </div>
  );
};

export default ProductTable;
