import React from "react";

const Button = ({ id, className, onClick, label }) => {
  return (
    <button id={id} className={className} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
