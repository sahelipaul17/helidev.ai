'use client';

import { Users, Award, Clock, CheckCircle } from 'lucide-react';

const stats = [
  { icon: Users, label: 'Happy Clients', value: '150+' },
  { icon: Award, label: 'Projects Completed', value: '300+' },
  { icon: Clock, label: 'Years of Experience', value: '5+' },
  { icon: CheckCircle, label: 'Success Rate', value: '98%' }
];

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="bg-gradient-to-r text-white bg-clip-text text-transparent">Helidev.ai</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We are passionate AI enthusiasts dedicated to making artificial intelligence accessible and practical for businesses of all sizes. 
              Our mission is to bridge the gap between complex AI technology and real-world applications.
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              From custom GPT models to comprehensive automation workflows, we provide end-to-end AI solutions that drive efficiency, 
              reduce costs, and unlock new opportunities for growth. Our team combines deep technical expertise with practical business understanding.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <span className="text-gray-300">Expert AI development and consultation</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <span className="text-gray-300">Comprehensive training and education programs</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <span className="text-gray-300">Ongoing support and maintenance</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all">
                <div className="w-16 h-16 bg-gradient-to-r from-#090B20-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}