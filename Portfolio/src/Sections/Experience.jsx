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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section id="experience" className="bg-black text-white py-24 px-6">
      <h2 className="text-4xl sm:text-5xl font-semibold mb-20 text-center bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
        Experience
      </h2>

      {/* Desktop Layout */}
      {!isMobile && (
        <div className="relative max-w-6xl mx-auto flex justify-between items-start">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className={`${
                idx % 2 === 0 ? "mt-6" : "mt-20"
              } bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-8 w-[320px] shadow-[0_0_40px_rgba(99,102,241,0.15)] hover:shadow-[0_0_60px_rgba(168,85,247,0.3)] transition-all duration-300`}
            >
              <span className="text-sm text-indigo-400 font-semibold">
                {exp.duration}
              </span>
              <h3 className="text-xl font-bold mt-3 mb-2 text-white">
                {exp.role}
              </h3>
              <p className="text-indigo-300 text-sm mb-4 font-medium">
                {exp.company}
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Mobile Layout */}
      {isMobile && (
        <div className="relative max-w-md mx-auto flex flex-col gap-16">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-6 shadow-[0_0_40px_rgba(99,102,241,0.15)]"
            >
              <span className="text-xs text-indigo-400 font-semibold">
                {exp.duration}
              </span>
              <h3 className="text-lg font-bold mt-2 text-white">{exp.role}</h3>
              <p className="text-indigo-300 text-sm mb-3 font-medium">
                {exp.company}
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
