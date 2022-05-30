import React from "react";
import { ReactPropTypes } from "react";

const CustomButton = ({ onClick, value, hoverColor, stndColor, textColor }) => {
  return (
    <div
      className={`rounded-md transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 ${hoverColor} flex justify-center  duration-300 ${stndColor}  p-3 ${textColor}  h-8 `}
      onClick={onClick}
    >
      {value}
    </div>
  );
};
export default CustomButton;

CustomButton.defaultProps = {
  stndColor: "bg-stone-400",
  textColor: "text-bwhite",
  hoverColor: "hover:bg-blue-500",
};
