import React from "react";

const Button = ({ text, color }) => {
  return (
    <div
      className={`${color} relative overflow-hidden h-12 px-6 py-2  hover:scale-105 duration-75  text-white rounded-full flex items-center justify-center cursor-pointer group`}
    >
      <span className="group-hover:animate-rollLoop font-semibold">{text}</span>
    </div>
  );
};

export default Button;
