import React from "react";
import {
  FaHome,
  FaUser,
  FaCode,
  FaProjectDiagram,
  FaEnvelope,
} from "react-icons/fa";

function Sidebar() {
  return (
    <div className="fixed left-0 top-0 h-screen w-24 bg-black/50 backdrop-blur border-r border-black-800 flex flex-col items-center justify-center gap-10 text-white">

      {/* Logo */}

      <h1 className="text-3xl font-bold text-cyan-400 mb-6">
        PS
      </h1>

      {/* Home */}

      <a
        href="#home"
        className="flex flex-col items-center text-sm hover:text-cyan-400 transition"
      >
        <FaHome size={22} />
        <span className="mt-2">Home</span>
      </a>

      {/* About */}

      <a
        href="#about"
        className="flex flex-col items-center text-sm hover:text-cyan-400 transition"
      >
        <FaUser size={22} />
        <span className="mt-2">About</span>
      </a>

      {/* Skills */}

      <a
        href="#skills"
        className="flex flex-col items-center text-sm hover:text-cyan-400 transition"
      >
        <FaCode size={22} />
        <span className="mt-2">Skills</span>
      </a>

      {/* Projects */}

      <a
        href="#projects"
        className="flex flex-col items-center text-sm hover:text-cyan-400 transition"
      >
        <FaProjectDiagram size={22} />
        <span className="mt-2">Projects</span>
      </a>

      {/* Contact */}

      <a
        href="#contact"
        className="flex flex-col items-center text-sm hover:text-cyan-400 transition"
      >
        <FaEnvelope size={22} />
        <span className="mt-2">Contact</span>
      </a>

    </div>
  );
}

export default Sidebar;