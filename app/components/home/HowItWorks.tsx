"use client";

import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MagicIcon from "../images/MagicIcon";
import SupportIcon from "../images/SupportIcon";
import VisionIcon from "../images/VisionIcon";

gsap.registerPlugin(ScrollTrigger);

const HowItWorks = () => {
  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#how-it-works",
        start: "top center+=100",
        end: "bottom center",
        toggleActions: "play none none reverse",
      },
    });

    // Heading animation
    timeline.fromTo(
      ".how-it-works-heading",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
    );

    // Cards animation
    timeline.fromTo(
      ".how-it-works-card",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.3,
      },
      "-=0.5" // Overlap slightly with the heading
    );
  }, []);

  return (
    <section
      id="how-it-works"
      className="bg-black py-16 px-8 flex flex-col items-center"
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <p className="uppercase tracking-wide font-semibold text-sm text-lightGreen how-it-works-heading">
          How it works
        </p>
        <h2 className="text-white text-3xl md:text-4xl mt-4 leading-tight font-light how-it-works-heading">
          Top-notch designs, <br /> delivered at your doorstep.
        </h2>
      </div>

      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Step 1 */}
        <div className="flex flex-col items-center bg-gradient-to-b from-[#1e1e1e] to-[#141414] rounded-[30px] p-8 min-h-[280px] md:min-h-[320px] border border-[#1f1f1f] how-it-works-card">
          <div className="w-[80px] h-[80px] flex justify-center items-center bg-black rounded-full mb-6">
            <VisionIcon />
          </div>
          <h3 className="text-gray-200 text-lg font-semibold mb-2">
            Tell us your vision
          </h3>
          <p className="text-gray-400 text-center">
            Share your goals and project details with us. We’re here to
            understand your needs and bring your ideas to life.
          </p>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center bg-gradient-to-b from-[#1e1e1e] to-[#141414] rounded-[30px] p-8 min-h-[280px] md:min-h-[320px] border border-[#1f1f1f] how-it-works-card">
          <div className="w-[80px] h-[80px] flex justify-center items-center bg-black rounded-full mb-6">
            <MagicIcon />
          </div>
          <h3 className="text-gray-200 text-lg font-semibold mb-2">
            Experience the magic
          </h3>
          <p className="text-gray-400 text-center">
            Sit back while our expert designers craft creative solutions
            tailored to your vision with precision and care.
          </p>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center bg-gradient-to-b from-[#1e1e1e] to-[#141414] rounded-[30px] p-8 min-h-[280px] md:min-h-[320px] border border-[#1f1f1f] how-it-works-card">
          <div className="w-[80px] h-[80px] flex justify-center items-center bg-black rounded-full mb-6">
            <SupportIcon />
          </div>
          <h3 className="text-gray-200 text-lg font-semibold mb-2">
            Enjoy continuous support
          </h3>
          <p className="text-gray-400 text-center">
            Stay worry-free with ongoing access to our dedicated design team,
            ready to assist you at every step.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
