import React, { useContext, useState } from "react";
import { ShopContext } from "../../Context";
import Button from "../../utilities/Button";
import FormInput from "../../utilities/FormInput";
import CustomAlert from "../../utilities/CustomAlert";
import "../../../styles/Checkout.css";

const CheckoutCalculationsTable = () => {
  const { totalPrice, handleShowAlert, handleCloseAlert, showAlert } =
    useContext(ShopContext);

  return (
    <div>
      <FormInput id="discount-code" type="text" placeholder="Discount Code" />
      <Button id="code-btn" label="Apply" />
      <h4>Subtotal:</h4>
      <h4>{`$${totalPrice.toFixed(2)}`}</h4>
      <h4>Shipping & taxes will be calculated at checkout.</h4>
      <Button
        id="final-checkout-btn"
        label="Checkout"
        onClick={handleShowAlert}
      />
      {showAlert && (
        <CustomAlert
          id="checkout-alert"
          className="alerts"
          message="Your order has been placed!"
          onClick={handleCloseAlert}
          label="Ok"
        />
      )}
    </div>
  );
};

export default CheckoutCalculationsTable;
