import Image from "next/image";
import React from "react";

const images = [
  "/health_team.webp",
  "/health_team2.webp",
  "/health_team3.webp",
  "/medrehab.webp",
  "/pharm_image2.webp",
  "/radiography.webp",
  "/ypg_logo.webp",
  "/pharmacy.webp",
];

const CardMarquee = () => {
  return (
    <div className="w-full overflow-hidden py-10 mt-5 bg-gray-100">
      {/* Top Row */}
      <div className="marquee-row marquee-left">
        <div className="marquee-track">
          {[...images, ...images].map((src, i) => (
            <div key={`top-${i}`} className="marquee-card">
              <Image
                width={300}
                height={300}
                src={src}
                alt={`card-${i}`}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Row */}
      <div className="marquee-row marquee-right mt-6">
        <div className="marquee-track">
          {[...images, ...images].map((src, i) => (
            <div key={`bottom-${i}`} className="marquee-card">
              <Image
                width={300}
                height={300}
                src={src}
                alt={`card-${i}`}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardMarquee;
