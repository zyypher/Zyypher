"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const testimonials = [
  {
    title: "Outstanding Service!",
    feedback:
      "Working with Gulbahar Tobacco's GTI Dashboard has been a remarkable experience. The interface is intuitive, and the design has boosted productivity across all departments.",
    name: "Slavomir",
    role: "Project Lead, Gulbahar Tobacco",
    image: "/images/slavomir.jpg",
  },
  {
    title: "Professional Execution!",
    feedback:
      "The RMK Experts Website exceeded our expectations. The project was delivered on time with impeccable attention to detail.",
    name: "Ghada",
    role: "CEO, RMK Experts",
    image: "/images/ghada.jpg",
  },
  {
    title: "Creative Approach!",
    feedback:
      "Abuhaliqa's social media presence has significantly improved thanks to their innovative ideas and consistent support.",
    name: "Shefeeq",
    role: "Marketing Manager, Abuhaliqa Abaya",
    image: "/images/shefeeq.jpg",
  },
  {
    title: "Top-tier Web Solutions!",
    feedback:
      "JAS Advertising's new website has transformed how we connect with clients in Saudi Arabia. Highly satisfied with the service provided.",
    name: "Anas",
    role: "Director, JAS Advertising",
    image: "/images/anas.jpg",
  },
  {
    title: "Reliable Partner!",
    feedback:
      "The collaboration on the Ztoiq project has been smooth and productive. Their expertise helped us launch our product faster than expected.",
    name: "Aminta",
    role: "Product Manager, Ztoiq",
    image: "/images/aminta.jpg",
  },
  {
    title: "Exceptional Work!",
    feedback:
      "The team provided us with unparalleled creativity and technical expertise, helping us achieve our vision with ease and professionalism.",
    name: "Alex Johnson",
    role: "Founder, Venture Edge",
    image: "/images/alex.jpg",
  },
];

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    
    const cards = sectionRef.current.querySelectorAll(".testimonial-card");

    // Applying GSAP animation to each card
    gsap.fromTo(
      cards,
      {
        opacity: 0,
        y: 30, // Starts slightly below the final position
        scale: 0.9, // Slightly scaled down to avoid blur
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
        clearProps: "all", // Clears animation properties to prevent rendering blur issues
      }
    );
  }, []);

  return (
    <section
      id="testimonials"
      className="bg-black text-white py-16 px-6"
      ref={sectionRef}
    >
      <div className="text-center mb-10">
        <span className="bg-darkGray text-lightGreen px-4 py-2 rounded-full text-sm font-semibold inline-block">
          Testimonials
        </span>
        <h2 className="text-4xl font-bold mt-4 white-gradient">What our Clients say About Us</h2>
        <p className="text-gray-400 mt-2 max-w-xl mx-auto">
          Read testimonials from satisfied clients, sharing their experiences and successes with our services and solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="testimonial-card flex flex-col justify-between p-6 bg-gradient-to-b from-gray-900 to-black border border-gray-700 rounded-lg shadow-lg space-y-4"
          >
            <h3 className="text-xl font-semibold text-lightGreen">{testimonial.title}</h3>
            <p className="text-gray-400">{testimonial.feedback}</p>
            <div className="flex items-center space-x-4 mt-4">
              {/* <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover"
              /> */}
              <div>
                <p className="font-medium">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
