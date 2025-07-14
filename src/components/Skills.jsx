import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 75 },
        { name: "JavaScript", level: 60 },
        { name: "HTML/CSS", level: 68 },  
        { name: "Tailwind CSS", level:45 },
        { name: "Bootstrap", level: 50 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 40 },
        { name: "Express", level: 40 },
        { name: "MongoDB", level: 70 }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "VS Code", level: 75 },
        { name: "Android Studio", level: 65 },
        { name: "MS Office", level: 50 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            My <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6 text-center">{category.title}</h3>
              
              <div className="space-y-3 sm:space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm sm:text-base text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-blue-400 text-xs sm:text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;