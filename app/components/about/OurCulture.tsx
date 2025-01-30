"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const culturePoints = [
  {
    title: "Diversity & Inclusion",
    icon: "/images/expertise2.svg",
    description:
      "Fostering innovation, collaboration, and diversity to empower our team members.",
  },
  {
    title: "Work-Life Balance",
    icon: "/images/expertise3.svg",
    description:
      "We prioritize work-life balance, offering flexibility to ensure our team members are happy and healthy.",
  },
  {
    title: "Empowerment",
    icon: "/images/expertise4.svg",
    description:
      "We empower our team members to take ownership of their work and support them in their journey.",
  },
  {
    title: "Teamwork",
    icon: "/images/expertise2.svg",
    description:
      "We emphasize teamwork and open communication, believing that great work is achieved together.",
  },
];

const OurCulture = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const pointsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Animate section elements
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    // Animate each point with staggered effect
    gsap.fromTo(
      pointsRef.current.filter(Boolean), // Filter out null values for safety
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.5,
      }
    );
  }, []);

  return (
    <section
      id="our-culture"
      className="text-white py-16 px-10"
      ref={sectionRef}
    >
      <div className="text-center mb-12">
        <span className="bg-darkGray text-lightGreen px-4 py-2 rounded-full text-sm font-semibold">
          Our Culture
        </span>
        <h2 className="text-4xl font-bold mt-6 white-gradient">Our Culture, Empowering Excellence</h2>
        <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
          Experience a culture that values innovation, collaboration, and diversity. We empower our team to excel, fostering a dynamic environment where creativity thrives.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-start">
        {/* Image Section */}
        <div className="lg:col-span-1 rounded-lg overflow-hidden">
          <img
            src="/images/about-image.avif"
            alt="Our Culture"
            className="w-full h-72 object-cover"
          />
        </div>

        {/* Points Section */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-12 relative">
          {culturePoints.map((point, index) => (
            <div
              key={index}
              className="flex items-start gap-4 space-y-2"
              ref={el => {
                pointsRef.current[index] = el;
              }}
            >
              <img src={point.icon} alt={point.title} className="w-10 h-10" />
              <div>
                <h3 className="text-lg font-semibold">{point.title}</h3>
                <p className="text-gray-400 mt-1">{point.description}</p>
              </div>
            </div>
          ))}

          {/* Horizontal Dotted Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full border-dotted border-t border-gray-500 transform -translate-y-1/2"></div>
          {/* Vertical Dotted Lines */}
          <div className="hidden md:block absolute top-0 left-[50%] h-full border-dotted border-r border-gray-500"></div>
        </div>
      </div>
    </section>
  );
};

export default OurCulture;
