import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaArrowRight,
} from "react-icons/fa";

import profile from "../assets/images/profile.jpeg";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-black text-white overflow-hidden flex items-center"
    >

      {/* ===== Background Gradients ===== */}

      {/* Purple Glow */}
      <div className="absolute top-[-120px] left-[10%] w-[350px] h-[350px] bg-purple-700 rounded-full blur-[140px] opacity-40"></div>

      {/* Pink Glow */}
      <div className="absolute bottom-[-100px] right-[10%] w-[350px] h-[350px] bg-pink-600 rounded-full blur-[140px] opacity-40"></div>

      {/* Blue Glow */}
      <div className="absolute top-[40%] left-[45%] w-[250px] h-[250px] bg-indigo-600 rounded-full blur-[120px] opacity-30"></div>

      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* ===== Main Content ===== */}

      {/* 
        ml-20 is added because sidebar already exists.
        Adjust according to your sidebar width.
      */}

      <div className="relative z-10 w-full ml-20 px-6 md:px-14">

        <div className="grid md:grid-cols-2 items-center gap-10 min-h-screen">

          {/* ===== LEFT SIDE ===== */}

          <div className="max-w-2xl">

            <p className="text-purple-400 text-xl font-semibold tracking-wide mb-4">
              Hello, I'm
            </p>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400 bg-clip-text text-transparent">
                Prastuti
              </span>
              <br />
              Srivastava
            </h1>

            <p className="text-gray-300 text-lg md:text-xl leading-9 mb-10">
              CSE Student • Full Stack Web Development Learner •
              React Developer • AI Enthusiast
            </p>

            {/* ===== Buttons ===== */}

            <div className="flex flex-wrap gap-5">

              {/* Resume */}
              <a
                href="/PRASTUTI SRIVASTAVA.pdf"
                download
                className="group bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:scale-105 transition duration-300 shadow-[0_0_30px_rgba(168,85,247,0.5)] flex items-center gap-3"
              >
                Download Resume
                <FaArrowRight className="group-hover:translate-x-1 transition" />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/prastutisrivastava19-bit"
                target="_blank"
                rel="noreferrer"
                className="backdrop-blur-md bg-white/10 border border-white/10 px-6 py-4 rounded-2xl flex items-center gap-3 hover:bg-purple-500/20 hover:scale-105 transition duration-300"
              >
                <FaGithub className="text-2xl" />
                GitHub
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/prastuti-srivastava-615aa1378?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noreferrer"
                className="backdrop-blur-md bg-white/10 border border-white/10 px-6 py-4 rounded-2xl flex items-center gap-3 hover:bg-pink-500/20 hover:scale-105 transition duration-300"
              >
                <FaLinkedin className="text-2xl" />
                LinkedIn
              </a>

            </div>

          </div>

          {/* ===== RIGHT SIDE IMAGE ===== */}

          <div className="flex justify-center md:justify-end">

            <div className="relative">

              {/* Glow Behind Image */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 rounded-full blur-3xl opacity-50 scale-110"></div>

              {/* Gradient Border */}
              <div className="relative p-2 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500">

                <img
                  src={profile}
                  alt="Prastuti"
                  className="w-[280px] h-[280px] md:w-[420px] md:h-[420px] rounded-full object-cover border-4 border-black"
                />

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;