"use client";

import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Introduction = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#introduction", // Target the section
        start: "top 80%", // Trigger when the top of the section reaches 80% of the viewport
        end: "bottom 50%", // End when the section bottom reaches 50% of the viewport
        toggleActions: "play none none none", // Play animation on enter, no action on leave
      },
    });

    // Badge Animation
    tl.fromTo(
      ".introduction-badge",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1 }
    );

    // Heading and Description Animation
    tl.fromTo(
      ".introduction-heading",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 },
      "-=0.5" // Overlap animation by 0.5s
    );
  }, []);

  return (
    <section
      id="introduction"
      className="bg-black py-16 px-8 flex flex-col items-center"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div
          className="flex items-center justify-center gap-2 mb-4 introduction-badge"
        >
          <p className="text-sm font-semibold text-lightGreen uppercase tracking-wide">
            Introducing Zyypher
          </p>
        </div>
        <div className="mt-6 introduction-heading">
          <h2 className="text-3xl md:text-4xl text-white font-normal !leading-[3rem]">
            We get it!{" "}
            <span className="text-gray-400">
              You need innovative solutions to thrive in the tech world, but
              building an in-house team can be expensive and time-consuming.
            </span>{" "}
            <br />
            <span className="text-white">That’s where Zyypher steps in.</span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
