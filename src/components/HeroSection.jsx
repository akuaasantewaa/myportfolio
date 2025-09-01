import React from "react";
import {
  ChevronDown,
  Github,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";

const HeroSection = ({ scrollTo }) => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-20 px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-rose-200 to-purple-200 rounded-full opacity-20 animate-pulse"></div>
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-20 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10 text-center">
        {/* Social Sidebar - Fixed on the left */}
        <div className="hidden md:flex flex-col items-center space-y-4 fixed left-6 top-1/3 z-50">
          <a
            href="https://github.com/akuaasantewaa"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/80 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-110"
          >
            <Github
              className="text-gray-700 hover:text-rose-600 transition-colors"
              size={24}
            />
          </a>

          <a
            href="https://www.linkedin.com/in/regina-nhyira-asantewaa-dadzie-573757308/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/80 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-110"
          >
            <Linkedin
              className="text-gray-700 hover:text-blue-600 transition-colors"
              size={24}
            />
          </a>

          <a
            href="https://x.com/akua_reginae"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/80 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-110"
          >
            <Twitter
              className="text-gray-700 hover:text-blue-400 transition-colors"
              size={24}
            />
          </a>

          <a
            href="https://www.instagram.com/_akua.asantewaa_?igsh=MTB1czJlem05d3k0eg%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/80 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-110"
          >
            <Instagram
              className="text-gray-700 hover:text-pink-600 transition-colors"
              size={24}
            />
          </a>
        </div>

        {/* Centered Content */}
        <h1 className="text-5xl md:text-5xl lg:text-6xl xl:text-5xl font-bold mb-6 bg-gradient-to-r from-rose-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
          Hello, I'm Regina
          <br />
          Nhyira Dadzie
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 mb-4 max-w-3xl mx-auto">
          A Full Stack Developer & UI/UX Designer
        </p>
        <p className="text-lg lg:text-xl text-gray-500 mb-8 max-w-2xl mx-auto leading-relaxed">
          Crafting beautiful digital experiences that make a difference in the
          world of technology
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <button
            onClick={() => scrollTo("projects")}
            className="bg-gradient-to-r from-rose-500 to-purple-600 text-white px-8 py-4 rounded-full hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl font-semibold text-lg"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="border-2 border-rose-500 text-rose-600 px-8 py-4 rounded-full hover:bg-rose-50 transition-all duration-300 font-semibold text-lg"
          >
            Let's Talk
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 justify-center">
          <div>
            <div className="text-3xl lg:text-4xl font-bold text-rose-600">
              5+
            </div>
            <div className="text-sm lg:text-base text-gray-600">
              Years Experience
            </div>
          </div>
          <div>
            <div className="text-3xl lg:text-4xl font-bold text-purple-600">
              50+
            </div>
            <div className="text-sm lg:text-base text-gray-600">
              Projects Completed
            </div>
          </div>
          <div>
            <div className="text-3xl lg:text-4xl font-bold text-pink-600">
              100+
            </div>
            <div className="text-sm lg:text-base text-gray-600">
              Happy Clients
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-rose-400" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
