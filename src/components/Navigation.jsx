import React, { useState } from 'react';
import { Menu, X, ChevronDown, Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram, ExternalLink, Award, Star, Palette, Database, Zap, Briefcase, Send, CheckCircle } from 'lucide-react';

// Navigation Component
const Navigation = ({ activeSection, scrollTo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-md shadow-lg z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex justify-between items-center py-6 lg:py-8">
          <div className="text-2xl lg:text-2xl font-bold bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
            Regina Nhyira Dadzie
          </div>
          
          <div className="hidden md:flex space-x-8">
            {['hero', 'about', 'skills', 'experience', 'projects', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className={`capitalize transition-all duration-300 hover:text-rose-600 relative text-lg ${
                  activeSection === item ? 'text-rose-600 font-semibold' : 'text-gray-700'
                }`}
              >
                {item === 'hero' ? 'Home' : item}
                {activeSection === item && (
                  <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-rose-500 to-purple-500 rounded-full"></div>
                )}
              </button>
            ))}
          </div>

          <button
            className="md:hidden p-2 hover:bg-rose-50 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg py-4">
            {['hero', 'about', 'skills', 'experience', 'projects', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => {
                  scrollTo(item);
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-6 py-3 capitalize hover:bg-rose-50 transition-colors text-lg"
              >
                {item === 'hero' ? 'Home' : item}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;