import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGithub,
  FaPython,
    FaJava,
} from "react-icons/fa";

import { SiTailwindcss, SiC } from "react-icons/si";

function Skills() {

  const skills = [
    {
      name: "HTML",
      icon: <FaHtml5 size={50} />,
    },

    {
      name: "CSS",
      icon: <FaCss3Alt size={50} />,
    },

    {
      name: "JavaScript",
      icon: <FaJs size={50} />,
    },

    {
        name: "Python",
        icon: <FaPython size={50} />,
    },

    {
        name: "Java",
        icon: <FaJava size={50} />,
    },

    {
        name: "C",
        icon: <SiC size={50} />,
    },

    {
      name: "React",
      icon: <FaReact size={50} />,
    },

    {
      name: "Tailwind",
      icon: <SiTailwindcss size={50} />,
    },

    {
      name: "GitHub",
      icon: <FaGithub size={50} />,
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen bg-black text-white px-6 py-24"
    >

      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-cyan-400 mb-16">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">

          {skills.map((skill, index) => (

            <div
              key={index}
              className="bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#1e293b] border border-cyan-500/20 rounded-3xl p-10 flex flex-col items-center justify-center hover:scale-105 hover:shadow-[0_0_25px_#22d3ee] transition duration-300"
            >

              <div className="text-cyan-400 text-5xl mb-5 drop-shadow-[0_0_12px_#22d3ee]">
                {skill.icon}
              </div>

              <h3 className="text-xl font-semibold">
                {skill.name}
              </h3>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;