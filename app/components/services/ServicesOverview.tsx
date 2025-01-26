"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ServicesOverview = () => {
  const [showAll, setShowAll] = useState(false);

  const services = [
    {
      title: "Design & Development",
      icon: "/images/expertise2.svg",
      description:
        "Crafting custom websites tailored to your needs. Contact us for innovative online solutions.",
      subServices: [
        { title: "Custom Web Design", icon: "/images/expertise2.svg" },
        { title: "Web Development", icon: "/images/expertise3.svg" },
        { title: "UX Design", icon: "/images/expertise4.svg" },
        { title: "Web Analytics", icon: "/images/expertise2.svg" },
        { title: "App Development", icon: "/images/expertise3.svg" },
        { title: "CMS Development", icon: "/images/expertise4.svg" },
      ],
    },
    {
      title: "Branding & Identity",
      icon: "/images/expertise3.svg",
      description:
        "Create a standout brand identity. Let’s craft your brand story together. Contact us today.",
      subServices: [
        { title: "Logo Design", icon: "/images/expertise2.svg" },
        { title: "Brand Strategy", icon: "/images/expertise3.svg" },
        { title: "Visual Identity", icon: "/images/expertise4.svg" },
        { title: "Print Design", icon: "/images/expertise2.svg" },
        { title: "Digital Branding", icon: "/images/expertise3.svg" },
        { title: "Brand Guidelines", icon: "/images/expertise4.svg" },
      ],
    },
    {
      title: "Digital Marketing",
      icon: "/images/expertise4.svg",
      description:
        "Boost your online presence and reach your audience with our comprehensive digital marketing services.",
      subServices: [
        { title: "SEO Optimization", icon: "/images/expertise2.svg" },
        { title: "Content Marketing", icon: "/images/expertise3.svg" },
        { title: "Social Media Marketing", icon: "/images/expertise4.svg" },
        { title: "Email Campaigns", icon: "/images/expertise2.svg" },
        { title: "Pay-Per-Click (PPC)", icon: "/images/expertise3.svg" },
        { title: "Marketing Analytics", icon: "/images/expertise4.svg" },
      ],
    },
    {
      title: "3D & Visual Solutions",
      icon: "/images/expertise2.svg",
      description:
        "Bring your ideas to life with our immersive 3D and visual solutions tailored to your needs.",
      subServices: [
        { title: "3D Modeling", icon: "/images/expertise2.svg" },
        { title: "AR/VR Solutions", icon: "/images/expertise3.svg" },
        { title: "VFX & Visual Effects", icon: "/images/expertise4.svg" },
        { title: "3D Rendering", icon: "/images/expertise2.svg" },
        { title: "Virtual Tours", icon: "/images/expertise3.svg" },
        { title: "Simulation Design", icon: "/images/expertise4.svg" },
      ],
    },
    {
      title: "Video Production",
      icon: "/images/expertise3.svg",
      description:
        "Engage your audience with high-quality video production and editing services.",
      subServices: [
        { title: "Video Editing", icon: "/images/expertise2.svg" },
        { title: "Motion Graphics", icon: "/images/expertise3.svg" },
        { title: "Animation Videos", icon: "/images/expertise4.svg" },
        { title: "Promotional Videos", icon: "/images/expertise2.svg" },
        { title: "Corporate Videos", icon: "/images/expertise3.svg" },
        { title: "YouTube Video Editing", icon: "/images/expertise4.svg" },
      ],
    },
    {
      title: "App Development",
      icon: "/images/expertise4.svg",
      description:
        "Develop powerful and user-friendly mobile and web applications tailored to your business.",
      subServices: [
        { title: "Mobile App Development", icon: "/images/expertise2.svg" },
        { title: "Web App Development", icon: "/images/expertise3.svg" },
        { title: "API Development", icon: "/images/expertise4.svg" },
        { title: "Cross-Platform Apps", icon: "/images/expertise2.svg" },
        { title: "Progressive Web Apps", icon: "/images/expertise3.svg" },
        { title: "App Maintenance", icon: "/images/expertise4.svg" },
      ],
    },
  ];

  const visibleServices = showAll ? services : services.slice(0, 2);

  useEffect(() => {
    // GSAP Animation for Heading
    gsap.fromTo(
      ".services-heading",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: "#services-overview",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // GSAP Animation for Cards
    gsap.fromTo(
      ".service-card",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".services-cards",
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section
      id="services-overview"
      className="bg-black text-white py-16 px-4"
    >
      <div className="max-w-5xl mx-auto text-center space-y-6">
        {/* Section Badge */}
        <div className="inline-flex items-center bg-lightGreen px-4 py-1.5 rounded-full text-black text-sm font-medium services-heading">
          <Image
            src="/images/expertise5.svg"
            alt="Service Overview Icon"
            width={20}
            height={20}
            className="mr-2"
          />
          Service Overview
        </div>

        {/* Heading */}
        <h2 className="services-heading text-transparent bg-clip-text bg-gradient-to-r from-[#fffff7] to-[#fffff7]/[0.34] text-4xl font-normal">
          Our Services Overview
        </h2>

        {/* Subheading */}
        <p className="services-heading text-gray-400 text-[19px] mt-2">
          Explore our comprehensive services in digital marketing, web design
          and development, and branding & identity, tailored to elevate your
          online presence and brand identity.
        </p>
      </div>

      {/* Cards Section */}
      <div className="services-cards max-w-5xl mx-auto space-y-12 mt-12">
        {visibleServices.map((service, index) => (
          <div
            key={index}
            className="service-card rounded-lg p-6 shadow-lg border border-gray-700 flex flex-col lg:flex-row gap-6"
          >
            {/* Left Section */}
            <div className="lg:w-1/3 space-y-4 p-6 shadow-md border border-gray-600 relative bg-darkGray">
              <div className="flex items-center space-x-4">
                <Image
                  src={service.icon}
                  alt={`${service.title} Icon`}
                  width={40}
                  height={40}
                />
                <h3 className="text-2xl font-semibold text-gray-300">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-400">{service.description}</p>
              <button className="inline-block bg-black text-white font-medium rounded-full px-6 py-2 border border-gray-600 hover:bg-gray-800 transition">
                Book a Call →
              </button>
              <div className="absolute inset-0 border-dotted border-[rgb(20,20,20)] pointer-events-none"></div>
            </div>

            {/* Right Section */}
            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-8 relative">
              {service.subServices.map((subService, subIndex) => (
                <div
                  key={subIndex}
                  className="flex flex-col items-center justify-center text-left space-y-2 relative h-full"
                >
                  <Image
                    src={subService.icon}
                    alt={subService.title}
                    width={24}
                    height={24}
                    className="flex-shrink-0"
                  />
                  <span className="text-gray-400">{subService.title}</span>
                </div>
              ))}
              {/* Horizontal Dotted Line */}
              <div className="hidden md:block absolute top-1/2 left-0 w-full border-dotted border-t border-gray-500 transform -translate-y-1/2"></div>
              {/* Vertical Dotted Lines */}
              <div className="hidden md:block absolute top-0 left-[33%] h-full border-dotted border-r border-gray-500"></div>
              <div className="hidden md:block absolute top-0 left-[66%] h-full border-dotted border-r border-gray-500"></div>
            </div>
          </div>
        ))}
      </div>

      {/* See More Button */}
      {!showAll && (
        <div className="mt-8 text-center">
          <button
            onClick={() => setShowAll(true)}
            className="bg-lightGreen text-black font-medium rounded-full px-6 py-3 shadow hover:bg-[#b8e234] transition"
          >
            See More →
          </button>
        </div>
      )}
    </section>
  );
};

export default ServicesOverview;
