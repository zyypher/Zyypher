"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ServicesHero = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/portfolio");
  };

  return (
    <section className="relative bg-black text-white py-16 px-4">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/services-hero-background.avif"
          alt="Hero Background"
          fill
          className="object-cover opacity-20"
        />
      </div>

      <div className="relative max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-8">
        {/* Left Text Content */}
        <div className="w-full lg:w-1/2 space-y-6">
          {/* Clients Badge */}
          <div className="flex items-center space-x-2 bg-black/70 px-4 py-2 rounded-full">
            <div className="flex -space-x-2">
              <Image
                src="/images/services-1.avif"
                alt="Happy Client 1"
                width={32}
                height={32}
                className="rounded-full border-2 border-white"
              />
              <Image
                src="/images/services-2.avif"
                alt="Happy Client 2"
                width={32}
                height={32}
                className="rounded-full border-2 border-white"
              />
              <Image
                src="/images/services-3.avif"
                alt="Happy Client 3"
                width={32}
                height={32}
                className="rounded-full border-2 border-white"
              />
            </div>
            <span className="text-sm font-medium">5+ Happy Clients</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl lg:text-[62px] font-bold leading-[120%] tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#fffff7] to-[#fffff7]/[0.34]">
            Power Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lightGreen to-lightGreen/[0.8]">
              Success
            </span>{" "}
            with Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lightGreen to-lightGreen/[0.8]">
              Services
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-400 tracking-wide">
            From captivating designs to cutting-edge development and impactful
            digital strategies, we empower your business to thrive, achieve
            growth, and leave a lasting impression.
          </p>

          {/* CTA Button */}
          <button
            onClick={handleClick}
            className="inline-block bg-lightGreen text-black font-medium rounded-full px-6 py-3 shadow hover:bg-lightGreenHover transition"
          >
            Explore Portfolio →
          </button>
        </div>

        {/* Right Section - Placeholder for 3D Object */}
        <div className="w-full lg:w-1/2 h-[400px] flex items-center justify-center">
          <div className="border-dashed border-2 border-gray-400 w-full h-full rounded-lg flex items-center justify-center">
            <p className="text-gray-400 text-center">3D Object Coming Soon</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
