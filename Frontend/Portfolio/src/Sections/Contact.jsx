import React, { useState } from "react";
import Particles from "react-tsparticles";
import AVG from "../assets/AVG.jpeg";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

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
      <div className="absolute inset-0 bg-black/70"></div>

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

      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-6">

        <h1 className="text-white text-3xl md:text-4xl font-bold text-center">
          Contact Me
        </h1>

        <p className="text-gray-300 text-center mt-2 mb-6 text-base md:text-lg">
          Want to collaborate with me?
        </p>

        {!submitted ? (
          <form
            onSubmit={sendEmail}
            className="bg-[#0f172a]/90 border border-white/10 rounded-2xl p-6 shadow-2xl backdrop-blur-xl max-w-xl w-full"
          >
            {/* Name */}
            <label className="block mb-3">
              <span className="text-gray-300 text-xs">
                Your Name <span className="text-red-500">*</span>
              </span>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
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
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="mt-1.5 w-full rounded-md bg-[#111827] text-white border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 px-3 py-2 transition"
              />
            </label>

            {/* Service */}
           

            {/* Idea */}
            <label className="block mb-4">
              <span className="text-gray-300 text-xs">
                Your message <span className="text-red-500">*</span>
              </span>
              <textarea
                name="message"
                required
                rows={2}
                value={formData.message}
                onChange={handleChange}
                placeholder="your message"
                className="mt-1.5 w-full rounded-md bg-[#111827] text-white border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 px-3 py-2 resize-none transition"
              />
            </label>

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
