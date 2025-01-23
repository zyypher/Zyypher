import React from "react";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen bg-black overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        loop
        autoPlay
        muted
        playsInline
        preload="auto"
      >
        {/* <source src="https://framerusercontent.com/assets/EPAjrPciwbYcRG4yHc9GGMQ69KU.webm" type="video/mp4" /> */}
        <source src="/videos/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Left Black Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-transparent w-2/5"></div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center text-left text-white z-30">
        <div className="container mx-auto px-8">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 text-white drop-shadow-lg">
            Where the world <br />
            builds software.
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 mb-8 leading-relaxed">
          Empowering ideas, crafting innovations <br /> where creativity meets technology.
          </p>
          <div className="flex space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg">
              Get Started
            </button>
            <button className="bg-transparent border border-gray-300 hover:border-white hover:bg-white hover:text-black text-gray-300 font-bold py-3 px-6 rounded-lg shadow-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/60 to-black"></div>
    </section>
  );
};

export default HeroSection;
