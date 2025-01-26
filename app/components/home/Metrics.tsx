"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Metrics = () => {
  useEffect(() => {
    // Animate the metrics
    gsap.fromTo(
      ".metric",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.3, // Stagger the animations for each metric
        scrollTrigger: {
          trigger: "#metrics",
          start: "top 80%", // Trigger when the section is 80% in the viewport
          end: "bottom 60%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section
      id="metrics"
      className="bg-black py-12 px-8 flex flex-col items-center"
    >
      {/* Separator Line */}
      <div className="w-full border-t border-gray-800 mb-8"></div>

      {/* Metrics Row */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-6xl mx-auto">
        {/* Metric 1 */}
        <div className="metric text-center">
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#fffff7] to-[#fffff7]/[0.34] text-[65px] font-normal">
            45+
          </p>
          <p className="text-gray-400 text-[20px] mt-2">Happy customers</p>
        </div>

        {/* Vertical Separator */}
        <div className="hidden md:block w-px h-16 bg-gray-800"></div>

        {/* Metric 2 */}
        <div className="metric text-center">
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#fffff7] to-[#fffff7]/[0.34] text-[65px] font-normal">
            5k+
          </p>
          <p className="text-gray-400 text-[20px] mt-2">Hours spent on craft</p>
        </div>

        {/* Vertical Separator */}
        <div className="hidden md:block w-px h-16 bg-gray-800"></div>

        {/* Metric 3 */}
        <div className="metric text-center">
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#fffff7] to-[#fffff7]/[0.34] text-[65px] font-normal">
            4.8
          </p>
          <p className="text-gray-400 text-[20px] mt-2">Review rate</p>
        </div>
      </div>
    </section>
  );
};

export default Metrics;
