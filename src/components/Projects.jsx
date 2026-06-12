import React from "react";
import { FaGithub } from "react-icons/fa";
import sahayakimg from "../assets/images/sahayak.png";
import collegeimg from "../assets/images/College.jpeg";

function Projects() {

  const projects = [

    {
      title: "Sahayak AI",

      description:
        "Sahayak AI is an intelligent disaster response ecosystem that unifies citizens, volunteers, NGOs, donors, and government agencies on a single platform, leveraging AI-driven urgency prioritization, real-time coordination, and transparent resource allocation to deliver aid where it is needed most.",

      tech: "HTML • CSS • JavaScript • Firebase • AI",

      image: sahayakimg,

      github: "https://github.com/prastutisrivastava19-bit/SAHAYAK-AI/",

      //demo: "https://example.com",
    },

    {
      title: "College Event Management System",

      description:
        "A web-based platform for managing college events, registrations, announcements, and participation with a user-friendly interface.",

      tech: "Streamlit • Python • SQLite",

      image:
        collegeimg,

      github: "https://github.com/prastutisrivastava19-bit/College-Event-Management-System",

    },

  ];

  return (

    <section
      id="projects"
      className="min-h-screen bg-gradient-to-b from-black via-[#07111f] to-black text-white px-6 py-24"
    >

      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-cyan-400 mb-16">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {projects.map((project, index) => (

            <div
              key={index}
              className="bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#1e293b] rounded-3xl overflow-hidden border border-cyan-500/20 hover:scale-105 hover:shadow-[0_0_25px_#22d3ee] transition duration-300"
            >

              {/* Project Image */}

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />

              {/* Content */}

              <div className="p-6">

                <h3 className="text-2xl font-bold mb-4 text-cyan-400">
                  {project.title}
                </h3>

                <p className="text-gray-300 leading-7 mb-5">
                  {project.description}
                </p>

                <p className="text-sm text-cyan-300 mb-6">
                  {project.tech}
                </p>

                {/* Buttons */}

                <div className="flex gap-4">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 border border-cyan-400 px-4 py-2 rounded-xl hover:bg-cyan-400 hover:text-black transition"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;