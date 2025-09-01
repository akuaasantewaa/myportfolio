import React from 'react';
import { Award, Star } from 'lucide-react';
import ceo from '../assets/images/ceo.jpg'

const AboutSection = ({ isVisible }) => {
  return (
    <section id="about" className={`py-20 px-6 lg:px-8 ${isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000`}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
          About Me
        </h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto text-lg lg:text-xl">
          Passionate developer with a mission to create meaningful digital experiences
        </p>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-6">
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                I'm a passionate full stack developer with over 5 years of experience creating 
                digital solutions that make a difference. I specialize in building scalable web 
                applications with modern technologies and beautiful user interfaces.
              </p>
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                My journey began with a curiosity about how websites work, which evolved into 
                a deep love for creating seamless user experiences and robust backend systems.
              </p>
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                When I'm not coding, you'll find me exploring new design trends, contributing to 
                open source projects, or mentoring aspiring developers in my community.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center gap-3 bg-rose-50 px-6 py-3 rounded-full transform hover:scale-105 transition-transform">
                <Award className="text-rose-500" size={24} />
                <span className="text-gray-700 font-medium">5+ Years Experience</span>
              </div>
              <div className="flex items-center gap-3 bg-purple-50 px-6 py-3 rounded-full transform hover:scale-105 transition-transform">
                <Star className="text-purple-500" size={24} />
                <span className="text-gray-700 font-medium">50+ Projects Completed</span>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-100 to-purple-100 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
              <div className="relative bg-gradient-to-br from-rose-100 to-purple-100 rounded-2xl p-6 transform hover:scale-105 transition-transform duration-300">
                <div className="flex justify-center lg:justify-end">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-purple-500 rounded-full animate-pulse"></div>
              <div className="absolute inset-4 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <img 
                  src= {ceo}
                  alt="Nhyira" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
