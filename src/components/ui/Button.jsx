import React from "react";

const Button = ({ value, textColor, onClick, backgroundColor }) => {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center px-2 py-1 my-2 text-sm font-medium text-center
          ${backgroundColor} ${textColor} rounded-lg `}
    >
      {value}
    </button>
  );
};

export default Button;
