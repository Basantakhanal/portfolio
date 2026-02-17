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

  /* ✅ Projects Data */
  const projects = useMemo(
    () => [
     
      {
        title: "Route Hive",
        link: "https://github.com/Basantakhanal/Route-Hive",
        image: photo4,
      },
      {
        title: "CuraMind",
        link: "https://github.com/Basantakhanal/CURAMIND",
        image: cura,
      },
       {
        title: "Faculty Management System",
        link: "https://github.com/Basantakhanal/Qt-project",
        image: FMS1,
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

        {/* ✅ Project Image Container */}
        <div className="relative flex-1 flex items-center justify-center w-full max-w-5xl mx-auto px-4">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className={`absolute top-1/2 left-1/2 
                -translate-x-1/2 -translate-y-1/2 
                transition-all duration-500 ${
                  activeIndex === idx
                    ? "opacity-100 z-20 scale-100"
                    : "opacity-0 z-0 scale-95"
                }`}
              style={{
                width: "90%", // ✅ Same for all projects
                maxWidth: "1000px",
              }}
            >
              {/* ✅ Animated Title */}
              <AnimatePresence mode="wait">
                {activeIndex === idx && (
                  <motion.h3
                    key={project.title}
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    transition={{ duration: 0.5 }}
                    className="block text-center 
                      text-[clamp(1.2rem,4vw,3rem)] 
                      text-white/95 
                      sm:absolute sm:-top-16 sm:left-0 
                      italic font-bold drop-shadow-xl"
                  >
                    {project.title}
                  </motion.h3>
                )}
              </AnimatePresence>

              {/* ✅ Image Card */}
              <div
                className="relative w-full flex items-center justify-center 
                overflow-hidden shadow-2xl 
                md:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.7)] 
                rounded-2xl bg-white/10 backdrop-blur-md p-4
                border border-white/20 hover:border-white/40 transition-all"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-contain 
                  transition-transform duration-500 hover:scale-105"
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
