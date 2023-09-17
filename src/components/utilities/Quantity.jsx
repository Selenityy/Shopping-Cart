import React, { useState } from "react";
import Button from "./Button";

const Quantity = () => {
  const [quantity, setQuantity] = useState(0);

  const handleAddClick = () => {
    console.log("add");
    let newQuantity = quantity;
    newQuantity += 1;
    setQuantity(newQuantity);
  };

  const handleSubClick = () => {
    console.log("sub");
    let newQuantity = quantity;
    if (newQuantity > 0) {
      newQuantity -= 1;
      setQuantity(newQuantity);
    }
  };

  return (
    <>
      <div>Qty:</div>
      <Button
        className="quantity-btn sub-quantity-btn"
        onClick={handleSubClick}
        label="-"
      />
      <div>{quantity}</div>
      <Button
        className="quantity-btn add-quantity-btn"
        onClick={handleAddClick}
        label="+"
      />
    </>
  );
};

export default Quantity;
