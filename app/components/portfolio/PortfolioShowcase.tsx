"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button"; 
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const projects = [
  {
    title: "Brainwave",
    description: "Stylish landing page",
    image: "/images/projects/brainwave.webp",
    link: "https://brainwave-fawn.vercel.app/",
    category: "Web Development",
    categoryId: "1",
  },
  // Add more projects as needed
];

const filters = [
  "All",
  "3D Services",
  "App Development",
  "Web Development",
  "AI Services",
  "Vector & Raster Designing",
  "Video Making & Editing",
  "AR/VR Solutions",
  "VFX",
  "Branding",
  "Digital Marketing",
];

const PortfolioShowcase = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [showMore, setShowMore] = useState(false);

  const filteredProjects =
    selectedFilter === "All"
      ? projects
      : projects.filter((project) => project.category === selectedFilter);

  const displayedProjects = showMore ? filteredProjects : filteredProjects.slice(0, 6);

  return (
    <section className="bg-black text-white py-16 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="bg-darkGray text-lightGreen px-4 py-2 rounded-full text-sm font-semibold inline-block">
            Projects
          </span>
          <h2 className="mt-4 text-4xl font-bold bg-clip-text white-gradient">
            Our Project Showcase
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Explore our diverse range of projects showcasing innovation,
            creativity, and excellence across various industries and disciplines.
          </p>
        </div>

        {/* Filter Section */}
        <div className="flex justify-end mb-8">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="flex items-center space-x-2 bg-lightGreen text-black px-6 py-3 rounded-full font-medium hover:bg-green-500">
                <span>Filter Projects</span>
                <Image src="/images/dropdown-icon.svg" alt="Filter Icon" width={16} height={16} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-gray-800 text-white rounded-lg shadow-lg mt-2">
              {filters.map((filter, index) => (
                <DropdownMenuItem
                  key={index}
                  onClick={() => setSelectedFilter(filter)}
                  className={`cursor-pointer px-4 py-2 hover:bg-gray-700 rounded-md ${
                    selectedFilter === filter ? "bg-gray-700" : ""
                  }`}
                >
                  {filter}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-gray-900 to-black border border-gray-700 rounded-lg shadow-lg"
            >
              <div className="relative w-full h-56 rounded-t-lg overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              <div className="p-4">
                {/* Title and Open Button */}
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold leading-[150%]">{project.title}</h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-full flex items-center space-x-2"
                  >
                    <span>Open</span>
                    <Image
                      src="/images/arrow.svg"
                      alt="Open Icon"
                      width={20}
                      height={20}
                    />
                  </a>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-[150%]">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {filteredProjects.length > 6 && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowMore(!showMore)}
              className="bg-lightGreen text-black px-6 py-3 rounded-full font-medium hover:bg-green-500"
            >
              {showMore ? "Show Less" : "Explore Projects"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioShowcase;
