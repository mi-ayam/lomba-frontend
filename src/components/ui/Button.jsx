import React from "react";

const Button = ({
  value,
  textColor,
  onClick,
  backgroundColor,
  yPadding = "py-1",
  xPadding = "px-2",
  width,
}) => {
  return (
    <button
      onClick={onClick}
      className={` items-center ${width} ${xPadding} ${yPadding} my-2 text-sm font-medium text-center
          ${backgroundColor} ${textColor} rounded-lg `}
    >
      {value}
    </button>
  );
};

export default Button;
