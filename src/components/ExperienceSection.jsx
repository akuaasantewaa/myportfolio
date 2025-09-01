import React from 'react';
import { Briefcase } from 'lucide-react';

const ExperienceSection = ({ isVisible }) => {
  const experiences = [
    {
      title: 'Software Engineer ',
      company: 'The Cobalt Partners.',
      period: '2022 - Present',
      description: 'Develop and maintain web applications, manage databases, build APIs, optimize performance, ensure responsive design, debug issues, and deploy solutions.',
      achievements: ['Improved app performance by 60%', 'Led team of 3 developers', 'Implemented CI/CD pipeline'],
      color: 'rose'
    },
    {
      title: 'Web3 Marketer ',
      company: 'The Helicode',
      period: '2020 - 2022',
      description: 'Built responsive web applications and improved performance by 40%. Collaborated closely with design team to create pixel-perfect UIs.',
      achievements: ['Reduced load time by 40%', 'Built 15+ client projects', 'Introduced React to the team'],
      color: 'purple'
    },
    {
      title: 'Junior Developer',
      company: 'Open Source MEST',
      period: '2024 - 2025',
      description: 'Developed client websites and learned modern development practices. Gained experience in full-stack development.',
      achievements: ['Completed 20+ websites', 'Learned 5+ technologies', 'Received "Rising Star" award'],
      color: 'pink'
    }
  ];

  return (
    <section id="experience" className={`py-20 px-6 lg:px-8 bg-gradient-to-br from-purple-50/30 to-rose-50/30 ${isVisible.experience ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000`}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
          Experience Journey
        </h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto text-lg lg:text-xl">
          A timeline of growth, learning, and impactful contributions
        </p>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-rose-400 via-purple-400 to-pink-500 rounded-full"></div>
          
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className={`absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 w-6 h-6 bg-white border-4 border-${exp.color}-400 rounded-full shadow-lg z-10 animate-pulse`}></div>
                
                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-rose-600 transition-colors">{exp.title}</h3>
                        <p className="text-rose-600 font-semibold text-lg">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 mt-2 md:mt-0">
                        <Briefcase size={20} />
                        <span className="font-medium">{exp.period}</span>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-6 text-lg">{exp.description}</p>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-800">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-center gap-3 text-gray-600">
                            <div className={`w-2 h-2 bg-${exp.color}-400 rounded-full`}></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;