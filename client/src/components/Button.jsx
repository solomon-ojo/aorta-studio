import React from "react";

const Button = ({ text }) => {
  return (
    <div className="relative overflow-hidden h-10 px-5 py-2 bg-primary hover:scale-105 duration-75  text-white rounded-full flex items-center justify-center cursor-pointer group">
      <span className="group-hover:animate-rollLoop">{text}</span>
    </div>
  );
};

export default Button;
