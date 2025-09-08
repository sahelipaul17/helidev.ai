'use client';

import { Bot, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black/20 border-t border-white/10 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Helidev.ai</h3>
                <p className="text-xs text-blue-300">AI Solutions</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Empowering businesses with cutting-edge AI solutions, custom GPT models, and intelligent automation.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>hello@helidev.ai</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-blue-300 transition-colors">Custom GPT Development</a></li>
              <li><a href="#" className="hover:text-blue-300 transition-colors">AI Chatbot Solutions</a></li>
              <li><a href="#" className="hover:text-blue-300 transition-colors">AI Automation</a></li>
              <li><a href="#" className="hover:text-blue-300 transition-colors">AI Education</a></li>
              <li><a href="#" className="hover:text-blue-300 transition-colors">Consulting</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-6">Resources</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-blue-300 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-blue-300 transition-colors">Tutorials</a></li>
              <li><a href="#" className="hover:text-blue-300 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-blue-300 transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-blue-300 transition-colors">Support</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-blue-300 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-blue-300 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-blue-300 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-300 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-blue-300 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Helidev.ai. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-blue-300 transition-colors text-sm">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-blue-300 transition-colors text-sm">Terms</a>
              <a href="#" className="text-gray-400 hover:text-blue-300 transition-colors text-sm">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}