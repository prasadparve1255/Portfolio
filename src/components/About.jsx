import React from "react";
import { Code, Palette, Zap } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center md:text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6">
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              I’m Prasad Pandurang Parve, a passionate and dedicated Full Stack
              MERN Developer with hands-on experience building real-world web
              applications. From complaint management systems to student
              dashboards, I’ve turned ideas into fully functional products using
              technologies like MongoDB, Express.js, React.js, and Node.js.
            </p>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              I believe in writing clean, maintainable code and building
              interfaces that not only work well — but feel great to use.
              Whether it’s integrating email notifications, handling file
              uploads with Multer, or crafting responsive UIs using Bootstrap
              and dark themes, I enjoy every bit of the development journey.
            </p>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              When I’m not coding, I explore new tools, contribute to
              open-source ideas, or share knowledge with peers — because for me,
              learning never stops.
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6 mt-8 md:mt-0">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-600/20 rounded-lg mr-4">
                  <Code className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  Clean Code
                </h3>
              </div>
              <p className="text-sm sm:text-base text-gray-300">
                I focus on structured, scalable code with proper commenting and
                modularity.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-purple-600/20 rounded-lg mr-4">
                  <Palette className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  Modern UI/UX Design
                </h3>
              </div>
              <p className="text-sm sm:text-base text-gray-300">
                Designing clean, dark-themed dashboards with React & Bootstrap.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-emerald-600/20 rounded-lg mr-4">
                  <Zap className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  Performance
                </h3>
              </div>
              <p className="text-sm sm:text-base text-gray-300">
                Implementing powerful backend logic with Express, MongoDB, and
                real-time updates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
