'use client';

import { ArrowRight, Sparkles, Zap, Bot } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-20 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 rounded-full text-blue-300 text-sm font-medium border border-blue-500/30">
              <Sparkles className="w-4 h-4 mr-2" />
              AI-Powered Solutions
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Transform Your Business with
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"> Custom AI</span>
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            We create intelligent automation solutions, custom GPT models, and AI-powered bots that revolutionize how you work. 
            From Make.com to n8n integrations, we teach and implement cutting-edge AI technology.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
              Start Your AI Journey
              <ArrowRight className="inline ml-2 w-5 h-5" />
            </button>
            <button className="px-8 py-4 border border-white/20 text-white rounded-xl font-semibold hover:bg-white/10 transition-all">
              Watch Demo
            </button>
          </div>

          {/* Feature Icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Bot className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Custom GPT Models</h3>
              <p className="text-gray-400">Tailored AI solutions for your specific business needs</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">AI Automation</h3>
              <p className="text-gray-400">Streamline workflows with Make.com and n8n integrations</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">AI Education</h3>
              <p className="text-gray-400">Learn to build and deploy AI solutions yourself</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}