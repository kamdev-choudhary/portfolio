"use client";

import React, { useRef, useState, useEffect } from "react";

const Home: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const [activeSection, setActiveSection] = useState<string>("about");

  const scrollToSection = (
    ref: React.RefObject<HTMLDivElement>,
    section: string
  ) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(section);
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    if (
      aboutRef.current &&
      scrollPosition >= aboutRef.current.offsetTop &&
      scrollPosition < projectsRef.current!.offsetTop
    ) {
      setActiveSection("about");
    } else if (
      projectsRef.current &&
      scrollPosition >= projectsRef.current.offsetTop &&
      scrollPosition < contactRef.current!.offsetTop
    ) {
      setActiveSection("projects");
    } else if (
      contactRef.current &&
      scrollPosition >= contactRef.current.offsetTop
    ) {
      setActiveSection("contact");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="h-[100vh] overflow-auto w-[100vw] bg-[#faf9f6]">
      <div className="flex flex-1 justify-center">
        <div className="backdrop-blur-md bg-white/30 border border-white/50 rounded-[500px] p-3 m-2 fixed flex gap-3 justify-between px-4">
          <button
            onClick={() => scrollToSection(aboutRef, "about")}
            className={
              activeSection === "about"
                ? "bg-[#28844f] text-white px-3 py-1 rounded-md"
                : ""
            }
          >
            About
          </button>
          <button
            onClick={() => scrollToSection(projectsRef, "projects")}
            className={
              activeSection === "projects"
                ? "bg-[#28844f] text-white px-3 py-1 rounded-md"
                : ""
            }
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection(contactRef, "contact")}
            className={
              activeSection === "contact"
                ? "bg-[#28844f] text-white px-3 py-1 rounded-md"
                : ""
            }
          >
            Contact Us
          </button>
        </div>
      </div>

      {/* About Us Section */}
      <div
        ref={aboutRef}
        className="h-screen flex items-center justify-center bg-gradient-to-b from-blue-200 to-purple-200"
      >
        <h1 className="text-4xl font-bold">About Us</h1>
      </div>

      {/* Projects Section */}
      <div
        ref={projectsRef}
        className="h-screen flex items-center justify-center bg-gradient-to-b from-blue-200 to-purple-200"
      >
        <h1 className="text-4xl font-bold">Projects</h1>
      </div>

      {/* Contact Us Section */}
      <div
        ref={contactRef}
        className="h-screen bg-gradient-to-b from-blue-200 to-purple-200 flex items-center justify-center"
      >
        <div className="backdrop-blur-md bg-white/30 rounded-lg border border-white/50 min-w-[500px] min-h-[500px] p-6 flex flex-col justify-center">
          <div className="flex justify-center mb-4">
            <h1 className="text-3xl font-bold text-black">Contact Me</h1>
          </div>
          <div className="flex flex-col items-center w-full">
            <div className="w-[80%] mb-4">
              <input
                type="text"
                placeholder="Your Name"
                className="border border-gray-200 p-2 rounded-md w-full"
              />
            </div>
            <div className="w-[80%] mb-4">
              <input
                type="email"
                placeholder="Your Email"
                className="border border-gray-200 p-2 rounded-md w-full"
              />
            </div>
            <div className="w-[80%] mb-4">
              <textarea
                placeholder="Your Message"
                className="border border-gray-200 p-2 rounded-md w-full h-32"
              />
            </div>
            <button className="bg-blue-500 text-white p-2 rounded-md w-[80%]">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
