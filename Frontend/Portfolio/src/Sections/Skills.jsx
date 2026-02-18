import React from "react";
import { FaReact, FaGithub, FaPython, FaCode } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiMysql } from "react-icons/di";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    { icon: <FaReact size={40} />, name: "React" },
    { icon: <FaPython size={40} />, name: "Python" },
    { icon: <FaGithub size={40} />, name: "GitHub" },
    { icon: <RiTailwindCssFill size={40} />, name: "Tailwind CSS" },
    { icon: <DiMysql size={40} />, name: "MySQL" },
    { icon: <FaCode size={40} />, name: "C" },
    { icon: <FaCode size={40} />, name: "C++" },
  ];

  return (
    <section
      id="skills"
      className="relative min-h-screen w-full flex flex-col items-center justify-center bg-black text-white overflow-hidden px-4"
    >
      {/* Background animated circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[250px] h-[250px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-20 blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-0 w-[250px] h-[250px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-20 blur-[100px] animate-pulse delay-500" />
      </div>

      {/* Heading */}
      <motion.h2
        className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] z-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Skills
      </motion.h2>

      {/* Subheading */}
      <motion.p
        className="mt-3 mb-10 text-white/80 text-base sm:text-lg z-10"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Modern Applications | Modern Technologies
      </motion.p>

      {/* Skills Grid */}
      <div className="z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center gap-3 p-6 bg-white/10 backdrop-blur-md rounded-2xl hover:bg-white/20 transition-all"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            {skill.icon}
            <span className="text-sm sm:text-base">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
