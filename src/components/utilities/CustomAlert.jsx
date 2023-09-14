import React from "react";
import Button from "./Button";

const CustomAlert = ({ id, className, message, onClick, label }) => {
  return (
    <div>
      <p>{message}</p>
      <Button id={id} className={className} onClick={onClick} label={label} />
    </div>
  );
};

export default CustomAlert;
