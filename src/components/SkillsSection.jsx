import React from 'react';
import { Palette, Database, Zap } from 'lucide-react';

const SkillsSection = ({ isVisible }) => {
  const skillCategories = [
    {
      category: "Frontend",
      icon: <Palette className="text-rose-500" size={28} />,
      color: "rose",
      skills: [
        { name: 'React/Next.js', level: 95, icon: '⚛️' },
        { name: 'TypeScript', level: 90, icon: '📘' },
        { name: 'Tailwind CSS', level: 92, icon: '🎨' },
        { name: 'Vue.js', level: 85, icon: '💚' }
      ]
    },
    {
      category: "Backend",
      icon: <Database className="text-purple-500" size={28} />,
      color: "purple",
      skills: [
        { name: 'Node.js', level: 88, icon: '🟢' },
        { name: 'Python', level: 82, icon: '🐍' },
        { name: 'PostgreSQL', level: 80, icon: '🐘' },
        { name: 'MongoDB', level: 85, icon: '🍃' }
      ]
    },
    {
      category: "Tools & Design",
      icon: <Zap className="text-pink-500" size={28} />,
      color: "pink",
      skills: [
        { name: 'Figma', level: 90, icon: '🎯' },
        { name: 'Adobe Creative Suite', level: 85, icon: '🎨' },
        { name: 'Git/GitHub', level: 92, icon: '📚' },
        { name: 'Docker', level: 75, icon: '🐳' }
      ]
    }
  ];

  return (
    <section id="skills" className={`py-20 px-6 lg:px-8 bg-gradient-to-br from-rose-50/50 to-purple-50/50 ${isVisible.skills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000`}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
          Skills & Expertise
        </h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto text-lg lg:text-xl">
          Crafting digital experiences with cutting-edge technologies and creative design
        </p>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.category} className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-gray-50 rounded-full group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-800">{category.category}</h3>
              </div>
              
              <div className="space-y-8">
                {category.skills.map((skill, index) => (
                  <div key={skill.name} className="group/skill">
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{skill.icon}</span>
                        <span className="font-semibold text-gray-800 text-lg">{skill.name}</span>
                      </div>
                      <span className={`text-${category.color}-600 font-bold text-lg`}>{skill.level}%</span>
                    </div>
                    
                    <div className="relative">
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className={`bg-gradient-to-r from-${category.color}-400 to-${category.color}-600 h-3 rounded-full transition-all duration-1500 ease-out relative overflow-hidden`}
                          style={{ 
                            width: isVisible.skills ? `${skill.level}%` : '0%',
                            transitionDelay: `${(categoryIndex * 200) + (index * 150)}ms`
                          }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent animate-pulse"></div>
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-ping"></div>
                        </div>
                      </div>
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

export default SkillsSection;