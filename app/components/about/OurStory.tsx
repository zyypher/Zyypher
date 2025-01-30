"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const OurStory = () => {
  const milestones = [
    {
      year: "2020",
      title: "Conceptualization",
      description:
        "In 2020, the idea for Zyypher was born. Driven by a vision to revolutionize technology services, we began shaping a company that would provide cutting-edge digital solutions to clients worldwide.",
    },
    {
      year: "2023",
      title: "Foundation and Development",
      description:
        "By 2023, we laid the groundwork for Zyypher. We assembled a talented team of developers, designers, and strategists, starting with small projects and steadily gaining trust and recognition in the industry.",
    },
    {
      year: "2025",
      title: "Official Launch",
      description:
        "In 2025, Zyypher officially launched. With a growing client base, we began delivering innovative solutions in app development, 3D services, branding, and digital marketing, setting a new standard for digital excellence.",
    },
  ];

  useEffect(() => {
    // Animate the milestone cards
    gsap.fromTo(
      ".milestone-card",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power4.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#our-story",
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animate the progress line
    gsap.fromTo(
      ".progress-line-filled",
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: "#our-story",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section id="our-story" className="bg-black text-white py-16 px-8">
      {/* Heading */}
      <div className="text-center mb-12">
        <span className="bg-darkGray text-lightGreen px-4 py-1.5 rounded-full text-sm font-semibold inline-block">
          Our Story
        </span>
        <h2 className="text-4xl font-bold mt-4">Over The Years</h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Zyypher has evolved from a small, ambitious team to a globally
          recognized agency redefining digital experiences.
        </p>
      </div>

      {/* Milestones */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {milestones.map((milestone, index) => (
          <div
            key={index}
            className="milestone-card bg-gradient-to-b from-gray-900 to-black border border-gray-700 rounded-lg p-6 text-center shadow-md"
          >
            <p className="text-3xl font-extrabold text-lightGreen mb-4">
              {milestone.year}
            </p>
            <h3 className="text-xl font-semibold mb-4">{milestone.title}</h3>
            <p className="text-gray-400">{milestone.description}</p>
          </div>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="mt-16 flex items-center justify-between w-full max-w-6xl mx-auto relative">
        {milestones.map((_, index) => (
          <React.Fragment key={index}>
            {/* Gray Line */}
            {index === 0 && (
              <div className="h-[2px] bg-gray-800 flex-grow"></div>
            )}
            {/* Dot */}
            <div className="w-3 h-3 bg-lightGreen rounded-full z-10"></div>
            {/* Gray Line */}
            {index < milestones.length - 1 ? (
              <div className="progress-line-wrapper h-[2px] flex-grow bg-gray-500 relative">
                <div className="progress-line-filled absolute inset-0 bg-gray-800 transform scale-x-0 origin-left"></div>
              </div>
            ) : (
              <div className="h-[2px] bg-gray-800 flex-grow"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default OurStory;
