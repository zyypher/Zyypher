"use client";

import React from "react";

const teamMembers = [
  {
    name: "Vishnu Vinayan",
    designation: "Chief Technology Officer",
    image: "/images/vishnu-image.jpeg",
    linkedin: "https://linkedin.com/in/vishnuvinayan",
  },
  {
    name: "Vinu Vinayan",
    designation: "Chief Executive Officer",
    image: "/images/vinu-image.jpeg",
    linkedin: "https://linkedin.com/in/vinuvinayan",
  },
  {
    name: "Ajanya P Kumar",
    designation: "Creative Director",
    image: "/images/ajanya-image.jpg",
    linkedin: "https://linkedin.com/in/ajanya-kumar",
  },
  {
    name: "Gopika M Nair",
    designation: "Director of Content Strategy",
    image: "/images/gopika-image.jpg",
    linkedin: "https://linkedin.com/in/gopika-nair",
  },
];

const TeamMembers = () => {
  return (
    <section id="team-members" className="bg-black text-white py-16 px-8">
      <div className="text-center mb-12">
        <span className="bg-darkGray text-lightGreen px-4 py-1.5 rounded-full text-sm font-semibold inline-block ">
          Team Members
        </span>
        <h2 className=" mt-4  bg-clip-text white-gradient text-4xl font-normal">Awesome Team Members</h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          We are a dedicated group of individuals driven by our shared vision of making a real difference in the world.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="team-card bg-gradient-to-b from-gray-900 to-black border border-gray-700 rounded-lg overflow-hidden shadow-lg"
          >
            <div className="relative">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-56 object-cover"
              />
            </div>
            <div className="flex items-center justify-between p-4">
              <div>
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-gray-400 text-sm">{member.designation}</p>
              </div>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-600"
              >
                <img
                  src="/images/x-logo.svg"
                  alt="LinkedIn"
                  className="w-4 h-4"
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamMembers;
