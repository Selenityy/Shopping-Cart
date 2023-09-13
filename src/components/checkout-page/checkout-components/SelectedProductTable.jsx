import React from "react";
import ProductRow from "./ProductRow";

const SelectedProductTable = () => {
    return (
        <div>
            <h3 id="checkout-product-title">Product</h3>
            <h3 id="checkout-quantity-title">Quantity</h3>
            <h3 id="checkout-total-title">Total</h3>
            <hr></hr>
            <ProductRow />
        </div>
    )
};

export default SelectedProductTable;