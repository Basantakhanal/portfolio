import { useEffect, useState } from "react";

const experiences = [
  {
    role: "Web Developer & Backend Developer",
    company: "Faculty Management System",
    duration: "2024",
    description:
      "Developed a desktop-based Faculty Management System using Qt. Implemented backend logic, authentication, and database integration with a clean and user-friendly interface.",
  },
  {
    role: "Web Developer",
    company: "Route Hive",
    duration: "2025",
    description:
      "Built a modern web application with responsive UI, optimized routing features, and seamless user interaction for enhanced performance.",
  },
  {
    role: "Web Developer",
    company: "CuraMind",
    duration: "2026",
    description:
      "Developed a scalable web application with clean UI components, smooth animations, and structured backend connectivity.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-gradient-to-br 
      from-[#0f172a] via-[#0b1b3a] to-[#020617] 
      text-white py-20 sm:py-24 px-4 sm:px-6"
    >
      <h2
        className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-16 sm:mb-20 text-center 
        bg-gradient-to-r from-indigo-400 to-purple-400 
        bg-clip-text text-transparent"
      >
        Experience
      </h2>

      <div
        className="
        max-w-7xl mx-auto
        flex flex-col
        md:flex-row
        md:justify-between
        items-center md:items-start
        gap-10 md:gap-0
      "
      >
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className={`
              bg-[#111827] 
              border border-white/10 
              rounded-2xl 
              p-6 sm:p-8 md:p-10
              w-full
              md:w-[360px]
              lg:w-[380px]
              shadow-[0_15px_40px_rgba(0,0,0,0.6)]
              hover:shadow-[0_25px_70px_rgba(0,0,0,0.8)]
              transition-all duration-300
              ${idx % 2 === 0 ? "md:mt-6" : "md:mt-20"}
            `}
          >
            <span className="text-sm sm:text-base text-indigo-400 font-semibold">
              {exp.duration}
            </span>

            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mt-3 sm:mt-4 mb-2 sm:mb-3 text-white">
              {exp.role}
            </h3>

            <p className="text-indigo-300 text-sm sm:text-base mb-3 sm:mb-5 font-medium">
              {exp.company}
            </p>

            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}