import React, { useEffect, useState, useRef, useMemo } from "react";

import fi from "../assets/fi.jpg";

import photo4 from "../assets/photo4.png";
import cura from "../assets/cura.png";
import FMS1 from "../assets/FMS1.png";

import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

/* ✅ Mobile Screen Hook */
const useIsMobile = (breakpoint = 639) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.innerWidth <= breakpoint);
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, [breakpoint]);

  return isMobile;
};

export default function Projects() {
  const isMobile = useIsMobile();
  const sceneRef = useRef(null);

  /* ✅ Projects Data with Descriptions */
  const projects = useMemo(
    () => [
      {
        title: "Route Hive",
        link: "https://github.com/Basantakhanal/Route-Hive",
        image: photo4,
        description:
          "Route Hive is a smart transportation app that integrates real-time route mapping for school buses, optimizing driver and student management.",
      },
      {
        title: "CuraMind",
        link: "https://github.com/Basantakhanal/CURAMIND",
        image: cura,
        description:
          "CuraMind is a mental health management platform that provides users with tools to track mood, access resources, and maintain wellbeing effectively.",
      },
      {
        title: "Faculty Management System",
        link: "https://github.com/Basantakhanal/Qt-project",
        image: FMS1,
        description:
          "A comprehensive system to manage faculty information, schedules, and performance, simplifying administration for educational institutions.",
      },
    ],
    []
  );

  /* ✅ Scroll Animation Setup */
  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ["start start", "end end"],
  });

  const thresholds = projects.map((_, i) => (i + 1) / projects.length);
  const [activeIndex, setActiveIndex] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = thresholds.findIndex((t) => v <= t);
    setActiveIndex(idx === -1 ? thresholds.length - 1 : idx);
  });

  const activeProject = projects[activeIndex];

  return (
    <section
      id="projects"
      ref={sceneRef}
      className="relative text-white"
      style={{
        height: `${100 * projects.length}vh`,
        backgroundImage: `url(${fi})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center">
        {/* 🔥 Attractive Heading */}
        <h2
          className="text-4xl sm:text-5xl font-extrabold z-10 text-center mt-8 
          bg-gradient-to-r from-white via-gray-200 to-white 
          text-transparent bg-clip-text drop-shadow-lg"
        >
          My Projects 🚀
        </h2>

        {/* ✅ Project Image + Description Container */}
        <div className="relative flex-1 flex items-center justify-center w-full max-w-7xl mx-auto px-4">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className={`absolute top-1/2 left-1/2 
                -translate-x-1/2 -translate-y-1/2 
                transition-all duration-500 flex ${
                  activeIndex === idx
                    ? "opacity-100 z-20 scale-100"
                    : "opacity-0 z-0 scale-95"
                } flex-col md:flex-row md:items-center md:gap-10`}
              style={{
                width: "95%",
                maxWidth: "1300px",
              }}
            >
              {/* ✅ Glowy Description Container (NOW VISIBLE ON MOBILE ALSO) */}
              <AnimatePresence mode="wait">
                {activeIndex === idx && (
                  <motion.div
                    key={project.title + "-desc-container"}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col justify-center w-full md:max-w-xs p-5 mb-6 md:mb-0
                      bg-gradient-to-br from-white/90 to-white/70
                      border border-white/50 rounded-2xl
                      shadow-[0_0_25px_rgba(255,255,255,0.6),0_0_40px_rgba(0,0,0,0.2)]
                      backdrop-blur-md"
                  >
                    <h3 className="text-2xl md:text-3xl font-bold mb-3 text-black drop-shadow-lg text-center md:text-left">
                      {project.title}
                    </h3>
                    <p className="text-black/90 text-base md:text-lg text-center md:text-left">
                      {project.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* ✅ Image Card */}
              <div
                className="relative w-full md:w-3/4 flex items-center justify-center 
                  overflow-hidden shadow-2xl 
                  md:shadow-[0_60px_120px_-30px_rgba(0,0,0,0.75)] 
                  rounded-3xl bg-white/10 backdrop-blur-md p-6
                  border border-white/20 hover:border-white/40 transition-all"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-contain transition-transform duration-500 hover:scale-110"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

        {/* ✅ Button */}
        <div className="absolute bottom-10">
          <a
            href={activeProject?.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 font-bold rounded-xl 
            bg-gradient-to-r from-white to-gray-200 text-black 
            hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            View Project 🔗
          </a>
        </div>
      </div>
    </section>
  );
}
