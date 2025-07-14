import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import Image from '../assets/DCMS.webp';
import Image2 from '../assets/Student_Panel.webp';
import Image3 from '../assets/UniAttend.webp';
import Image4 from '../assets/Calculator.webp';

const Projects = () => {
  const projects = [
    {
      title: "Digital Complaint Managment System",
      description: "Full-stack Digital Complaint Managment System with React, Node.js, and Stripe integration",
      image: Image,
      tech: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/prasadparve1255/DigitalComplaintSystem_Final_MERN_Atlas",
      // live: "https://example.com"
    },
    {
      title: "Student Panel management System",
      description: "Student Panel Management System is a web application designed to manage student-related activities using React and Vitae.s",
      image: Image2,
      tech: ["React", "MongoDB", "Node.js", "Express.js"],
      github: "https://github.com/prasadparve1255/Student-Panel",
      // live: "https://example.com"
    },
    {
      title: "UniAttendance Application",
      description: "Beautiful UniAttend app with Android Development",
      image: Image3,
      tech: ["XML", "Java", "SQLite DataBase"],
      // github: "https://github.com",
      // live: "https://example.com"
    },
    {
      title: "Calculater",
      description: "Simple Calculater",
      image: Image4,
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/prasadparve1255/Calculater",
      // live: "https://example.com"
    }
  ];

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Featured <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent work and side projects
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              <div className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2 sm:mb-3">{project.title}</h3>
                <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 sm:px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-xs sm:text-sm border border-blue-600/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 text-sm sm:text-base"
                  >
                    <Github size={18} className="sm:w-5 sm:h-5" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 text-sm sm:text-base"
                  >
                    <ExternalLink size={18} className="sm:w-5 sm:h-5" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;