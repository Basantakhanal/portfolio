import React, { useMemo } from "react";
import photo4 from "../assets/photo4.png";
import cura from "../assets/cura.png";
import FMS1 from "../assets/FMS1.png";

export default function Projects() {
  const projects = useMemo(
    () => [
      {
        title: "Route Hive",
        link: "https://github.com/Basantakhanal/Route-Hive",
        image: photo4,
        description:
          "Route Hive is a smart transportation app that integrates real-time route mapping for school buses, optimizing driver and student management.",
        tech: ["Python (Flask)", "React"],
      },
      {
        title: "CuraMind",
        link: "https://github.com/Basantakhanal/CURAMIND",
        image: cura,
        description:
          "CuraMind is a mental health management platform that provides users with tools to track mood, access resources, and maintain wellbeing effectively.",
        tech: ["Python (Flask)", "React"],
      },
      {
        title: "Faculty Management System",
        link: "https://github.com/Basantakhanal/Qt-project",
        image: FMS1,
        description:
          "A comprehensive system to manage faculty information, schedules, and performance, simplifying administration for educational institutions.",
        tech: ["Qt", "C++"],
      },
      
    ],
    []
  );

  const techColors = {
    "Python (Flask)": "bg-green-600/20 text-green-400 border-green-500/40",
    React: "bg-blue-600/20 text-blue-400 border-blue-500/40",
    Qt: "bg-purple-600/20 text-purple-400 border-purple-500/40",
    "C++": "bg-yellow-500/20 text-yellow-400 border-yellow-500/40",
  };

  return (
    <section id="projects"
      className="min-h-screen py-24 px-6 
      bg-gradient-to-br 
      from-[#0f172a] via-[#0b1b3a] to-[#020617]"
    >
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white text-center">
        My Projects 🚀
      </h2>

      {/* Grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
        gap-10 w-full max-w-6xl mx-auto"
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#111827] 
            border border-white/10 
            rounded-2xl 
            shadow-[0_15px_40px_rgba(0,0,0,0.6)]
            hover:shadow-[0_25px_70px_rgba(0,0,0,0.8)]
            hover:-translate-y-2
            transition-all duration-300"
          >
            {/* Image (Full Image No Crop) */}
            <div className="w-full flex justify-center items-center p-4 bg-black/20 rounded-t-2xl">
              <img
                src={project.image}
                alt={project.title}
                className="max-h-56 w-auto object-contain"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-3">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm mb-5 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className={`text-xs px-3 py-1 rounded-full border ${techColors[tech]}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Button */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm font-medium 
                text-blue-400 hover:text-blue-300 transition"
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}