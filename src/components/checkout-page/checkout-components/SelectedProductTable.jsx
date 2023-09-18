import React from "react";
import ProductRow from "./ProductRow";
import "../../../styles/Checkout.css";

const SelectedProductTable = () => {
  return (
    <div>
      <div id="selected-product-table-h3s">
        <h3 id="checkout-product-title">Product</h3>
        <h3 id="checkout-quantity-title">Quantity</h3>
        <h3 id="checkout-total-title">Total</h3>
      </div>
      <hr></hr>
      <ProductRow />
    </div>
  );
};

export default SelectedProductTable;
