import React from "react";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

const Footer = ({ scrollTo }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-rose-400 to-purple-400 bg-clip-text text-transparent">
              REGINA NHYIRA DADZIE
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6 text-lg max-w-md">
              Passionate about creating digital experiences that make a
              difference. Let's build something amazing together.
            </p>

            {/* Social Links in Footer */}
            <div className="flex gap-4">
              <a
                href="https://github.com/akuaasantewaa"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-700 rounded-full hover:bg-rose-600 transition-all duration-300 transform hover:scale-110"
              >
                <Github size={24} />
              </a>

              <a
                href="https://www.linkedin.com/in/regina-nhyira-asantewaa-dadzie-573757308/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-700 rounded-full hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin size={24} />
              </a>

              <a
                href="https://x.com/akua_reginae"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-700 rounded-full hover:bg-blue-400 transition-all duration-300 transform hover:scale-110"
              >
                <Twitter size={24} />
              </a>

              <a
                href="https://www.instagram.com/_akua.asantewaa_?igsh=MTB1czJlem05d3k0eg%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-700 rounded-full hover:bg-pink-600 transition-all duration-300 transform hover:scale-110"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-xl">Quick Links</h4>
            <div className="space-y-3">
              {[
                "Home",
                "About",
                "Skills",
                "Experience",
                "Projects",
                "Contact",
              ].map((link) => (
                <button
                  key={link}
                  onClick={() =>
                    scrollTo(
                      link.toLowerCase() === "home"
                        ? "hero"
                        : link.toLowerCase()
                    )
                  }
                  className="block text-gray-300 hover:text-rose-400 transition-colors text-lg hover:translate-x-2 transform duration-300"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-xl">Services</h4>
            <div className="space-y-3 text-gray-300">
              <p
                onClick={() => scrollTo("project1")}
                className="hover:text-rose-400 transition-colors cursor-pointer text-lg"
              >
                Frontend Development
              </p>

              <p className="hover:text-rose-400 transition-colors cursor-pointer text-lg">
                Backend Development
              </p>
              <p className="hover:text-rose-400 transition-colors cursor-pointer text-lg">
                UI/UX Design
              </p>
              <p className="hover:text-rose-400 transition-colors cursor-pointer text-lg">
                Full Stack Solutions
              </p>
              <p className="hover:text-rose-400 transition-colors cursor-pointer text-lg">
                Technical Consulting
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 text-lg">
            © {currentYear} Regina Nhyira Dadzie.
          </p>
          <p className="text-gray-500 mt-2">All rights reserved. </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
