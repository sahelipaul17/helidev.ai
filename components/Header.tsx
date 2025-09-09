'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Bot, Sparkles } from 'lucide-react';
import AuthModal from './AuthModal';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    if (token && userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleAuthSuccess = (userData, token) => {
    setUser(userData);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <>
    <header className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-#090B20-500 to-orange-600 rounded-lg flex items-center justify-center">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Helidev.ai</h1>
              <p className="text-xs text-white-300">AI Solutions</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-white hover:text-#090B20-300 transition-colors">Home</a>
            <a href="#services" className="text-white hover:text-#090B20-300 transition-colors">Services</a>
            <a href="#about" className="text-white hover:text-#090B20-300 transition-colors">About</a>
            <a href="#portfolio" className="text-white hover:text-#090B20-300 transition-colors">Portfolio</a>
            <a href="#contact" className="text-white hover:text-#090B20-300 transition-colors">Contact</a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-white">Welcome, {user.name}</span>
                <button 
                  onClick={handleLogout}
                  className="px-4 py-2 text-white hover:text-#090B20-300 transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button 
                onClick={() => setIsAuthModalOpen(true)}
                className="px-6 py-2 bg-gradient-to-r from-#090B20-600 to-orange-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-orange-700 transition-all transform hover:scale-105"
              >
                Get Started
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-white hover:text-blue-300 transition-colors">Home</a>
              <a href="#services" className="text-white hover:text-blue-300 transition-colors">Services</a>
              <a href="#about" className="text-white hover:text-blue-300 transition-colors">About</a>
              <a href="#portfolio" className="text-white hover:text-blue-300 transition-colors">Portfolio</a>
              <a href="#contact" className="text-white hover:text-blue-300 transition-colors">Contact</a>
              {user ? (
                <div className="flex flex-col space-y-2">
                  <span className="text-white">Welcome, {user.name}</span>
                  <button 
                    onClick={handleLogout}
                    className="px-4 py-2 text-white hover:text-blue-300 transition-colors w-fit"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <button 
                  onClick={() => setIsAuthModalOpen(true)}
                  className="px-6 py-2 bg-gradient-to-r from-blue-600 to-orange-600 text-white rounded-lg font-medium w-fit"
                >
                  Get Started
                </button>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>

    <AuthModal
      isOpen={isAuthModalOpen}
      onClose={() => setIsAuthModalOpen(false)}
      onAuthSuccess={handleAuthSuccess}
    />
    </>
  );
}