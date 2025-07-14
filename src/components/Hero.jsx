import React from "react";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import profileImage from "../assets/profile1.webp";
import DownloadCV  from "../assets/prasad_parve_CV.pdf"

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-emerald-600/20"></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto w-full sm:mt-5 lg:mt-0">
        <div className="space-y-6 sm:space-y-8 text-center lg:text-left order-2 lg:order-1">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            <span className="block">Hi, I'm</span>
            <span className="bg-gradient-to-r uppercase tracking-wide from-blue-400 via-orange-400 to-emerald-400 bg-clip-text text-transparent">
              Prasad Parve
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            I am a <strong>PostGraduate</strong> in computer science from Pune University🎓|
            HTML | CSS | Bootstrap | JavaScript | Express.JS | MongoDB
            | React.js | TailwindCSS | Node.JS |
          </p>

          <div className="flex justify-center lg:justify-start space-x-4 sm:space-x-6">
            <a
              href="https://github.com/prasadparve1255"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <Github className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
            </a>
            <a
              href="https://www.linkedin.com/in/prasad-parve-31a8ab19a/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
            </a>
            <a
              href="mailto:prasadparve1255@gmail.com"
              className="p-2 sm:p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-4">
            <button
              onClick={() => scrollToAbout()}
              className="px-6 sm:px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base"
            >
              Learn More
            </button>
            <a
              href="#contact"
              className="px-6 sm:px-8 py-3 bg-white/10 backdrop-blur-sm text-white rounded-full hover:bg-blue-400 transition-all duration-300 transform hover:scale-105 border border-white/20 text-sm sm:text-base font-semibold"
            >
              Get In Touch
            </a>
            <a
              href={DownloadCV} download={true}
              className="px-6 sm:px-8 py-3 bg-white/10 backdrop-blur-sm text-white rounded-full hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 border border-white/20 text-sm sm:text-base font-semibold"
            >
              Download CV 
            </a>
          </div>
        </div>
        <div className="flex justify-center order-1 lg:order-2 ">
          <img
            src={profileImage}
            alt="Profile Picture"
            className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full object-cover ring-4 ring-white/20 sm:mt-5"
          />
        </div>
      </div>

      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={scrollToAbout}
          className="text-white/60 hover:text-white transition-colors duration-300"
        >
          <ChevronDown size={35} className="sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white/60 rounded-full p-2 bg-white/10 backdrop-blur-md hover:bg-black/25 transition-all duration-300 hover:scale-110" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
