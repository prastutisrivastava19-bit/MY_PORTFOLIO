import React from "react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-b from-black via-[#07111f] to-black text-white px-6 py-24"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}

        <h2 className="text-5xl font-bold text-center text-cyan-400 mb-16">
          Contact Me
        </h2>

        {/* Main Container */}

        <div className="grid md:grid-cols-2 gap-12">

          {/* Left Side */}

          <div className="bg-white/5 border border-cyan-500/20 rounded-3xl p-10 backdrop-blur-lg shadow-[0_0_20px_rgba(34,211,238,0.15)]">

            <h3 className="text-3xl font-bold mb-8 text-cyan-300">
              Let's Connect
            </h3>

            {/* Email */}

            <div className="flex items-center gap-4 mb-8">
              <div className="bg-cyan-400/20 p-4 rounded-xl">
                <FaEnvelope className="text-cyan-400 text-2xl" />
              </div>

              <div>
                <p className="text-gray-400 text-sm">Email</p>

                <p className="text-lg">
                  prastutisrivastava19@gmail.com
                </p>
              </div>
            </div>

            {/* GitHub */}

            <div className="flex items-center gap-4 mb-8">
              <div className="bg-cyan-400/20 p-4 rounded-xl">
                <FaGithub className="text-cyan-400 text-2xl" />
              </div>

              <div>
                <p className="text-gray-400 text-sm">GitHub</p>

                <a
                  href="https://github.com/prastutisrivastava19-bit"
                  target="_blank"
                  rel="noreferrer"
                  className="text-lg hover:text-cyan-400 transition"
                >
                  github.com/prastutisrivastava19
                </a>
              </div>
            </div>

            {/* LinkedIn */}

            <div className="flex items-center gap-4">
              <div className="bg-cyan-400/20 p-4 rounded-xl">
                <FaLinkedin className="text-cyan-400 text-2xl" />
              </div>

              <div>
                <p className="text-gray-400 text-sm">LinkedIn</p>

                <a
                  href="https://www.linkedin.com/in/prastuti-srivastava-615aa1378?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noreferrer"
                  className="text-lg hover:text-cyan-400 transition"
                >
                  linkedin.com/in/prastutisrivastava19
                </a>
              </div>
            </div>

          </div>

          {/* Right Side Form */}

          <div className="bg-white/5 border border-cyan-500/20 rounded-3xl p-10 backdrop-blur-lg shadow-[0_0_20px_rgba(34,211,238,0.15)]">

            <form className="flex flex-col gap-6">

              <input
                type="text"
                placeholder="Your Name"
                className="bg-black/40 border border-gray-700 rounded-xl px-5 py-4 outline-none focus:border-cyan-400 transition"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="bg-black/40 border border-gray-700 rounded-xl px-5 py-4 outline-none focus:border-cyan-400 transition"
              />

              <textarea
                rows="6"
                placeholder="Your Message"
                className="bg-black/40 border border-gray-700 rounded-xl px-5 py-4 outline-none focus:border-cyan-400 transition resize-none"
              ></textarea>

              <button
                type="submit"
                className="bg-gradient-to-r from-cyan-400 to-blue-500 py-4 rounded-xl font-semibold text-black hover:scale-105 transition duration-300 shadow-[0_0_20px_rgba(34,211,238,0.4)]"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;