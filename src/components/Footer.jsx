import React from 'react';
import { Github, Linkedin, Mail, Heart, Smile } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black/20 backdrop-blur-sm border-t border-white/10 py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-3 sm:mb-4">
              Portfolio
            </h3>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              Building the future one line of code at a time. Let's create something amazing together.
            </p>
          </div>
          
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-sm sm:text-base text-gray-300 hover:text-white transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Connect</h4>
            <div className="flex space-x-3 sm:space-x-4">
              <a
                href="https://github.com/prasadparve1255"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/prasad-parve-31a8ab19a/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </a>
              <a
                href="mailto:prasadparve799312@gmail.com"
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-sm sm:text-base text-gray-300 flex items-center justify-center space-x-2">
            {/* <span></span> */}
            <span>Made with😉by Prasad Parve © {new Date().getFullYear()}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;