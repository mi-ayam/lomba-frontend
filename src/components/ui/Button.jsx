import React from "react";

const Button = ({ value, textColor }) => {
  return (
    <button
      className={`inline-flex items-center px-2 py-1 my-2 text-sm font-medium text-center
          bg-secondary-blue ${textColor} rounded-lg `}
    >
      {value}
    </button>
  );
};

export default Button;
