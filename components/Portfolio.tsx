'use client';

import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce AI Assistant',
    description: 'Custom GPT model for personalized shopping recommendations and customer support',
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=500',
    tags: ['GPT-4', 'E-commerce', 'Customer Support'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Healthcare Automation System',
    description: 'AI-powered workflow automation for patient management using n8n integration',
    image: 'https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=500',
    tags: ['Healthcare', 'n8n', 'Automation'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Financial Data Processor',
    description: 'Intelligent document processing and analysis system with Make.com integration',
    image: 'https://images.pexels.com/photos/6772076/pexels-photo-6772076.jpeg?auto=compress&cs=tinysrgb&w=500',
    tags: ['Finance', 'Make.com', 'Data Processing'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Educational Chatbot Platform',
    description: 'Interactive learning assistant with personalized tutoring capabilities',
    image: 'https://images.pexels.com/photos/5940831/pexels-photo-5940831.jpeg?auto=compress&cs=tinysrgb&w=500',
    tags: ['Education', 'Chatbot', 'Machine Learning'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Real Estate AI Advisor',
    description: 'Property analysis and recommendation system with market insights',
    image: 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=500',
    tags: ['Real Estate', 'Analytics', 'AI Advisor'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Content Generation Suite',
    description: 'Automated content creation and optimization platform for marketing teams',
    image: 'https://images.pexels.com/photos/5632371/pexels-photo-5632371.jpeg?auto=compress&cs=tinysrgb&w=500',
    tags: ['Content Creation', 'Marketing', 'Automation'],
    liveUrl: '#',
    githubUrl: '#'
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r text-white bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our successful AI implementations across various industries and use cases
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 group hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-blue-500/20 text-white text-sm rounded-full border border-blue-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a 
                    href={project.liveUrl}
                    className="flex items-center space-x-2 text-white-400 hover:text-blue-300 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                  <a 
                    href={project.githubUrl}
                    className="flex items-center space-x-2 text-gray-400 hover:text-gray-300 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}