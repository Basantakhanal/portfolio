import React, { useEffect, useState, useRef, useMemo } from "react";
import img1 from "../assets/img1.JPG";
import img2 from "../assets/img2.JPG";
import img3 from "../assets/img3.JPG";
import photo1 from "../assets/photo1.JPG";
import photo2 from "../assets/photo2.png";
import photo3 from "../assets/photo3.png";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";



const useIsMobile = (breakpoint = 639) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.innerWidth <= breakpoint);
      }
    };

    checkScreenSize(); // Run once on mount

    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, [breakpoint]);

  return isMobile;
};



export default function Projects() {
  const isMobile = useIsMobile();
  const sceneRef = useRef(null);

  const projects = useMemo(
    () => [
      {
        title: ("Faculty Management System"),
        link: "https://github.com/Basantakhanal/Qt-project",
        bgColor: "#0d4d3d",
        image: isMobile ? photo1 : img1,
      },
      {
        title: "Route Hive",
        link: "https://github.com/Basantakhanal/Route-Hive",
        bgColor: "#3884D3",
        image: isMobile ? photo2 : img2,
      },
      {
        title: "CuraMind",
        link: "https://github.com/Basantakhanal/CURAMIND",
        bgColor: "#dc9317",
        image: isMobile ? photo3 : img3,
      },
    ],
    [isMobile]
  );

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
        backgroundColor: activeProject.bgColor,
        transition: "background-color 400ms ease",
      }}
    >
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center">

        <h2
          className={`text-3xl font-semibold z-10 text-center ${
            isMobile ? "mt-4" : "mt-8"
          }`}
        >
          My Work
        </h2>

        {/* Project Display */}
        <div
          className={`relative w-full flex-1 flex items-center justify-center ${
            isMobile ? "-mt-4" : ""
          }`}
        >
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
                activeIndex === idx
                  ? "opacity-100 z-20"
                  : "opacity-0 z-0 sm:z-10"
              }`}
              style={{ width: "85%", maxWidth: "1200px" }}
            >
              {/* Animated Title */}
              <AnimatePresence mode="wait">
                {activeIndex === idx && (
                  <motion.h3
                    key={project.title}
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    transition={{ duration: 0.5 }}
                    className={`block text-center text-[clamp(1.5rem,5vw,3.5rem)] text-white/95 sm:absolute sm:-top-20 sm:left-[35%] lg:left-[-5%] italic font-semibold ${
                      isMobile ? "-mt-24" : ""
                    }`}
                    style={{
                      zIndex: 5,
                      textAlign: isMobile ? "center" : "left",
                    }}
                  >
                    {project.title}
                  </motion.h3>
                )}
              </AnimatePresence>

              {/* Image Card */}
              <div
                className={`relative w-full overflow-hidden bg-black/20 shadow-2xl md:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.7)] ${
                  isMobile
                    ? "mb-6 rounded-lg"
                    : "mb-10 sm:mb-12 rounded-xl"
                } h-[62vh] sm:h-[66vh]`}
                style={{ zIndex: 10 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />

               
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0) 40%)",
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className={`absolute ${isMobile ? "bottom-20" : "bottom-10"}`}>
          <a
            href={activeProject?.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 font-semibold rounded-lg bg-white text-black hover:bg-gray-200 transition-all"
          >
            View Project
          </a>
        </div>

      </div>
    </section>
  );
}
