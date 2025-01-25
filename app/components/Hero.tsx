import React from "react";
import "./HeroSection.css"; 

const HeroSection = () => {
  return (
    <section className="relative bg-black text-white min-h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Hero Content */}
      <div className="text-center max-w-4xl mx-auto px-4">
        <h1
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-4 framer-text"
          data-text-fill="true"
        >
          Where the world
          <br />
          builds software
        </h1>
        <p className="text-gray-400 text-base sm:text-lg md:text-xl lg:text-2xl pt-6">
          Empowering ideas, crafting innovations
          where creativity meets technology.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
