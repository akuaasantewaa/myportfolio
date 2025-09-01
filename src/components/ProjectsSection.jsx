import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import project8 from '../assets/images/project8.png';
import new2 from '../assets/images/new2.png';
import new1 from '../assets/images/new1.png';
import project2 from '../assets/images/project 2.png';
import project4 from '../assets/images/project 4.png';
import project1 from '../assets/images/project 1.png';
import logon from '../assets/images/logon.jpeg';


const ProjectsSection = ({ isVisible }) => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      title: 'Fitta.com',
      description: 'Full-stack e-commerce solution with React, Node.js, and Stripe integration.',
      longDescription: "FITTA offers professional-grade collision repair services from experienced technicians, using the latest tools and techniques to ensure the highest quality results.",
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
      image: project8,
      link: 'https://fitta.vercel.app/',
      features: ['Payment Processing', 'Inventory Management', 'User Authentication', 'Admin Dashboard'],
      metrics: { users: '10K+', revenue: '$50K+', performance: '80%' }
    },
    {
      title: 'Maxgyet Oil',
      description: 'The Maxgyet Oil process transforms waste materials into low-cost, eco-friendly fuel, helping communites reduce pollution and gain energy independence!',
      longDescription: "The Maxgyet Oil process transforms waste materials into low-cost, eco-friendly fuel, helping communites reduce pollution and gain energy independence!.",
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe', ' Express, JavaScript'],
      image: new2,
      link: 'https://maxgyet-oil.vercel.app/',
      features: ['Payment Processing', 'Inventory Management', 'User Authentication', 'Admin Dashboard'],
      metrics: { users: '3K+', revenue: '$5K+', performance: '70%' }
    },
    {
      title: 'Sexwise',
      description: 'SexWise is an interactive online platform designed to provide accurate, inclusive, and judgment-free information on sex-related issues.!',
      longDescription: 'A productivity app used by 50+ teams worldwide, featuring drag-and-drop task management, real-time collaboration, and advanced analytics dashboard.',
      tech: ['Express', 'JavaScript', 'Node.js', 'Tailwind CSS', 'MongoDB'],
      image: new1,
      link: 'http://sexwise.netlify.app',
      features: ['Real-time Collaboration', 'Analytics Dashboard', 'File Sharing', 'Time Tracking'],
      metrics: { teams: '50+', tasks: '1M+', uptime: '99.9%' }
    },
     {
      title: 'Camm-Library',
      description: 'A library management app designed to streamline the organization and tracking of books. As the backend developer, I built and managed the server-side logic, database integration, and API functionalities to ensure smooth operations, including user authentication, book lending, and inventory management',
      longDescription: 'Designed the NLP model, integrated it with a backend API, and deployed the solution on a cloud platform.',
      tech: ['Express', 'JavaScript', 'Node.js', 'Tailwind CSS', 'MongoDB'],
      image: project2,
      link: 'http://sexwise.netlify.app',
      features: ['Real-time Collaboration', 'Analytics Dashboard', 'File Sharing', 'Time Tracking'],
      metrics: { teams: '60+', tasks: '100+', uptime: '50.9%' }
    },
    {
      title: 'FusionXpress-api',
      description: 'This app simplifies the advertisement process by offering an intuitive platform for managing and optimizing ad campaigns.',
      longDescription: 'As a backend developer will ensure the smooth operation, security, and scalability of the advertisement web app. By focusing on APIs, database management, authentication, analytics, and performance optimization, provide the essential foundation that powers the entire platform.',
      tech: ['Express', 'JavaScript', 'Node.js', 'MongoDB'],
      image: project4,
      link: 'http://sexwise.netlify.app',
      features: ['Real-time Collaboration', 'Analytics Dashboard', 'File Sharing', 'Time Tracking'],
      metrics: { teams: '30+', tasks: '2M+', uptime: '79.9%' }
    },
    {
      title: 'Real-Estate',
      description: 'Created an online platform for events management, enabling users to experience culture like never before Created out of the drive and passion for African Entertainment.',
      longDescription: 'Developed the backend infrastructure, managed the database, and implemented video streaming capabilities.',
      tech: ['Express', 'JavaScript', 'Node.js', 'Tailwind CSS', ],
      image: project1,
      link: 'https://akuaasantewaa.github.io/real-estate/',
      features: ['Real-time Collaboration', 'Analytics Dashboard', 'File Sharing', 'Time Tracking'],
      metrics: { teams: '10+', tasks: '20+', uptime: '99.9%' }
    },
    {
      title: 'Delkom Charity Foundation',
      description: 'Collaborative project management tool with real-time updates and team features.',
      longDescription: 'A productivity app used by 50+ teams worldwide, featuring drag-and-drop task management, real-time collaboration, and advanced analytics dashboard.',
      tech: ['Vue.js', 'Firebase', 'Tailwind CSS', 'Chart.js'],
      image: logon,
      link: 'https://delkomcharityfoundation.com/',
      features: ['Real-time Collaboration', 'Analytics Dashboard', 'File Sharing', 'Time Tracking'],
      metrics: { teams: '50+', tasks: '1M+', uptime: '99.9%' }
    },
    {
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates and team features.',
      longDescription: 'A productivity app used by 50+ teams worldwide, featuring drag-and-drop task management, real-time collaboration, and advanced analytics dashboard.',
      tech: ['Vue.js', 'Firebase', 'Tailwind CSS', 'Chart.js'],
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      link: 'https://github.com/akuaasantewaa/todo-app',
      features: ['Real-time Collaboration', 'Analytics Dashboard', 'File Sharing', 'Time Tracking'],
      metrics: { teams: '70+', tasks: '90+', uptime: '80.9%' }
    },
    {
      title: 'AI-Powered Analytics',
      description: 'Business intelligence dashboard with machine learning insights.',
      longDescription: 'An enterprise-grade analytics platform providing actionable insights through machine learning algorithms, serving Fortune 500 companies.',
      tech: ['Python', 'React', 'TensorFlow', 'D3.js', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      link: 'https://github.com/akuaasantewaa/weather-app',
      features: ['Predictive Analytics', 'Custom Reports', 'API Integration', 'Machine Learning'],
      metrics: { accuracy: '94%', clients: 'Fortune 500', data: '1TB+' }
    }
  ];

  return (
    <section id="projects" className={`py-20 px-6 lg:px-8 bg-gradient-to-br from-purple-50/50 to-rose-50/50 ${isVisible.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000`}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto text-lg lg:text-xl">
          Showcasing innovative solutions and creative problem-solving across various industries
        </p>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 cursor-pointer"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Hover Overlay with Metrics */}
                {hoveredProject === index && (
                  <div className="absolute inset-0 flex items-end p-6">
                    <div className="grid grid-cols-3 gap-4 w-full text-white text-center">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key} className="animate-fadeIn">
                          <div className="text-xl font-bold">{value}</div>
                          <div className="text-xs uppercase tracking-wider">{key}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 hover:scale-110">
                  <ExternalLink className="text-gray-700" size={20} />
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-rose-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  {hoveredProject === index ? project.longDescription : project.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-rose-400 rounded-full"></div>
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="bg-gradient-to-r from-rose-50 to-purple-50 text-rose-700 px-3 py-1 rounded-full text-sm font-medium hover:scale-105 transition-transform"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.link} 
                  className="inline-flex items-center gap-2 text-rose-600 hover:text-purple-600 transition-colors font-semibold text-lg hover:gap-3"
                >
                  View Project <ExternalLink size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ProjectsSection;