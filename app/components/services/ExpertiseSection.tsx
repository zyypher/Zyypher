"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ExpertiseSection = () => {
  const [showAll, setShowAll] = useState(false);

  const services = [
    {
      title: "3D Services",
      icon: "/images/expertise3.svg",
      description:
        "Transform your ideas into stunning 3D visualizations. From modeling to rendering, we bring your concepts to life.",
    },
    {
      title: "App Development",
      icon: "/images/expertise4.svg",
      description:
        "Custom-built apps tailored to your needs. Enhance your business operations with user-friendly mobile solutions.",
    },
    {
      title: "Website Development",
      icon: "/images/expertise2.svg",
      description:
        "Professional website development that guarantees high performance, scalability, and seamless user experience.",
    },
    {
      title: "Mobile App Development",
      icon: "/images/expertise3.svg",
      description:
        "We specialize in creating innovative mobile apps that are engaging, intuitive, and scalable across all platforms.",
    },
    {
      title: "Vector & Raster Designing",
      icon: "/images/expertise4.svg",
      description:
        "High-quality vector and raster graphics designed for all your branding and marketing needs.",
    },
    {
      title: "Video Making & Editing",
      icon: "/images/expertise2.svg",
      description:
        "Compelling videos edited to perfection. We help you tell your story with captivating visuals and sound.",
    },
    {
      title: "AR/VR Solutions",
      icon: "/images/expertise3.svg",
      description:
        "Revolutionize user experiences with augmented and virtual reality solutions for your business.",
    },
    {
      title: "VFX & Visual Effects",
      icon: "/images/expertise4.svg",
      description:
        "Elevate your media content with cutting-edge visual effects that captivate and engage your audience.",
    },
    {
      title: "Branding",
      icon: "/images/expertise2.svg",
      description:
        "Create a unique and memorable brand identity. From logos to packaging, we make your brand stand out.",
    },
    {
      title: "Digital Marketing",
      icon: "/images/expertise3.svg",
      description:
        "Boost your online presence with tailored digital marketing strategies that drive traffic and conversions.",
    },
    {
      title: "Social Media Marketing",
      icon: "/images/expertise4.svg",
      description:
        "Reach your target audience and grow your online community with our expert social media services.",
    },
    {
      title: "Digital Painting",
      icon: "/images/expertise2.svg",
      description:
        "Creative digital paintings crafted to perfection. Perfect for marketing, branding, and personal projects.",
    },
  ];

  const visibleServices = showAll ? services : services.slice(0, 6);

  useEffect(() => {
    // GSAP Animation for section
    gsap.fromTo(
      ".expertise-heading",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: "#expertise-section",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // GSAP Animation for cards
    gsap.fromTo(
      ".expertise-card",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".expertise-cards",
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section id="expertise-section" className="bg-black text-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center space-y-6">
        {/* Section Badge */}
        <div className="inline-flex items-center bg-lightGreen px-4 py-1.5 rounded-full text-black text-sm font-medium expertise-heading">
          <Image
            src="/images/expertise1.svg"
            alt="Expertise Icon"
            width={20}
            height={20}
            className="mr-2"
          />
          Expertise
        </div>

        {/* Heading */}
        <h2 className="expertise-heading white-gradient text-4xl font-normal">
          Our Range of Expertise
        </h2>

        {/* Subheading */}
        <p className="expertise-heading text-gray-400 text-[19px] mt-2">
          Dive into our diverse range of categories to find the perfect
          solutions for your business needs. Whether you're looking for web
          design, SEO, or branding, we've got you covered.
        </p>
      </div>

      {/* Cards Section */}
      <div className="expertise-cards max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {visibleServices.map((service, index) => (
          <div
            key={index}
            className="expertise-card bg-black/80 rounded-lg p-6 shadow-lg text-center space-y-4 border border-gray-700"
          >
            <div className="flex items-center justify-center">
              <Image
                src={service.icon}
                alt={`${service.title} Icon`}
                width={32}
                height={32}
              />
            </div>
            <h3 className="text-2xl font-semibold text-gray-300">
              {service.title}
            </h3>
            <p className="text-gray-400">{service.description}</p>
            <button className="inline-block bg-black text-white font-medium rounded-full px-6 py-2 border border-gray-600 hover:bg-gray-800 transition">
              Get in Touch →
            </button>
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

export default ExpertiseSection;
