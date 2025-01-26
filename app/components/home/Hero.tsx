"use client";

import React, { useEffect } from "react";
import "./HeroSection.css";

const HeroSection: React.FC = () => {
  useEffect(() => {
    const canvas = document.getElementById(
      "bubbleCanvas"
    ) as HTMLCanvasElement | null;

    const container = document.querySelector(".bubble-container") as HTMLElement | null;

    if (canvas && container) {
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const particles: {
        x: number;
        y: number;
        radius: number;
        color: string;
        speedX: number;
        speedY: number;
      }[] = [];

      const colors = ["#FFFFFF", "#A0A0FF", "#FFC0CB"];

      // Resize canvas to match the container
      const resizeCanvas = () => {
        const { width, height } = container.getBoundingClientRect();
        canvas.width = width;
        canvas.height = height;
      };

      resizeCanvas();
      window.addEventListener("resize", resizeCanvas);

      const createParticle = (startInside: boolean) => ({
        x: Math.random() * canvas.width,
        y: startInside
          ? Math.random() * canvas.height // Start within the visible area
          : canvas.height + Math.random() * 50, // Start below for new bubbles
        radius: Math.random() * 1.5 + 0.5, // Tiny bubbles
        color: colors[Math.floor(Math.random() * colors.length)],
        speedX: Math.random() * 0.2 - 0.1, // Subtle horizontal drift
        speedY: -(Math.random() * 0.3 + 0.2), // Move upward
      });

      for (let i = 0; i < 300; i++) {
        // Increase the number of particles
        particles.push(createParticle(true)); // Start all particles inside the visible area
      }

      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach((particle) => {
          particle.x += particle.speedX;
          particle.y += particle.speedY;

          // Reset particle position when it moves out of the container
          if (particle.y < 0) {
            particle.y = canvas.height + Math.random() * 50;
            particle.x = Math.random() * canvas.width;
          }

          // Draw particle
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
          ctx.fillStyle = particle.color;
          ctx.fill();
        });

        requestAnimationFrame(animate);
      };

      animate();

      return () => {
        window.removeEventListener("resize", resizeCanvas);
      };
    }
  }, []);

  return (
    <section className="relative bg-hero-pattern text-white min-h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Bubble Canvas */}
      <div className="bubble-container absolute inset-0 z-0">
        <canvas id="bubbleCanvas" className="bubble-canvas"></canvas>
      </div>

      {/* Hero Content */}
      <div className="text-center max-w-4xl mx-auto px-4 relative z-10">
        <h1
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-4 framer-text"
          data-text-fill="true"
        >
          Where the world
          <br />
          builds software
        </h1>
        <p className="text-gray-400 text-base sm:text-lg md:text-xl lg:text-2xl pt-6">
          Empowering ideas, crafting innovations where creativity meets
          technology.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
