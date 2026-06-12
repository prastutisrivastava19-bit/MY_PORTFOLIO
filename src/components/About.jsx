import React from "react";
import prof from "../assets/images/P1.jpeg";

function About() {
  return (
    <section
      id="about"
      className="relative bg-black text-white py-28 px-6 overflow-hidden"
    >

      {/* ===== Background Effects ===== */}

      {/* Purple Glow */}
      <div className="absolute top-[-100px] left-[-100px] w-[320px] h-[320px] bg-purple-700 rounded-full blur-[140px] opacity-30"></div>

      {/* Pink Glow */}
      <div className="absolute bottom-[-120px] right-[-100px] w-[320px] h-[320px] bg-pink-600 rounded-full blur-[140px] opacity-30"></div>

      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* ===== Main Content ===== */}

      <div className="relative z-10 max-w-7xl mx-auto ml-20">

        {/* Heading */}
        <h2 className="text-5xl font-extrabold text-center mb-20">
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* ===== LEFT IMAGE ===== */}

          <div className="flex justify-center">

            <div className="relative">

              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 rounded-3xl blur-3xl opacity-40 scale-110"></div>

              {/* Image */}
              <img
                src={prof}
                alt="About"
                className="relative w-[300px] md:w-[380px] rounded-3xl border border-white/10 shadow-2xl object-cover"
              />

            </div>

          </div>

          {/* ===== RIGHT CONTENT ===== */}

          <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 shadow-[0_0_30px_rgba(168,85,247,0.15)] hover:shadow-[0_0_40px_rgba(168,85,247,0.25)] transition duration-500">

            <p className="text-gray-300 text-lg leading-9 mb-6">
              I am a passionate Computer Science student and aspiring frontend
              developer with a strong interest in creating modern,
              responsive, and user-friendly web applications using
              React and Tailwind CSS.
            </p>

            <p className="text-gray-300 text-lg leading-9 mb-6">
              Apart from web development, I am also interested in
              Artificial Intelligence and innovative tech solutions
              that solve real-world problems. I enjoy building projects
              that improve my creativity, problem-solving, and teamwork skills.
            </p>

            <p className="text-gray-300 text-lg leading-9">
              My goal is to become a skilled software developer,
              gain valuable industry experience through internships,
              and contribute to impactful projects that make
              technology more helpful and accessible.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;