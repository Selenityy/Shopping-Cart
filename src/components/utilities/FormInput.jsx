import React from "react";

const FormInput = ({
  value,
  label,
  id,
  htmlFor,
  type,
  placeholder,
  onChange,
}) => {
  return (
    <form>
      <label htmlFor={htmlFor}></label>
      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </form>
  );
};

export default FormInput;
