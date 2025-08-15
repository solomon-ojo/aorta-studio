import React from "react";
import Button from "./Button";
import CardMarquee from "./CardMarquee";

const Hero = () => {
  return (
    <section className="pt-10 ">
      <div className="container">
        <div className="flex flex-col justify-center items-center">
          <h1 className="capitalize text-5xl font-semibold mt-10 flex-wrap text-center">
            Navis web template
          </h1>
          <p className="py-4 pb-5 text-secondary text-lg text-center">
            Presenting Navis, The ultimate Business Solutions and Risk
            Management Webflow Template
          </p>
          <Button text={"See all services"} color={"bg-black"} />
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
