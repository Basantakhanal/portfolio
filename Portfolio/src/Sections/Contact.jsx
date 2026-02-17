import React, { useState } from "react";
import Particles from "react-tsparticles";
import AVG from "../assets/AVG.JPEG";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section
      id="contact"
      className="relative h-screen w-full overflow-hidden bg-black flex items-center"
      style={{
        backgroundImage: `url(${AVG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Particles */}
      <Particles
        options={{
          background: { color: "transparent" },
          fpsLimit: 60,
          particles: {
            color: { value: "#ffffff" },
            move: { enable: true, speed: 0.3 },
            number: { value: 50, density: { enable: true, area: 900 } },
            opacity: { value: 0.3 },
            size: { value: 2, random: true },
          },
        }}
        className="absolute inset-0 -z-10"
      />

      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-6">

        {/* Title */}
        <h1 className="text-white text-3xl md:text-4xl font-bold text-center">
          Contact Me
        </h1>

        {/* Subtitle */}
        <p className="text-gray-300 text-center mt-2 mb-6 text-base md:text-lg">
          Want to collaborate with me?
        </p>

        {!submitted ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="bg-[#0f172a]/90 border border-white/10 rounded-2xl p-6 shadow-2xl backdrop-blur-xl max-w-xl w-full"
          >
            {/* Name */}
            <label className="block mb-3">
              <span className="text-gray-300 text-xs">
                Your Name <span className="text-red-500">*</span>
              </span>
              <input
                type="text"
                required
                placeholder="Your Name"
                className="mt-1.5 w-full rounded-md bg-[#111827] text-white border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 px-3 py-2 transition"
              />
            </label>

            {/* Email */}
            <label className="block mb-3">
              <span className="text-gray-300 text-xs">
                Your Email <span className="text-red-500">*</span>
              </span>
              <input
                type="email"
                required
                placeholder="Your Email"
                className="mt-1.5 w-full rounded-md bg-[#111827] text-white border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 px-3 py-2 transition"
              />
            </label>

            {/* Service */}
            <label className="block mb-3">
              <span className="text-gray-300 text-xs">
                Service Needed <span className="text-red-500">*</span>
              </span>
              <select
                required
                defaultValue=""
                className="mt-1.5 w-full rounded-md bg-[#111827] text-white border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 px-3 py-2 transition"
              >
                <option value="" disabled>
                  Something in mind?
                </option>
                <option>Web Development</option>
                <option>Mobile Development</option>
                <option>UI/UX Design</option>
                <option>Consulting</option>
              </select>
            </label>

            {/* Budget */}
            <label className="block mb-3">
              <span className="text-gray-300 text-xs">
                Your Budget ($) <span className="text-red-500">*</span>
              </span>
              <input
                type="number"
                required
                min="0"
                placeholder="Enter your budget"
                className="mt-1.5 w-full rounded-md bg-[#111827] text-white border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 px-3 py-2 transition"
              />
            </label>

            {/* Idea */}
            <label className="block mb-4">
              <span className="text-gray-300 text-xs">
                Explain Your Idea <span className="text-red-500">*</span>
              </span>
              <textarea
                required
                rows={2}
                placeholder="Explain your idea..."
                className="mt-1.5 w-full rounded-md bg-[#111827] text-white border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 px-3 py-2 resize-none transition"
              />
            </label>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 text-white font-semibold py-2 rounded-lg shadow-lg hover:shadow-blue-500/30"
            >
              Send Message
            </button>
          </form>
        ) : (
          <div className="bg-[#0f172a]/90 border border-white/10 rounded-2xl p-6 shadow-2xl text-center text-white backdrop-blur-xl max-w-xl w-full">
            <h2 className="text-xl font-semibold mb-3">Thank you!</h2>
            <p>Your message has been sent. I’ll get back to you soon.</p>
          </div>
        )}
      </div>
    </section>
  );
}
