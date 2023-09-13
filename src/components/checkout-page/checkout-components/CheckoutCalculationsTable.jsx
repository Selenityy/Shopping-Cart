import React, { useContext } from "react";
import { ShopContext } from "../../Context";
import Button from "../../utilities/Button";
import FormInput from "../../utilities/FormInput";

const CheckoutCalculationsTable = () => {
  const { totalPrice } = useContext(ShopContext);

  return (
    <div>
      <FormInput id="discount-code" type="text" placeholder="Discount Code" />
      <Button id="code-btn" label="Apply" />
      <h4>Subtotal:</h4>
      <h4>{`$${totalPrice.toFixed(2)}`}</h4>
      <Button id="final-checkout-btn" label="Checkout" />
    </div>
  );
};

export default CheckoutCalculationsTable;
