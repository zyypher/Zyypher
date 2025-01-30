"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    title: "Mission",
    icon: "/images/expertise2.svg",
    description: "To empower businesses with innovative digital solutions, fostering growth and success in an ever-evolving digital landscape.",
  },
  {
    title: "Vision",
    icon: "/images/expertise3.svg",
    description: "To be a leading global agency, recognized for our transformative impact, creative excellence, and client-centric approach.",
  },
  {
    title: "Collaboration",
    icon: "/images/expertise4.svg",
    description: "We believe that great work is the result of collaboration between our team and our clients.",
  },
  {
    title: "Innovation",
    icon: "/images/expertise2.svg",
    description: "We are committed to staying at the forefront of innovation in the ever-evolving digital space.",
  },
  {
    title: "Integrity",
    icon: "/images/expertise3.svg",
    description: "We uphold the highest standards of integrity and professionalism in everything we do.",
  },
  {
    title: "Result Driven",
    icon: "/images/expertise4.svg",
    description: "We are dedicated to delivering tangible results that help our clients achieve their goals.",
  },
];

const MissionAndValues = () => {
  useEffect(() => {
    gsap.fromTo(
      ".value-card",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power4.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#mission-values",
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section id="mission-values" className="bg-black text-white py-16 px-8">
      <div className="text-center mb-12">
        <span className="bg-darkGray text-lightGreen px-4 py-1.5 rounded-full text-sm font-semibold inline-block">
          Features
        </span>
        <h2 className="text-4xl font-bold mt-4 white-gradient">Our Mission & Values</h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          We are committed to building strong relationships with our customers,
          partners, and employees, rooted in trust and mutual respect.
        </p>
      </div>

      {/* First row: Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-8">
        {values.slice(0, 2).map((value, index) => (
          <div
            key={index}
            className="value-card bg-gradient-to-b from-gray-900 to-black border border-gray-700 rounded-lg p-6 text-center shadow-md"
          >
            <div className="flex justify-center mb-4">
              <img src={value.icon} alt={value.title} className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
            <p className="text-gray-400">{value.description}</p>
          </div>
        ))}
      </div>

      {/* Second row: Other values */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {values.slice(2).map((value, index) => (
          <div
            key={index}
            className="value-card bg-gradient-to-b from-gray-900 to-black border border-gray-700 rounded-lg p-6 text-center shadow-md"
          >
            <div className="flex justify-center mb-4">
              <img src={value.icon} alt={value.title} className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
            <p className="text-gray-400">{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MissionAndValues;
